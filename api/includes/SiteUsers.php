<?php

require_once('db.php');

class SiteUsers {

  private function __construct() {
  }

  public static function authenticate($user) {
    $db = DB::getInstance();
    $resp = "";
    try {
      $query = $db->query("SELECT * FROM USERS WHERE username='" . $user['username'] . "'", PDO::FETCH_ASSOC);
      if ($query) {
        $rows = $query->fetchAll();
        if (!isset($rows[0])) { return false; }
        $password = $rows[0]['password'];
        $ver = self::verifyPassword($user['password'], $password);
        $resp = ( $ver == TRUE ? json_encode($rows[0]) : json_encode($ver) );
      }
      else {
      }
    }
    catch (Exception $e) {
      $db->rollBack();
      $resp =  $e->getMessage();
    }
    return $resp;
  }

  private static function verifyPassword($submittedPassword, $dbPassword) {
    return password_verify($submittedPassword, $dbPassword);
  }

  public static function getUserList() {
    $db = DB::getInstance();
    $resp = "";
    try {
      $query = $db->query("SELECT first_name, last_name, username, lump FROM USERS ORDER BY last_name ASC", PDO::FETCH_ASSOC);
      $rows = $query->fetchAll();
      $resp = json_encode($rows);
      //echo "Transaction successful, data entered";
    }
    catch (Exception $e) {
      $db->rollBack();
      $resp =  $e->getMessage();
    }
    return $resp;
  }

  public static function addUser($userData) {
    $db = DB::getInstance();
    $vals = self::stringify($userData);
    $columns = "first_name, last_name, username, password, lump, admin, date_created";
    $mssg = "";

  // Insert form data into database
    try {
      $db->beginTransaction();
      $db->exec("INSERT INTO USERS ($columns) VALUES ($vals)");
      $db->commit();
      $mssg = "Transaction successful, data entered";
    }
    catch (Exception $e) {
      $db->rollBack();
      $mssg = $e->getMessage();
    }
    return $mssg;
  }

/**
 * Takes data from form submission in key value format, reformats
 * into one large string as required for insertion into MySQL. String
 * values are given extra quotes except admin/lump numerical values.
 *
 * @param array $data Key value pairs from user registration form
 *
 * @return string Formatted string for MySQL insertion
 */
  private static function stringify($data) {
    $keys = array_keys($data);
    $vals = array_values($data);
    $str = "";
    for($i = 0; $i < count($vals); $i++) {
      if ($keys[$i] == 'admin' || $keys[$i] == 'lump') {
        $str .= $vals[$i] . ", ";
      }
      else {
        $str .= "'";
        $str .= ( isset($vals[$i + 1]) ) ? $vals[$i] . "', " : $vals[$i] . "'";
      }
    }
    return $str;
  }
}


?>
