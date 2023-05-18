<?php
    session_start();
    require_once 'php/sqlConnect.php';

    
    $profileName = $_SESSION['anotherUser']==''||$_SESSION['anotherUser']==null?$_SESSION['mainUser']:$_SESSION['anotherUser'];
    $_SESSION['anotherUser'] = '';
    if(empty($_SESSION['mainUser']))
    {
      header("Location: authorization.html");
      die();
    }
    $result = $connect->query("SELECT `Name`,`Rating`,`ImgLink`,`ConnectedDay` FROM `Acounts` WHERE `Name`= '{$profileName}' limit 1");
    
?>
<!DOCTYPE html>
<html lang="en">
    
    
<head>
    <meta charset="UTF-8">
   
    <link rel="stylesheet" href="css/board.css">
    <link rel="stylesheet" href="css/main.css">
     <link rel="stylesheet" href="css/navBar.css">
     <link rel="stylesheet" href="css/footer.css">
     <link rel="stylesheet" href="css/profile.css">
    <link rel="icon" src = "https://cdn.discordapp.com/attachments/730141789490512005/1106270037393805424/wp.png">
  
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Chess project</title>
   </head>
<header>
    <nav>
        <div class="navbar">
          <div class="container nav-container">
              <input class="checkbox" type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>  
            <div class="logo">
              <h1>Chess.online <img class="logoImg" src="https://cdn.discordapp.com/attachments/730141789490512005/1106270037393805424/wp.png" alt=""></h1>
            </div>
            <div class="menu-items">
              <li><a href="Index.php">Home</a></li>
              <li><a href="profileView.php">profile</a></li>
              <li><a href="leaderBoard.php">leaderboard</a></li>
              <li><a href="FindNewFriend.php">find new friend</a></li>
              
              <li id="logIn"><a href="authorization.html">log in</a></li>
              <li id="logOut"><a onclick="LogOut()">log out</a></li>
            </div>
          </div>
        </div>
      </nav>
</header>
<body>
    
  <div class="buttonContainerColumn">
    <div class="headerMenu">
        <h1>profile</h1>
    </div>
    <div class="profileView">
<?php
      if ($result !== false)
      {
        while($row = $result->fetch_assoc()) {
          echo "<img class='profileImage youreProfileImage bigProfileImage' src='{$row['ImgLink']}' alt=''>
          <div class='profileTextBig' style='min-width: 160px;'>
              <h1 class='titleTime whiteWeightFont youreProfileName'>$profileName</h1>
              <h1 class='titleTime youreProfileRaiting'>{$row['Rating']} elo</h1>
          </div>
          <div class='fill-remaining-space'></div>
          <img class='icon' src='https://cdn.discordapp.com/attachments/730141789490512005/1108166099276660758/White_pencil.png' alt=''>
          
      </div>
      <h1 class='titleTime dataRegistration'>{$row['ConnectedDay']}</h1>";
        }
      }
  
      $result->free();
?>
    <div class="friendsListContainer">
      <div class="friendsListView">
          <h1 class="titleTime">👤 Friends:</h1>
            <div class="friendsList">
            

            <?php
              $index=0;
              $result = $connect->query("SELECT  Acounts.Name,Acounts.Rating,Acounts.ImgLink FROM Friends INNER JOIN Acounts ON Friends.FrendName = Acounts.Name WHERE Friends.Name = '{$profileName}' ORDER by Acounts.Rating DESC");
                  if ($result !== false)
                   {
                       while($row = $result->fetch_assoc()) {
                        $index++;
                        echo "<div class='profileView profileViewFiend'>";
                        echo "<img class='profileImage youreProfileImage'src='{$row['ImgLink']}' onclick='OpenProfile(\"{$row['Name']}\")'>";
                        echo "<div class='profileText'>";
                        echo  "<p class='profileName friendProfileName' onclick='OpenProfile(\"{$row['Name']}\")'>{$row['Name']}</p>";
                        echo   "<h1 class='profileRaiting friendProfileRaiting'>{$row['Rating']} elo</h1>";
                        echo "</div>";
                        echo "</div>"; 
                     }
                     if($index==0)
                     {
                        echo "<h1 class='titleTime' style='color:white;'>🙁 no friends</h1>";
                     }
                   }
                   $result->free();
            ?>


              </div>
          </div>
          </div>
    </div>
    <div id = "void"></div>
</body>
<div class="footerContainer">
<footer class="footer">
  
      <ul class="social-icon">
        <li class="social-icon__item"><a class="social-icon__link" href="#">
            <img src="https://cdn.discordapp.com/attachments/730141789490512005/1108023740819853362/inst.png" alt="">
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="#">
            <img src="https://cdn.discordapp.com/attachments/730141789490512005/1108023741075685396/link.png" alt="">
          </a></li>
        <li class="social-icon__item"><a class="social-icon__link" href="#">
            <img src="https://cdn.discordapp.com/attachments/730141789490512005/1108023741381877770/twitter.png" alt="">
          </a></li>
          <li class="social-icon__item"><a class="social-icon__link" href="#">
            <img src="https://cdn.discordapp.com/attachments/730141789490512005/1108023741637742673/yuotube.png" alt="">
          </a></li>
        </ul>
      <ul class="menu">
        <li class="menu__item"><a class="menu__link" href="Index.php">Home</a></li>
        <li class="menu__item"><a class="menu__link" href="profileView.php">profile</a></li>
        <li class="menu__item"><a class="menu__link" href="leaderBoard.php">leaderboard</a></li>
      <li class="menu__item"><a class="menu__link"  href="FindNewFriend.php">find new friend</a></li>
      <li class="menu__item" id="logIn"><a class="menu__link" href="authorization.html">log in</a></li>
        <li class="menu__item"id="logOut"><a onclick="LogOut()" class="menu__link" >log out</a>
        <script src="js\menu\profiles.js"></script>
    
      </ul>
      <p>&copy;2023 | All Rights Reserved</p>
    
    </footer> 
    <script src="js/menu/footer.js"></script>
  </div>
</html>