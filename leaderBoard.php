<?php
    require_once 'php/sqlConnect.php';

    $result = $connect->query("SELECT Name, Rating , ImgLink FROM `Acounts` ORDER BY `Rating` DESC  LIMIT 10");
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

    <meta name="viewport" content="width=device-width, initial-scale=1"> 
       <link rel="icon" src = "https://cdn.discordapp.com/attachments/730141789490512005/1106270037393805424/wp.png">
    
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
        <h1>leaderBoard</h1>
    </div>
      <div class="friendsListView">
       
          <h1 class="titleTime">🏆 Leaders:</h1>
            <div class="friendsList">
            
            <?php
             $index = 0;
             $emojis = array("🥇","🥈","🥉"," ");
                  if ($result !== false)
                   {
                       while($row = $result->fetch_assoc()) {
                        $index++;
                        $stringName = $row['Name'];
                        echo "<div class='profileView profileViewFiend'>";
                        echo "<img class='profileImage youreProfileImage'src='{$row['ImgLink']}' onclick='OpenProfile(\"$stringName\")'>";
                        echo "<div class='profileText'>";
                        echo  "<p class='profileName friendProfileName'onclick='OpenProfile(\"$stringName\")'>{$row['Name']}</p>";
                        echo   "<h1 class='profileRaiting friendProfileRaiting'>{$row['Rating']} elo</h1>";
                        echo "</div>";
                        echo "<div class='fill-remaining-space'></div>";
                        echo "<p class='profileName'>{$emojis[($index>3?3:$index-1)]} {$index} </p>";
                        echo "</div>"; 
                     }
                   }
                   $result->free();
            ?>


              </div>
          </div>
          
    </div>
    <div id = "void"></div>
</body>

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
        <li class="menu__item"id="logOut"><a onclick="LogOut()" class="menu__link" href="authorization.html">log out</a>
    
      </ul>
      <p>&copy;2023 | All Rights Reserved</p>
    

      <script src="js\menu\profiles.js"></script>
  <script src="js/menu/footer.js"></script>
</html>