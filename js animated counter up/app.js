const col = document.querySelectorAll(".con1");
const speed = 500;

col.forEach((con1) => {
  const update = () => {
    const temp = +con1.getAttribute("data-target");
    const count = +con1.innerText;

    const inc = temp / speed;

    console.log(count);
    console.log(inc);

    if (count < temp) {
      con1.innerText = count + inc;
      setInterval(update, 1);
    } else {
      con1.innerText = temp;
    }
  };

  update();
});
