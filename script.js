/* --------responsive navbar  section---------*/
const  mobile_nav=document.querySelector(".mobile-navbar-btn");
const header_ele=document.querySelector(".header");

mobile_nav.addEventListener("click",togglefun)
function togglefun()
{
  header_ele.classList.toggle("active");
}
/* ------------sticky responsive navbar section---------*/


const heroSection=document.querySelector(".hero-section");
const observer=new IntersectionObserver(
  (entries)=>{
    const ent=entries[0];
    console.log(ent);
     !ent.isIntersecting
     ?document.body.classList.add("sticky")
     :document.body.classList.remove("sticky");

  },
  {
    root:null,
    threshold:0,
  }
);
observer.observe(heroSection);
/* ------------clickable  navbar section---------*/

// let navbar_link=document.querySelectorAll(".navbar-link");
// navbar_link.forEach((curLink)=>{
//   curLink.classList.remove("active");
// })

// navbar_link.addEventListener("click",remove())
// function remove(){
//   navbar_link.classList.remove("active");
// }


/* ------------hero section rotate text--------*/
// let text=document.querySelector(".text p");
// text.innerHTML=text.innerHTML.split(" ").map((char,i)=>
//   `<b style="tranform:rotate(${i * 6.3}deg")>${char}</b>`
// ).join(" ");


/* --------portfolio section---------*/
/*
const p_btns=document.querySelector(".p-btns");
const p_btn=document.querySelectorAll(".p-btn");
const p_img_elm=document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click",(e)=>{

    const p_btn_clicked=e.target;
    if(!p_btn_clicked.classList.contains("p-btn")) return;
    
    p_btn.forEach((curElm) =>{ curElm.classList.remove("p-btn-active")});
    p_btn_clicked.classList.add("p-btn-active");
 

    // to find the number in data attribute
    const btn_num=p_btn_clicked.dataset.btnNum;
    // console.log(btn_num);

    const img_active=document.querySelectorAll(`.p-btn--${btn_num}`);
    // console.log(img_active);

    p_img_elm.forEach((curElm)=>{curElm.classList.add("p-img-not-active")});
    img_active.forEach((curElm)=>{curElm.classList.remove("p-img-not-active")});
   

});
*/
/*---------portfolio slides-----------*/
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween:100,
  // centeredSlides: true,
   autoplay: {
    delay: 2500,
    disableOnInteraction: false,
 },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

breakpoints: {
  240: {
    slidesPerView: 1,
    spaceBetween: 50,
  },
  400: {
    slidesPerView: 1,
    spaceBetween: 80,
  },
   980: {
     slidesPerView: 2,
     spaceBetween: 40,
   },
   1000: {
     slidesPerView: 2,
     spaceBetween: 40,
   },
  1100: {
    slidesPerView:2,
    spaceBetween:80,
  },
},
});
  


// var swiper = new Swiper(".mySwiper", {
//   slidesPerView:2,
//   spaceBetween:50,
//   autoplay:{  
//     delay:2500
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

 /*--------testimonial section---------*/
/*
 var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2 ,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
        // disableOnInteraction:false,
     },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  */

  /*media queries throgh javascript*/
  /*
  function myJsFun(widthSize){
     console.log("hello");
     if(widthSize.matches){
      new Swiper(".mySwiper", {
        slidesPerView: 1 ,
        spaceBetween: 30,} );
    
     }else{
      new Swiper(".mySwiper", {
        slidesPerView: 2 ,
        spaceBetween: 30,} );
     }
  }

  const widthSize=window.matchMedia('(max-width:780px');
 myJsFun(widthSize);
  widthSize.addEventListener('change',myJsFun);
  */
/*--------scroll to top section---------*/
// const heroSection=document.querySelector(".hero-section");
const footerElm=document.querySelector(".footer-section");
const scrollEle=document.createElement("div");
scrollEle.classList.add("scroll-top-style");
scrollEle.innerHTML=`<i class="fa-solid fa-arrow-up"></i> `;
footerElm.after(scrollEle);

scrollEle.addEventListener("click",scrollTop);

function scrollTop(){
      heroSection.scrollIntoView(({behavior:"smooth"}));
}

/* ==========================animation on number on scrollin section========================*/
// const workSection=document.querySelector(".counter-section");
// const workObserver=new IntersectionObserver(
//   (entries,observer)=>{
//     const[entry]=entries;
 

  
//   if(!entry.isIntersecting)return;
  /*--------animated counter number section---------*/

// const counterNum=document.querySelectorAll(".counter-number");
// const speed=200;

// counterNum.forEach(test);
// function test(curElm){
  
//   function updateNum(){
//     const targetNum=parseInt(curElm.dataset.number);
   
//     const initialNum=parseInt(curElm.innerText);
    
//     const incrementNum=Math.trunc(targetNum/speed);
   

//   if(initialNum<targetNum){
//     curElm.innerText=`${initialNum+incrementNum}+`;
    
//   };
//   setTimeout(updateNum,10);
   
//   }
//    updateNum();
  

// }
// observer.unobserve(workSection);
//   },
//   {
//     root:null,
//     threshold:0,

//   }
// );
// workObserver.observe(workSection);




   
    