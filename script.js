const glow = document.querySelector(".cursor-glow");

if(glow){

document.addEventListener("mousemove",(e)=>{

glow.style.opacity="1";

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


document.addEventListener("mouseleave",()=>{

glow.style.opacity="0";

});

}



const music=document.getElementById("background-music");

const btn=document.getElementById("music-toggle");


if(music && btn){


btn.addEventListener("click",()=>{


if(music.paused){


music.volume=.3;

music.play().catch(()=>{});


btn.textContent="🔊 Music: On";


localStorage.setItem(

"musicPlaying",

"true"

);


}


else{


music.pause();


btn.textContent=

"🔈 Music: Off";


localStorage.setItem(

"musicPlaying",

"false"

);


}


});



window.addEventListener("load",()=>{


if(

localStorage.getItem(

"musicPlaying"

)==="true"

){


music.volume=.3;


music.play()

.then(()=>{


btn.textContent=

"🔊 Music: On";

})

.catch(()=>{});


}


});


}