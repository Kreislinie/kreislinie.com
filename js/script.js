var headLogo = document.getElementById("simon-logo-head");
var headLogoLine = document.getElementById("simon-line-head");

headLogo.addEventListener("mouseover", mOver, false);
headLogo.addEventListener("mouseout", mOut, false);

function mOver() {
   headLogoLine.classList.add("simon-line-hover");
}

function mOut() {  
   headLogoLine.classList.remove("simon-line-hover");
}
