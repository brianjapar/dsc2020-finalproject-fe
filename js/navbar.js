var navContainer = document.getElementById("navbar");
var navs = navContainer.getElementsByClassName("navItem");
for(var i =0; i < navs.length; i++) {
    navs[i].addEventListener("click",function(){
        var curr= document.getElementById("active");
        curr[0].className = curr[0].className.replace(" active","");
        this.className += " active";
    });
}
