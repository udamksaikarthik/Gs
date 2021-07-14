const imageBig = document.getElementById("image");

const content = document.getElementById("background");

const nav = document.querySelector("li");

const logo = document.getElementById("logo");

const button = document.getElementById("button");

const backButton = document.getElementById("backButton");

const layer1 = document.getElementById("layer-1");

const layer2 = document.getElementById("layer-2");

const layer3 = document.getElementById("layer-3");

const navInside = document.getElementById("navInside");

gsap.from(imageBig,{x:800,duration: 1});
gsap.from(content,{x: 0, duration: 1});
gsap.to(nav,{opacity: 1, duration: 1,delay: 1});
gsap.to(logo,{opacity: 1, duration: 1,delay: 1});
gsap.to(button,{opacity: 1, duration: 1,delay: 1});

button.addEventListener("click",()=>{
    gsap.to(layer1,{x:0,duration: 1});
    gsap.to(layer2,{x:0,duration: 1,delay: 0.5});
    gsap.to(layer3,{x:0,duration: 1,delay: 1});
    gsap.to(backButton,{opacity:1,duration: 1,delay: 1.5});
    gsap.to(navInside,{opacity:1,duration: 1,delay: 1.5});
})

backButton.addEventListener("click",()=>{
    gsap.to(layer1,{x: '100%',duration: 1,delay: 1.5});
    gsap.to(layer2,{x: '100%',duration: 1,delay: 1});
    gsap.to(layer3,{x: '100%',duration: 1,delay: 0.5});
    gsap.to(backButton,{opacity:0,duration: 1});
    gsap.to(navInside,{opacity:0,duration: 1});
})
