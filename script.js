// Navbar Color Change

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");


if(window.scrollY>100){

navbar.style.background="#0d47a1";

}

else{

navbar.style.background="rgba(0,0,0,.7)";

}


});



// Counter Animation


let counters=document.querySelectorAll(".counter");


counters.forEach(counter=>{


let target=counter.innerText;


counter.innerText="0";


let count=0;


let interval=setInterval(()=>{


count++;


counter.innerText=count+"+";


if(count>=parseInt(target)){

clearInterval(interval);

counter.innerText=target;

}


},20);


});