
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
      <div class="buttonContainerColumn newGameContainer">
          <div class="headerMenu">
              <h1>new game</h1>
          </div>

          <select class="buttonStyle1 selectionMainMenu" id="selectionMain" type="select" name="opponent">
              <option value="bot">play with bot</option>
              <option value="pass">play by pass</option>
          </select>

          <h1 class="titleTime" id="message"></h1>

          <h1 class="titleTime">🚀 Bullet</h1>
          <div class="buttonContainerRow">
              <button class="buttonStyle1 radioButtonStyle1" name="time" value="60">1m</button>
              <button class="buttonStyle1 radioButtonStyle1" name="time" value="120">2m</button>
          </div>
          <h1 class="titleTime">⚡ Blitz</h1>
          <div class="buttonContainerRow">
              <button class="buttonStyle1 radioButtonStyle1" name="time" value="300">5m</button>
              <button class="buttonStyle1 radioButtonStyle1" name="time" value="420">7m</button>
          </div>
          <h1 class="titleTime">⏱️ Rapid</h1>
          <div class="buttonContainerRow">
              <button class="buttonStyle1 radioButtonStyle1" name="time" value="600">10m</button>
              <button class="buttonStyle1 radioButtonStyle1" name="time" value="900">15m</button>
          </div>
          <button class="buttonStyle1 buttonMainMenu" onclick="submitOnClick()">Play</button>
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
        <li class="menu__item"id="logOut"><a onclick="LogOut()" class="menu__link">log out</a>
      </ul>
      <p>&copy;2023 | All Rights Reserved</p>
    
    </footer>
    <script src="js\menu\footer.js"></script>
    <script src="js\menu\menu.js"></script>
    <script src="js\menu\profiles.js"></script>
</html>