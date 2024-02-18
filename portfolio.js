document.getElementById('pic').addEventListener('mouseover',()=>{
    var shape=document.getElementById('triangle');
    shape.style.transform='translate(20px,-20px)';
});
document.getElementById('pic').addEventListener('mouseout',()=>{
    var shape=document.getElementById('triangle');
    shape.style.transform='translate(0,0)';
});
const menuicon=document.getElementById('menuicon');
const navbar=document.querySelector('.navbar');
menuicon.onclick=function(){
    navbar.classList.toggle('clicked');
    const isOpen=navbar.classList.contains('clicked');

    menuicon.classList=isOpen?'fa-solid fa-xmark':'fa-solid fa-bars';
}
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let slider=document.querySelector('.slider');
next.onclick=()=>{
    let slides=document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
};
prev.onclick=()=>{
    let slides=document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length-1]);
};