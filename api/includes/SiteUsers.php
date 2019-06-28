<?php

require_once('db.php');
define('ADMIN_EMAIL', 'consyder@dfci.harvard.edu');

class SiteUsers {
  private function __construct() {
  }

  public static function authenticate($user) {
    $db = DB::getInstance();
    $resp = "";
    try {
      $query = $db->query("SELECT * FROM `users` WHERE username='" . $user['username'] . "'", PDO::FETCH_ASSOC);
      if ($query) {
        $rows = $query->fetchAll();
        if (!isset($rows[0])) { return false; }
        $password = $rows[0]['password'];
        $ver = self::verifyPassword($user['password'], $password);
        $resp = ( $ver == TRUE ? json_encode($rows[0]) : json_encode($ver) );
      }
      else {
        //error_log("Problem with query");
      }
    }
    catch (Exception $e) {
      $db->rollBack();
      $resp =  $e->getMessage();
    }
    return $resp;
  }

  public static function sendAnxietyEmail($email) {
    $to = ADMIN_EMAIL;
    $subject = "Decision aid user requested contact";
    $mssg = "A breast cancer decision aid user has requested that someone ";
    $mssg .= "contact her about support options. Her email address is:\r\n\r\n";
    $mssg .= $email;
    $header = "From: consyderuser@consyderdecisiontool.org\r\n";
    $header .= "Bcc: dave_rothfarb@dfci.harvard.edu";
    mail($to, $subject, $mssg, $header);
    return "Email has been sent";
  }

  private static function verifyPassword($submittedPassword, $dbPassword) {
    return password_verify($submittedPassword, $dbPassword);
  }

  public static function getUserList() {
    $db = DB::getInstance();
    $resp = "";
    try {
      $query = $db->query("SELECT id, first_name, last_name, username, lump, admin FROM `users` ORDER BY last_name ASC", PDO::FETCH_ASSOC);
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
    $vals = self::prepareInsert($userData);
    $columns = "lump, admin, first_name, last_name, username, password, date_created";
    $mssg = "";

  // Insert form data into database
    try {
      $db->beginTransaction();
      $db->exec("INSERT INTO `users` ($columns) VALUES ($vals)") or die(print_r($db->errorInfo(), true));
      $mssg = $db->lastInsertId();
      $db->commit();
    }
    catch (Exception $e) {
      $db->rollBack();
      $mssg = $e->getMessage();
    }
    return $mssg;
  }

  public static function updateUser($userData) {
    $db = DB::getInstance();
    $id = $userData['id'];
    unset($userData['id']);
    $updates = self::prepareUpdate($userData);
    $mssg = "";

    try {
      $db->beginTransaction();
      $db->exec("UPDATE `users` SET $updates WHERE id=$id") or die(print_r($db->errorInfo(), true));
      $db->commit();
      $mssg = "Transaction successful, user updated";
    }
    catch (Exception $e) {
      $db->rollBack();
      $mssg = $e->getMessage();
    }
    return $mssg;
    /*
     */
  }


  public static function removeUser($id) {
    $db = DB::getInstance();
    $mssg = "";

  // Insert form data into database
    try {
      $db->beginTransaction();
      $db->exec("DELETE FROM `users` WHERE ID=$id");
      $db->commit();
      $mssg = "Transaction successful, user deleted";
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
  private static function prepareInsert($data) {
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
  private static function prepareUpdate($updates) {
    $updateStr = "";
    $iter = 0;
    foreach($updates as $key => $val) {
      $updateStr .= $key . "='" . $val . "'";
      if($iter < count($updates) -1) {
        $updateStr .= ",";
      }
      $iter++;
    }
    return $updateStr;
  }
}


?>
