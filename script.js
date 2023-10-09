// function for close the side menu bar 
document.getElementById("menu-bar").onclick = function () {

    document.getElementById("slid-menu-right").style.right = "0";
    document.getElementById("slid-menu-right").style.visibility = "visible";
    document.getElementById("slid-menu-right").style.display = "block";
  
}
// function for close the side menu bar 
document.getElementById("cros-icon").onclick = function () {
    document.getElementById("slid-menu-right").style.right = "-50%";
    document.getElementById("slid-menu-right").style.visibility = "hidden";
}