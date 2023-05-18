<?php 
	
  require_once 'sqlConnect.php';
    
  session_start();
  
     if($_POST['logIn'] == "yes")
     {    
            $result = $connect->query("SELECT `Password` FROM `Acounts` WHERE `Name` = '{$_POST['name']}'");

           
            if ($result !== false)
            {
              if ($result->num_rows == 0) 
              {
                 echo "not an existing user";
              }
              else
              {
                while ($row = $result->fetch_assoc()) {
                      if($row['Password']!==$_POST['password'])
                      {
                          echo "wrong password";
                      }
                      else
                      {
                         echo "password correct";
                         $_SESSION['mainUser'] = $_POST['name'];
                         $_SESSION['anotherUser'] ='';
                      }

                  }

                  $result->free();
              }
          }
     }
     else{

      $result = $connect->query("SELECT `Password` FROM `Acounts` WHERE `Name` = '{$_POST['name']}' || `Mail` = '{$_POST['mail']}'");

           
      if ($result !== false)
      {
        if ($result->num_rows == 0) 
        {
          $result->free();
          $result = $connect->query("INSERT INTO `Acounts`(`Name`, `Mail`, `Rating`, `Password`, `ImgLink`, `ConnectedDay`) VALUES ('{$_POST['name']}','{$_POST['mail']}', 1000,'{$_POST['password']}','https://cdn.discordapp.com/attachments/730141789490512005/1107589808135606343/blank-profile-pic.png','{$_POST['dayCon']}')");
                
            if ($result !== false)
            {
               echo "account created";
               $_SESSION['mainUser'] = $_POST['name'];
               $_SESSION['anotherUser'] ='';
            }
          else{
              echo "error!";
          } 
        }
        else {
          echo "user with this name or email already exist";
        }
      }

           
     }
	  
?>