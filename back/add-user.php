<?php
    require('conn.php');
    
    $username = $_POST['USERNAME'];
    $password = $_POST['PW'];
    
    $conn->query("INSERT INTO USERS (USERNAME, PW) VALUES ('$username', '$password')");
    
    header('Access-Control-Allow-Origin: *');
    http_response_code(201);
?>