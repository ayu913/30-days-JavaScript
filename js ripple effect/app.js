//The clientX and clientY property returns the horizontal and vertical coordinate (according to the client area) of
//the mouse pointer when a mouse event was triggered.
//

const buttons = document.querySelectorAll("a");
buttons.forEach((button) => {
  button.onclick = function (e) {
    let x = e.clientX - e.target.offsetLeft;
    console.log(e.clientX);
    console.log(e.target.offsetLeft);
    console.log(x);
    let y = e.clientY - e.target.offsetTop;
    let ripple = document.createElement("span");
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    this.appendChild(ripple);
    setTimeout(function () {
      ripple.remove();
    }, 600); // 1second = 1000ms
  };
});
