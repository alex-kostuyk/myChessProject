<?php 
     /*$host_name = 'db5013059027.hosting-data.io';
     $database = 'dbs10964523';
     $user_name = 'dbu5354166';
     $password = '246897531qQ-';*/
     $host_name = '127.0.0.1:3306';
     $database = 'chess';
     $user_name = 'root';
     $password = 'root';
  
    $connect = new mysqli($host_name, $user_name, $password, $database);
  
    if ($connect->connect_error) {
      die('Failed to connect to MySQL');
    } 
