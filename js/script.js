// Dark/Light toggle
function toggleMode(){
  document.body.classList.toggle("light");
}

// Slider functionality
document.querySelectorAll(".slider").forEach(slider=>{
  let images = slider.querySelectorAll("img");
  let index = 0;

  slider.querySelector(".next").onclick = ()=>{
    images[index].classList.remove("active");
    index = (index + 1) % images.length;
    images[index].classList.add("active");
  }

  slider.querySelector(".prev").onclick = ()=>{
    images[index].classList.remove("active");
    index = (index - 1 + images.length) % images.length;
    images[index].classList.add("active");
  }
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll(){
const windowHeight = window.innerHeight;

reveals.forEach(el => {
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}
});
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
const text = " Senior Mobile Developer";
let i = 0;

function type() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 70);
  }
}

type();

document.addEventListener("mousemove", e => {
  const moveX = (e.clientX / window.innerWidth - 0.5) * 20;
  const moveY = (e.clientY / window.innerHeight - 0.5) * 20;

  document.querySelector(".hero").style.transform =
    `translate(${moveX}px, ${moveY}px)`;
});

document.querySelectorAll(".project-img").forEach(img=>{
  img.addEventListener("click",()=>{
    const overlay=document.createElement("div");
    overlay.style.position="fixed";
    overlay.style.top=0;
    overlay.style.left=0;
    overlay.style.width="100%";
    overlay.style.height="100%";
    overlay.style.background="rgba(0,0,0,.9)";
    overlay.style.display="flex";
    overlay.style.alignItems="center";
    overlay.style.justifyContent="center";
    overlay.style.cursor="zoom-out";

    const big=document.createElement("img");
    big.src=img.src;
    big.style.maxWidth="90%";
    big.style.maxHeight="90%";

    overlay.appendChild(big);
    document.body.appendChild(overlay);

    overlay.onclick=()=>overlay.remove();
  });
});

document.querySelectorAll(".btn").forEach(btn => {

btn.addEventListener("mousemove", e => {

const rect = btn.getBoundingClientRect();

const x = e.clientX - rect.left - rect.width/2;
const y = e.clientY - rect.top - rect.height/2;

btn.style.transform =
`translate(${x*0.2}px, ${y*0.2}px)`;

});

btn.addEventListener("mouseleave", ()=>{
btn.style.transform="translate(0,0)";
});

});

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}

});