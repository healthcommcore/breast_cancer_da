<?php
/**
 * This handy PDO db connection was lifted from Kevin Waterson
 * https://phpro.org/tutorials/Introduction-to-PHP-PDO.html#11
 */
require_once('globals.php');

class DB {

  private static $instance = NULL;

  private function __construct() {
  }

  public static function getInstance() {

    if (!self::$instance) {
      try {
        self::$instance = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
      }
      catch(PDOException $e) {
        error_log("Error! " . $e->getMessage());
        die();
      }
    }
    return self::$instance;
  }
}



  
