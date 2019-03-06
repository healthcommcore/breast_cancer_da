<?php
  header("Access-Control-Allow-Origin: http://localhost:3000");
  header("Access-Control-Allow-Credentials: true");
  header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE");
  header("Access-Control-Max-Age: 1000");
  header("Access-Control-Allow-Headers: Content-Type, Content-Range, Content-Description");

  require_once('includes/SiteUsers.php');

  $req = strtolower($_SERVER['REQUEST_METHOD']);
  $path = strtolower($_GET['req']);

  if ($path == 'users' && $req == 'get') {
    $userList = SiteUsers::getUserList();
    echo $userList;
  }
  else if($path == 'authenticate' && $req == 'post') {
    $data = json_decode( file_get_contents("php://input"), true );
    $result = SiteUsers::authenticate($data);
    echo $result;
  }
  else if($path == 'track_user' && $req == 'post') {
  }
  else if($path == 'anxiety_email' && $req == 'post') {
    $data = file_get_contents("php://input");
    $result = SiteUsers::sendAnxietyEmail($data);
    echo $result;
  }
  else if($path == 'add_user' && $req == 'post') {
    date_default_timezone_set('America/New_York');
  // Encrypt password and format submitted form data properly for 
  // inserting into MySQL
    $data = json_decode( file_get_contents("php://input"), true );
    $data['password'] = password_encrypt($data['password']);
    $data['date_created'] = date("Y-m-d H:i:s", $_SERVER['REQUEST_TIME']);
    $mssg = SiteUsers::addUser($data);
    echo $mssg;
  }
  else if($path == 'update_user' && $req == 'post') {
  // Encrypt password and format submitted form data properly for 
  // inserting into MySQL
    $data = json_decode( file_get_contents("php://input"), true );
    if(isset($data['password'])) {
      $data['password'] = password_encrypt($data['password']);
    }
    $mssg = SiteUsers::updateUser($data);
    print_r($mssg);
  }
  else if($path == 'delete_user' && $req == 'post') {
    $id = file_get_contents("php://input");
    //error_log("User id: " . $id);
    $result = SiteUsers::removeUser($id);
  }
  else {
    echo $path;
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
