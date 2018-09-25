<?php
/**
 * This is where the Breast Cancer Decision Aid code will go
 */
  $firstname = $_POST['firstName'];

  if ( isset($firstname) ) {
    echo "<h1>$firstname</h1>";
  }
  else {
    echo "<h1>Request sent but no data returned</h1>";
  }
?>
