<?php
  header("Access-Control-Allow-Origin: http://localhost:3000");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
  header("Access-Control-Max-Age: 1000");
  header("Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Description");

  require_once('includes/db.php');

  date_default_timezone_set('America/New_York');

  $db = DB::getInstance();

// Encrypt password and format submitted form data properly for 
// inserting into MySQL
  $data = json_decode( file_get_contents("php://input"), true );
  $data['password'] = password_encrypt($data['password']);
  $data['date_created'] = date("Y-m-d H:i:s", $_SERVER['REQUEST_TIME']);
  $vals = stringify($data);
  $columns = "first_name, last_name, username, password, lump, admin, date_created";

// Insert form data into database
  try {
    $db->beginTransaction();
    $db->exec("INSERT INTO USERS ($columns) VALUES ($vals)");
    $db->commit();
    echo "Transaction successful, data entered";
  }
  catch (Exception $e) {
    $db->rollBack();
    echo $e->getMessage();
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
  function stringify($data) {
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
        
/**
 * Encrypts user submitted password from registration form
 * and uses bcrypt hash/salting for encryption.
 *
 * @param string The user's unencrypted password
 *
 * @return string The encrypted/salted password for storage
 */
  function password_encrypt($password) {
    return password_hash($password, PASSWORD_BCRYPT);
  }
  

?>
