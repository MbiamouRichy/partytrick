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
      slidesPerView: 1,
    });
    this.loop()
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
  loop(){
      let swiper = document.querySelectorAll('.mySwiper2 .swiper-slide')
    // @ts-ignore
   swiper.forEach(swiper => swiper.addEventListener('', ()=>{
      // @ts-ignore
      console.log(swiper.id)
    })
   )
    }
}
