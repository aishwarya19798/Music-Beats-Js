window.addEventListener("load", function () {
  const sound = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll("#pads div");
  const visual = document.querySelector("#visual");
  const colors = ["lightskyblue","lightgreen","lightsalmon","lightslategray","lightcoral","lightgray"];

  // for making sounds
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sound[index].currentTime = 0;
      sound[index].play();
      constructBalls(index);
    });
  });

  // for making colorful balls
  const constructBalls = index => {
    const balls = document.createElement('div');
    visual.appendChild(balls);
    balls.style.backgroundColor = colors[index];
    balls.style.animation = 'jump 1s ease';
    balls.addEventListener('animationend',function(){
        visual.removeChild(this);
    })
  }
});