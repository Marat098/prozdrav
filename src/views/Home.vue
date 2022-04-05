<template>
  <section id="main-news-section">
    <div class="main-news">
      <div class="row gy-3">
        <div class="col-sm-6 col-lg-6">
          <main-news-item></main-news-item>
        </div>
        <div class="col-sm-6 col-lg-6">
          <main-news-item imgPath = "img\unsplash_Pd4lRfKo16U.png"></main-news-item>
        </div>
        <div class="col-sm-6 col-lg-6">
          <main-news-item imgPath = "img\unsplash_Pd4lRfKo16U.png"></main-news-item>
        </div>
        
        <div class="col-sm-6 col-lg-6">
          <main-news-item imgPath = "img\unsplash_iqGtaQnk3VM.png"></main-news-item>
        </div>
        <div class="col-sm-6 col-lg-6">
          <div class="main-news__column border-ctn">
            <news-item></news-item>
            <news-item></news-item>
            <news-item></news-item>
            <news-item></news-item>
            <news-item></news-item>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6">
          <div class="main-news__column border-ctn">
            <news-item></news-item>
            <news-item></news-item>
          </div>
          <div class="main-news__all-news-link border-ctn">
            <a href="">
              <span>Смотреть все</span>
            </a>
          </div>
          <div class="main-news__add-1">
            <span>Место Google ads или для Баннера</span>
          </div>
        </div>

      </div>

    </div>
  </section>
  <section id="sub-news-section">
    <div class="sub-media-news">
      <div class="sub-media-news__header">

        <div class="sub-media-news__title border-ctn">
          <div class="sub-media-news__name">
            <span>Консультация врачей</span>
          </div>
          <div class="sub-media-news__all-news mobile-hide">
            <a href="">
              Показать больше
            </a>
          </div>
        </div>
        <div class="sub-media-news__btns">
          <button id="left" class="sub-media-news__btn white"><img src="fonts\black-line.svg" alt=""></button>
          <button id="right" class="sub-media-news__btn aqua"><img src="fonts\white-line.svg" alt=""></button>
        </div>

      </div>
      <div class = "sub-media-news__scroll">
        <div class="sub-media-news__item" v-for="item in media" :key="item">
          <iframe
            class="media-frame border-ctn" 
            width="560" 
            height="408" 
            v-bind:src="item"
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
      <div class="sub-media-news__all-media-link desktop-hide">
        <a href="">
          <span>Смотреть все</span>
        </a>
      </div>
    </div>
    <div class="sub-news-add">
        Место для Google ads или баннера
    </div>
    <div class="sub-news-categories">
      <div class="sub-news-categories__item" v-for="item in categories" :key="item.id">
        <a href="">{{item.name}}</a>
      </div>
    </div>
    <div class="sub-news">
        <SubNewsItem imgPath= "img\unsplash_aXbfOFQ_juU.png"></SubNewsItem>
        <SubNewsItem></SubNewsItem>
        <SubNewsItem imgPath= "img\unsplash_aXbfOFQ_juU.png"></SubNewsItem>
        <SubNewsItem></SubNewsItem>
        <SubNewsItem></SubNewsItem>
        <SubNewsItem></SubNewsItem>
        <SubNewsItem></SubNewsItem>
        <SubNewsItem></SubNewsItem>
    </div>
  </section>
</template>

