//showing navigation bar
const showNav=document.getElementById("bi-list");
const hideNav=document.getElementById("bi-x");
const width=window.innerWidth;

//home hide navogation panel
home.addEventListener("click",function(){
    document.getElementById("nav").style.left="-60%";
    if(width>768){
    document.getElementById("nav").style.left="0";
    }
})

//Show Navigation panel for mobile
showNav.addEventListener("click", function(){
    document.getElementById("nav").style.left="0%";
    if(width>768){
        document.getElementById("nav").style.left="0";
        }
});

//hide navigation panel for mobile
hideNav.addEventListener("click",function(){
    document.getElementById("nav").style.left="-60%";
    if(width>768){
        document.getElementById("nav").style.left="0";
        }
});

