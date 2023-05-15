
class Timer {
    constructor(timerElement,time) {
      this.timerElement = timerElement;
      this.textElement = timerElement.getElementsByClassName("timerText")[0];
      this.timerDuration = time;
      this.endTime = new Date().getTime() + this.timerDuration * 1000;
      this.remainingTime  = this.endTime - new Date().getTime();
      this.updateCountdown();
    }
  
    Start()
    {
        this.countdown = setInterval(this.updateCountdown.bind(this), 1000);
        this.timerElement.classList.toggle("timerActive");
        this.endTime = new Date().getTime()+ this.remainingTime;

    }
    Stop()
    {
        this.timerElement.classList.toggle("timerActive");
        clearInterval(this.countdown);
    }

    updateCountdown() {
      let currentTime = new Date().getTime();
       this.remainingTime = this.endTime - currentTime;
      let minutes = Math.floor((this.remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((this.remainingTime % (1000 * 60)) / 1000);
      
      this.textElement.textContent = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
      if (this.remainingTime <= 0) {
        SetGameWinner();
        clearInterval(this.countdown);
        this.textElement.textContent ="00:00";
      }
    }
  }

  
  let timerOpponent = new Timer(document.getElementById(("timerOpponent")),300);
  let timerYou = new Timer(document.getElementById(("timerYou")),10);
  
  function toggleTimer()
  {
      if(sides[players.you]==turn)
      {
          timerYou.Start();
          timerOpponent.Stop();
      }
      else
      {
          timerYou.Stop();
              timerOpponent.Start();
      }
  
  }
