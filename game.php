<!DOCTYPE html>
<html lang="en">
    
    
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/navBar.css">
    <link rel="stylesheet" href="css/board.css">
    <link rel="stylesheet" href="css/footer.css">
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
    <div class="boardContainer">
        <div class="playerViewContainer">
            <div class="profileViewContainer">
                <div class="profileView">
                    <img class="profileImage opponentProfileImage" src="https://cdn.discordapp.com/attachments/730141789490512005/1107589808135606343/blank-profile-pic.png" alt="">
                    <div class="profileText">
                        <p class="profileName opponentProfileName">opponent</p>
                        <p class="profileRaiting opponentProfileRaiting">1217 elo</p>
                    </div>
                </div>
                <div class="timer" id="timerOpponent"><p class="timerText">00:00</p></div>
            </div>
            <div class="showEatenPiece" id = "whiteEatenPiece">
            </div>
        </div>
    <div class="board">
      <img id ="drag-element" src="https://cdn.discordapp.com/attachments/730141789490512005/1106270037393805424/wp.png" alt="">
      <div class="popUPContainer chessPieceChoice">
          <button onclick="" class="chessPieceChoiceButton roundTop" value="Queen"><img class="chessFigure" src="" alt=""></button>
          <button onclick="" class="chessPieceChoiceButton" value="Rook"><img class="chessFigure" src="" alt=""></button>
          <button onclick="" class="chessPieceChoiceButton" value="Bishop"><img class="chessFigure" src="" alt=""></button>
          <button onclick="" class="chessPieceChoiceButton roundBottom" value="Knight"><img class="chessFigure" src="" alt=""></button>
      </div>
      <div class="popUPContainer popUPView"> 
            <div class="popUPWindow">
              <div id="popUPHeader"><h1 id = "popUPHeaderText"></h1></div>
                <div id="showResult">
                    <div class="profileViewContainer">
                        <img class="profileImage youreProfileImage"  src="https://cdn.discordapp.com/attachments/730141789490512005/1107589808135606343/blank-profile-pic.png" alt="">
                        <p class="profileNameMessage youreProfileName">you</p>
                        <p class="profileRaitingMessage youreProfileRaiting">1125</p>
                    </div>
                    <h1 id = "finalScore">0 : 0</h1>
                    <div class="profileViewContainer">
                        <img class="profileImage opponentProfileImage"  src="https://cdn.discordapp.com/attachments/730141789490512005/1107589808135606343/blank-profile-pic.png" alt="">
                        <p class="profileNameMessage opponentProfileName">opponent</p>
                        <p class="profileRaitingMessage opponentProfileRaiting">1217</p>
                    </div>

                </div>
              <button class="buttonStyle1" id="popUPButton" onClick="window.location.href = 'Index.php'">main menu</button>
            </div>
      </div>
   <table id = "tableBoard">
    <tr>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
    </tr>
    <tr>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
    </tr>
    <tr>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
    </tr>
    <tr>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
    </tr>
    <tr>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
    </tr>
    <tr>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
    </tr>
    <tr>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
    </tr>
    <tr>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
        <td class = "cell" id="black"></td>
        <td class = "cell" id="white"></td>
    </tr>
   </table>
  </div> 
      <div class="playerViewContainer">
        <div class="profileViewContainer">
            <div class="profileView">
                <img class="profileImage youreProfileImage"  src="https://cdn.discordapp.com/attachments/730141789490512005/1107589808135606343/blank-profile-pic.png" alt="">
                <div class="profileText">
                    <p class="profileName youreProfileName">You</p>
                    <p class="profileRaiting youreProfileRaiting">1125 elo</p>
                </div>
            </div>
            <div class="timer" id="timerYou"><p class="timerText">00:00</p></div>
        </div>
          <div class="showEatenPiece" id = "blackEatenPiece"></div>  
      </div>
</div>

  <script src="js/game/constantValues.js"></script>
<script src="js/game/sidesIdentefication.js"></script>
   <script src="js/game/PopUpWindows.js"></script>
   <script src="js/game/timer.js"></script>  
   <script src="js/game/objects.js"></script>
   <script src="js/game/board.js"></script>
   <script src="js/game/chessFigureMoves.js"></script>
   <script src="js/game/game.js"></script>
   <script src="js/game/randomBot.js"></script>
   <script src="js/game/drag&Drop.js"></script>
   <script src="js/game/events.js"></script>
   <script src="js/game/gameLoop.js"></script>
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
        <li class="menu__item"id="logOut"><a onclick="LogOut()" class="menu__link" >log out</a>
        <script src="js\menu\profiles.js"></script>
  
    </ul>
    <p>&copy;2023 | All Rights Reserved</p>
  </footer>
  <script src="js/menu/footer.js"></script>
</html>