<?php
/**
 * SiteUsers static class
 *
 * Author: Dave Rothfarb
 * Project: Consyder breast cancer decision aid
 * Health Communication Core 2019
 *
 * The SiteUsers class contains all logic and code for
 * the decision aid's Admin area. It is responsible for all
 * create/read/update/delete (CRUD) database operations
 * on all decision aid users, including site admins. All data
 * is passed back to the React client in JSON format. There is 
 * also code to handle sending email to the study's
 * administrator if a user chooses the option.
 */
require_once('db.php');
define('ADMIN_EMAIL', 'consyder@dfci.harvard.edu');

class SiteUsers {
  private function __construct() {
  }

// Handles user login form. Uses PDO class to securely query
// database verifying if username and password exists.
  public static function authenticate($user) {
    $db = DB::getInstance();
    $resp = "";
    try {
      $query = $db->prepare("SELECT * FROM `users` WHERE username=?");
      $query->execute([$user['username']]);
      if ($row = $query->fetch(PDO::FETCH_ASSOC)) {
        $password = $row['password'];
        $ver = self::verifyPassword($user['password'], $password);
        $resp = ( $ver == TRUE ? json_encode($row) : json_encode($ver) );
      }
      else {
        error_log("Problem with query");
      }
    }
    catch (Exception $e) {
      $db->rollBack();
      $resp =  $e->getMessage();
    }
    return $resp;
  }

// Simple email script that's triggered if a decision aid user
// wants to send an email to the study administrator
  public static function sendAnxietyEmail($email) {
    $to = ADMIN_EMAIL;
    $subject = "Decision aid user requested contact";
    $mssg = "A breast cancer decision aid user has requested that someone ";
    $mssg .= "contact her about support options. Her email address is:\r\n\r\n";
    $mssg .= $email;
    $header = "From: " . ADMIN_EMAIL . "\r\n";
    $header .= "Bcc: dave_rothfarb@dfci.harvard.edu";
    mail($to, $subject, $mssg, $header);
    return "Email has been sent";
  }

// Obtains list of all decision aid users in database
  public static function getUserList() {
    $db = DB::getInstance();
    $resp = "";
    try {
      $query = $db->query("SELECT id, first_name, last_name, username, lump, admin FROM `users` ORDER BY last_name ASC", PDO::FETCH_ASSOC);
      $rows = $query->fetchAll();
      $resp = json_encode($rows);
    }
    catch (Exception $e) {
      $db->rollBack();
      $resp =  $e->getMessage();
    }
    return $resp;
  }

// Captures data from client user registration form, alphabetically
// sorts data to match table columns, securely inserts data into 
// database using PDO.
  public static function addUser($userData) {
    $db = DB::getInstance();
    $columns = "admin, date_created, first_name, last_name, lump, password, username";
    $placeholders = ":admin, :date_created, :first_name, :last_name, :lump, :password, :username";
    $sorted = $userData;
    uksort($sorted, function ($val1, $val2) {
      return strncmp($val1, $val2, 2);
    });
    $mssg = "";

  // Insert form data into database
    try {
      $statement = $db->prepare("INSERT INTO `users` ($columns) VALUES ($placeholders)");
      $statement->execute($sorted);
  // Grab the id of the newly inserted record and pass it back to client
      $mssg = $db->lastInsertId();
    }
    catch (Exception $e) {
      $db->rollBack();
      $mssg = $e->getMessage();
    }
    return $mssg;
  }

// Update a user's record using data from client update form. Sort
// data entries as done in addUser method
  public static function updateUser($userData) {
    $db = DB::getInstance();
    $id = $userData['id'];
    $sorted = $userData;
  // Remove user id before sorting so it can be added to the end
  // of the soon to be sorted array
    unset($sorted['id']);
    uksort($sorted, function ($val1, $val2) {
      return strncmp($val1, $val2, 2);
    });
    $updates = self::prepareUpdate($sorted);
  // Add user id back in
    array_push($sorted, $id);

    try {
      $statement = $db->prepare("UPDATE `users` SET $updates");
      $statement->execute(array_values($sorted));
      $mssg = "Transaction successful, user updated";
    }
    catch (Exception $e) {
      $db->rollBack();
      $mssg = $e->getMessage();
    }
    return $mssg;
  }


// Delete user from database
  public static function removeUser($id) {
    $db = DB::getInstance();
    $mssg = "";

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

// Simple password verification function
  private static function verifyPassword($submittedPassword, $dbPassword) {
    return password_verify($submittedPassword, $dbPassword);
  }

// Format array into SQL statement in prep for inserting into 
// database
  private static function prepareUpdate($toupdate) {
    $updates = "";
    $keys = array_keys($toupdate);
    for($i = 0; $i < count($keys); $i++) {
      $updates .= $keys[$i] . "=?";
      $updates .= ($i < count($keys) - 1 ? ", " : " ");
    }
    $updates .= "WHERE id=?";
    return $updates;
  }
}


?>
