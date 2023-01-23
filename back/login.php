<?php
    require('conn.php');

    $username = $_POST['USERNAME'];
    $password = $_POST['PW'];
    
    $result = $conn->query("SELECT ID_USERS, USERNAME FROM USERS WHERE USERS = '$username' AND password = '$password'");
    $data = $result->fetchAll(PDO::FETCH_ASSOC);

    header('Access-Control-Allow-Origin: *');
    if (sizeof($data) == 0) {
        http_response_code(403);
        exit();
    }
    
    echo json_encode($data[0]);
?>