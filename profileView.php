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
              <li><a href="authorization.html">log in</a></li>
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
        <img class="profileImage youreProfileImage bigProfileImage" src="https://cdn.discordapp.com/attachments/730141789490512005/1107589808135606343/blank-profile-pic.png" alt="">
        <div class="profileTextBig">
            <h1 class="titleTime whiteWeightFont youreProfileName">youreNickName</h1>
            <h1 class="titleTime youreProfileRaiting">1160 elo</h1>
        </div>
        <div class="fill-remaining-space"></div>
        <img class="icon" src="https://cdn.discordapp.com/attachments/730141789490512005/1108166099276660758/White_pencil.png" alt="">
        
    </div>
    <h1 class="titleTime dataRegistration">connected 31 may 2023</h1>

    <div class="friendsListContainer">
      <div class="friendsListView">
          <h1 class="titleTime">👤 Friends:</h1>
            <div class="friendsList">
            
              <div class="profileView profileViewFiend">
                <img class="profileImage youreProfileImage"  src="https://cdn.discordapp.com/attachments/730141789490512005/1107589808135606343/blank-profile-pic.png" alt="">
                <div class="profileText">
                    <p class="profileName friendProfileName">friendNickName</p>
                    <h1 class="profileRaiting friendProfileRaiting">1125</h1>
                </div>
                </div>

                <div class="profileView profileViewFiend">
                  <img class="profileImage youreProfileImage"  src="https://cdn.discordapp.com/attachments/730141789490512005/1107589808135606343/blank-profile-pic.png" alt="">
                  <div class="profileText">
                      <p class="profileName friendProfileName">friendNickName</p>
                      <h1 class="profileRaiting friendProfileRaiting">1125</h1>
                  </div>
                  </div>
                  <div class="profileView profileViewFiend">
                    <img class="profileImage youreProfileImage"  src="https://cdn.discordapp.com/attachments/730141789490512005/1107589808135606343/blank-profile-pic.png" alt="">
                    <div class="profileText">
                        <p class="profileName friendProfileName">friendNickName</p>
                        <h1 class="profileRaiting friendProfileRaiting">1125</h1>
                    </div>
                    </div>


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
        <li class="menu__item"><a class="menu__link" href="authorization.html">log in</a></li>
    
      </ul>
      <p>&copy;2023 | All Rights Reserved</p>
    
    </footer> 
    <script src="js/menu/footer.js"></script>
  </div>
</html>