<script>
import MainNewsItem from '@/components/main/MainNewsItem.vue'
import NewsItem from '@/components/main/NewsItem.vue'
import SubNewsItem from '@/components/main/SubNewsItem.vue'
import $ from 'jquery'
export default {
  name: 'Home',
  components: {
    MainNewsItem,
    NewsItem,
    SubNewsItem
  },
  data() {
    return {
      media: [
        "https://www.youtube.com/embed/tev0BTf0XW4",
        "https://www.youtube.com/embed/_EiPwgrTYGY",
        "https://www.youtube.com/embed/tev0BTf0XW4",
        "https://www.youtube.com/embed/_EiPwgrTYGY",
        "https://www.youtube.com/embed/tev0BTf0XW4",
        "https://www.youtube.com/embed/_EiPwgrTYGY"
      ],
      categories: [
        {name: "Лечение аллергии", id: 1},
        {name: "Лечение аллергии", id: 2},
        {name: "Лечение аллергии", id: 3},
        {name: "Лечение аллергии", id: 4},
        {name: "Лечение аллергии", id: 5},
        {name: "Лечение аллергии", id: 6},
        {name: "Лечение аллергии", id: 7},
        {name: "Лечение аллергии", id: 8},
        {name: "Лечение аллергии", id: 9},
        {name: "Лечение аллергии", id: 10},
        {name: "Лечение аллергии", id: 11},
        {name: "Лечение аллергии", id: 12},
        {name: "Лечение аллергии", id: 13},
        {name: "Лечение аллергии", id: 14},
      ]
    }
  },
  mounted (){
    const left_btn = document.querySelector("#left");
    left_btn.addEventListener("mousedown", event=> {
        const scroll = document.querySelector(".sub-media-news__scroll");
        const media_item= document.querySelector(".sub-media-news__item");
        const item_minus = media_item.offsetWidth;
        scroll.scrollLeft -= item_minus;
    });
    const right_btn = document.querySelector("#right");
    right_btn.addEventListener("mousedown", event=> {
      const scroll = document.querySelector(".sub-media-news__scroll");
      const media_item= document.querySelector(".sub-media-news__item");
      const item_plus = media_item.offsetWidth;
      scroll.scrollLeft += item_plus;
    });
    let movement = false;
    let mousedown = false;

    function onMouseMove(e){
      e.preventDefault();
      e.stopPropagation();
      if(mousedown) {
        movement = true;
        this.scrollLeft -= event.movementX;
        this.scrollTop -= event.movementY;
      }
    }

    function onMouseDown(){
      mousedown = true;
      movement = false;
    }

    function onMouseUp(e){
      mousedown = false;
      setTimeout(()=>movement = false, 10);
    }

    function onMouseClick(e){
      if(movement){
        e.preventDefault();
        e.stopPropagation();
      }
    }

    function onDragStart(e){
      e.preventDefault();
      e.stopPropagation();
    }

    let scr = $(".sub-news-categories");

    scr.mousemove(onMouseMove);
    scr.mousedown(onMouseDown);
    $(window).mouseup(onMouseUp);
    window.addEventListener('dragstart',onDragStart);
    window.addEventListener('blur',onMouseUp);
    $('.sub-news-categories a').click(onMouseClick);

    let media_scr = $(".sub-media-news__scroll");
    media_scr.mousemove(onMouseMove);
    media_scr.mousedown(onMouseDown);
    $(window).mouseup(onMouseUp);
    window.addEventListener('dragstart',onDragStart);
    window.addEventListener('blur',onMouseUp);
  }
}
</script>
<style scoped lang="scss" >

  .main-news{
    &__column{
      display: flex;
      flex-direction: column;
      gap: $gap-xl;
      padding: $padding-xl;
      background: $main-bg-color;
    }
    &__all-news-link{
      background: $bg-color-4;
      padding: $padding-lg-3;
      text-align: center;
      margin: $margin-xl 0;
      span{
        font-weight: $font-weigth-md;
        font-size: $font-size-md_1;
        line-height: 135%;
        color: $color-text-light;
      }
    }
    &__add-1{
      background: $bg-color-5;
      box-shadow: 0px 0px 1px rgb(0 0 0 / 35%);
      border-radius: $main-border-radius;
      max-height: 500px;
      text-align: center;
      height: 30vh;
    }
  }
  .sub-news-add{
    text-align: center;
    margin-top: $margin-xxl;
    width: 100%;
    background: #FBFFD1;
    height: 325px;
  }

  .sub-media-news{
    &__header{
      display: flex;
      margin: $margin-xl 0px;
    }
    &__title{
      width: 85%;
      padding: $padding-lg-1;
      display: flex;
      justify-content: space-between;
      background: $main-bg-color;
      span{
        font-weight: $font-weigth-lg;
        font-size: $font-size-xxl-2;
        line-height: $line-height-1;
      }
    }
    &__name{

    }
    &__all-news{
      display: flex;
      align-items: center;
      background: #4AD0D3;
      border-radius: $md-border-radius;
      padding: $padding-md $padding-xl;
    }
    &__btns{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__btn{
      height: 48px;
      border-radius: $xxl-border-radius;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: $padding-lg-2 $padding-xl-1;
      margin: 0px $margin-md_4;
      border:none;
    }
    &__scroll{
      display: flex;
      overflow-x: auto;
    }
    &__scroll::-webkit-scrollbar{
      width: 0;
    }
    &__item{
      margin-right: $margin-xl;
    }
    &__all-media-link{
      background: $bg-color-4;
      border-radius: $main-border-radius;
      padding: $padding-md;
      text-align: center;
      span{
        font-weight: $font-weigth-md;
        font-size: $font-size-md_1;
        line-height: 135%;
        color: $color-text-light;
      }
    }
  }

  .sub-news-categories{
    display: flex;
    overflow-x: auto;
    margin-top: $margin-xxl ;
    &__item{
      background: $main-bg-color;
      padding: $padding-md $padding-lg-1;
      margin-right: $margin-md_1;
      display: flex;
      white-space: nowrap;
      border: 1px solid rgba(18, 17, 39, 0.2);
      border-radius: $main-border-radius;
      a{
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_3;
        line-height: $line-height-2;
      }
    }
  }
  .sub-news-categories::-webkit-scrollbar{
      width: 0;
  }
  .sub-news{
    background: $main-bg-color;
    border-radius: $main-border-radius;
    padding: $padding-xl;
    display: flex;
    flex-wrap: wrap;
  }
  .white{
      background: #FFFFFF;
  }
  .aqua{
    background: #4AD0D3;   
  }
  .media-frame{
    width: 400px;
    height: 300px;
  }

@media screen and(max-width: 992px) {
  .main-news{
    &__column{
      padding: $padding-md;
      gap: $gap-lg;
    }
    &__all-news-link{
      margin: $margin-md_1 0;
      padding: $padding-md;
    }
  }
  .sub-media-news{
    &__title{
      padding: $padding-md;
      span{
        font-weight: $font-weigth-lg-1;
        font-size: $font-size-md_2; 
      }
    }
    &__name{
      text-align: center;
      align-self: center;
    }
  }
  .media-frame{
    width: 284px;
    height: 200px;
  } 
}
@media screen and(max-width: 768px){
  .sub-news{
    background: none;
    padding: 0;
    display: flex;
    gap: $gap-lg;
    flex-wrap: nowrap;
    overflow-x: auto;
  }
  .sub-news::-webkit-scrollbar{
      width: 0;
  }


  .sub-news-categories{
    margin-top: $margin-xl ;
    &__item{
      padding: $padding-md $padding-sm;
      margin-right: $margin-sm;
      display: flex;
      white-space: nowrap;
      a{
        font-size: $font-size-md_3;
      }
    }
  }
} 

</style>
