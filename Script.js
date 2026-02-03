particlesJS("particles-js",{
particles:{
number:{value:100},
color:{value:"#ffd700"},
move:{speed:2}
}
});

const text="Software Developer | Ethical Hacker | YouTuber | Content Creator";
let i=0;
function typing(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(typing,100);
}
}
typing();

document.getElementById("mode").onclick=function(){
document.body.classList.toggle("dark");
};

window.onload=function(){
document.getElementById("loader").style.display="none";
};

// cursor
const cursor=document.querySelector(".cursor");
document.addEventListener("mousemove",e=>{
cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";
});

// scroll animation
const sections=document.querySelectorAll("section");
window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
let top=window.scrollY;
let offset=sec.offsetTop-300;
if(top>offset){
sec.classList.add("show");
}
});
});

// mobile menu
document.getElementById("menuBtn").onclick=function(){
document.getElementById("menuLinks").classList.toggle("show");
};