window.addEventListener("load", function (e) {
  let nomer = document.querySelectorAll(".nomer");
  let num = 1;
  for (let i=0;i<nomer.length; i++) {
    nomer[i].innerHTML=num;
    num++

  }
  
});
