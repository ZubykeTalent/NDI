const menu = document.getElementById('menu');
let isFixed = false;

window.addEventListener('scroll', () => {
    const scrollpos = window.scrollY;
    const triggerpoint = 200;
    if (scrollpos > triggerpoint && !isFixed) {
        isFixed = true;
        menu.classList.add('fixed');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                menu.classList.add('show');
            });

        }
        );

    } else if (scrollpos <= triggerpoint && isFixed) {
        isFixed = false;
        menu.classList.remove('show');
        menu.classList.remove('fixed');
    }
}


);


let next = document.getElementById('next');
if(next !==null){
let list = document.querySelector('.slider .list');
let slides = document.querySelectorAll('.slider .list .slides');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');


let active = 0;
// We use the number of dots (4) to represent the REAL number of slides
let realSlidesCount = dots.length;

next.onclick = function () {
    active++;
    reloadSlider();
}
prev.onclick = function () {
    // Faking the backwards slide if we are on the first image
    if (active == 0) {
        // Snap instantly to the clone at the very end
        list.style.transition = 'none';
        active = realSlidesCount;
        list.style.left = -slides[active].offsetLeft + 'px';

        // Wait a split second for the browser to catch up, then slide backward smoothly
        setTimeout(()=>{
            list.style.transition = '1s';
            active--;
            reloadSlider();
        },50);
    return;
    }
    active--;
    reloadSlider();
}
let refreshSlider = setInterval(() => { next.click() }, 5000);
function reloadSlider() {
    console.log("current slide index:",active);
    // Ensure sliding animation is turned ON
    list.style.transition = '1s';

    let checkLeft = slides[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    // Update the dots
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    if (lastActiveDot) lastActiveDot.classList.remove('active');
    
    // If we land on the secret 5th slide, highlight the 1st dot
    let dotIndex= active == realSlidesCount? 0: active;
    dots[dotIndex].classList.add('active');

    // --- THE SEAMLESS LOOP TRICK ---
    if(active === realSlidesCount){
        // Wait exactly 1000ms (1 second) for the visual slide to finish
        setTimeout(()=>{
            list.style.transition = 'none';
            active = 0;
            list.style.left = -slides[0].offsetLeft + 'px';
        }, 1000);


    }
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => { next.click() }, 5000);
}
dots.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    })
}
);
}

//......nav....
const ham2 = document.getElementById('ham2');
const navMenu = document.querySelector('.nav');

ham2.addEventListener('click',()=>{
    navMenu.classList.toggle('show');
});

const navbuttons = document.querySelectorAll('.nav .main');

navbuttons.forEach(button=>{
    button.addEventListener('click',function(){
        if(navMenu.classList.contains('show')){
            navMenu.classList.remove('show');
        }
    });
});


//------contact us-----
window.addEventListener('load',()=>{
    const container=document.getElementById('hi');

    setTimeout(()=>{
        container.classList.add('active');
    },500);
});


//------apply------
(function(){
     emaijs.init("OM1iPiIADegue5Npq");
})();

document.getElementById("contact-form")
.addEventListener("submit",function(e){
    e.preventDefault();

    emailjs.sendForm("service_06xmjjs","template_31s1g68",this)
          .then(function(){
            alert("Message sent successfully!");
          }, function(error){
            alert("Failed to send message.");
            console.log(error);
          });
});


/*const menu = document.getElementById("menu");

window.addEventListener("scroll",  function(){
    const scrollY = window.scrollY;
    if (scrollY >=150) {
        menu.classList.add("fixed")

        setTimeout(()=>{
            menu.classList.add("show");
        },50)
    }
       else{
        menu.classList.remove("fixed", "show");
    }

});*/