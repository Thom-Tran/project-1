// Button Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");
if(buttonMenuMobile){
    const menu = document.querySelector(".header .inner-menu");
    buttonMenuMobile.onclick = ()=>{
        const isShow = menu.getAttribute("show");
        if(isShow == "yes"){
            menu.setAttribute("show", "");
        }
        else{
            menu.setAttribute("show", "yes");
        }
    }
}

//Khởi tạo AOS
AOS.init();
// Hết khởi tạo AOS

// Khởi tạo swiperBlock
const swiperBlog = new Swiper(".swiper-blog", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 12,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
      },
    },
    });
// Hết Khởi tạo swiperBlock