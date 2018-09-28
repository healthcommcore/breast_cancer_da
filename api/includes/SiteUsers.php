<?php

require_once('db.php');

class SiteUsers {

  private function __construct() {
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
