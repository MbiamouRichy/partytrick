import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'partytrick';
  // @ts-ignore
  ngOnInit(){
    // Activation ou Desactivation des li
    let nav_li = document.querySelectorAll('nav li')
    // @ts-ignore
    nav_li.forEach(li => li.addEventListener('click', () =>{
      nav_li.forEach(all_li => all_li.classList.remove('active'))
      li.classList.add('active')
    }))

    /*------------- section1 swiper ----------*/

    // @ts-ignore
    var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      loop:true,
      centeredSlides: true,
      slidesPerView: 2,
    });

    /*------------- section2 swiper ----------*/

    // @ts-ignore
    var swiper2 = new Swiper(".mySwiper2", {
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".mySwiper2 .swiper-button-next",
        prevEl: ".mySwiper2 .swiper-button-prev",
      },
      loop: true,
      centeredSlides: false,
    });

    /*------------- section3 swiper ----------*/

    // @ts-ignore
    var swiper3 = new Swiper(".mySwiper3", {
      spaceBetween: 10,
      loop: false,
      centeredSlides: false,
      slidesPerView: "auto",
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".mySwiper3 .swiper-button-next",
        prevEl: ".mySwiper3 .swiper-button-prev",
      },

    });
    /*----------------------------- poppup --------------------*/
    let poppup = document.querySelector('.poppup');
    // @ts-ignore
   // poppup.classList.add('poppup_active');
     // Affichage de la navbar an mobile
    let btn_hamburger = document.querySelector('.btn_menu_hamburger');
    // @ts-ignore
    btn_hamburger.addEventListener('click', () =>{
      let navbar_mobile = document.querySelector('header nav');
      // @ts-ignore
      if ( navbar_mobile.style.display=='flex'){
        // @ts-ignore
        btn_hamburger.classList.remove('active')
        // @ts-ignore
        navbar_mobile.style.display="none";
        document.body.style.userSelect='none'
      }else{
        document.body.style.userSelect='auto';
        // @ts-ignore
        navbar_mobile.style.display='flex'
        // @ts-ignore
        btn_hamburger.classList.add('active')
      }
    })
    let nav_link = document.querySelector('.nav_link_dropdown');
    // @ts-ignore
    nav_link.addEventListener('click', this.dropdown);
  }
  dropdown(){
    // @ts-ignore
    let drop = document.querySelector('.dropdown');
    // @ts-ignore
    if (drop.style.display=='none'){
      // @ts-ignore
      drop.style.display='block';
    }
    else {
      // @ts-ignore
      drop.style.display='none'
    }
  }
  efface(){
    let element = document.querySelectorAll(".section2_div2 .texte_explication_section2_div2")
    element.forEach(element => element.classList.remove('texte-active'))

  }
  loop1(){
      let swiper = document.querySelector('#swiper1')
      this.efface()
         // @ts-ignore
      swiper.className += ' texte-active';
  }
  loop2(){
    let swiper = document.querySelector('#swiper3')
    this.efface()
    // @ts-ignore
    swiper.className += ' texte-active';
  }
  loop3(){
    let swiper = document.querySelector('#swiper2')
    this.efface()
    // @ts-ignore
    swiper.className += ' texte-active';
  }
  // recuperation de la date
  date =  new Date().getFullYear();
  // close poppup
  close(){
    let poppup = document.querySelector('.poppup');
    // @ts-ignore
    poppup.classList.remove('poppup_active');
  }
}
