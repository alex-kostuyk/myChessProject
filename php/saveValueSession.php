<?php

    require_once 'sqlConnect.php';

    session_start();
    

    if($_POST['anotherUser']!=null)
    {
        $_SESSION['anotherUser'] = $_POST['anotherUser'];
        echo "view";
    }
    if($_POST['addFriend']=="yes")
    {
        $result = $connect->query("INSERT INTO `Friends`(`Name`, `FrendName`) VALUES ('{$_POST['playerName']}','{$_POST['friendName']}')");
        echo "added";
    }

    if($_POST['destroy']=="yes")
    {
        session_destroy();
        echo "destroyed";
        $connect-> close();
        exit();
        
    }
    if($_POST['deleteFriend']=="yes")
    {
        $result = $connect->query("DELETE FROM `Friends` WHERE `Name` = '{$_POST['playerName']}' &&`FrendName` = '{$_POST['friendName']}'");
        echo "deleted";
    }

   
?>