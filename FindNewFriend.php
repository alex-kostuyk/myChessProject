<?php
    require_once 'php/sqlConnect.php';
    session_start();
    $result = $connect->query("SELECT Name, Rating , ImgLink FROM acounts WHERE Name NOT IN (SELECT FrendName FROM friends WHERE name = '{$_SESSION['mainUser']}') && Name!='{$_SESSION['mainUser']}' limit 8");
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
        <h1>find new friend</h1>
    </div>
      <div class="friendsListView">

        <div class="buttonContainerRow searchContainer">
          <input type="text" class="formSearch" placeholder="search for profile">
          <button class="buttonStyle1">🔍</button>
          </div>

          <h1 class="titleTime">👤 Profiles:</h1>
            <div class="friendsList">
            
            <?php
             $index = 0;
             $emojis = array("🥇","🥈","🥉"," ");
                  if ($result !== false)
                   {
                       while($row = $result->fetch_assoc()) {
                        $index++;
                        $stringName = $row['Name'];
                        echo "<div class='profileView profileViewFiend'>
                            <img class='profileImage youreProfileImage'src='{$row['ImgLink']}' onclick='OpenProfile(\"$stringName\")'>
                            <div class='profileText'>
                          <p class='profileName friendProfileName'onclick='OpenProfile(\"$stringName\")'>{$row['Name']}</p>
                           <h1 class='profileRaiting friendProfileRaiting'>{$row['Rating']} elo</h1>
                        </div>
                        <div class='fill-remaining-space'></div>
                         <button class='buttonStyle1 addButton' onclick='addFriend(\"$stringName\")'>+</button>
                              </div>"; 
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
        <script src="js\menu\profiles.js"></script>
      </ul>
      <p>&copy;2023 | All Rights Reserved</p>
    

  <script src="js/menu/footer.js"></script>
</html>