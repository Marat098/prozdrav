<template>
  <section id="main-news-section">
    <div class="main-news">
      <div class="row gy-3">
        <div class="col-sm-6 col-lg-6">
          <news-item></news-item>
        </div>
        <div class="col-sm-6 col-lg-6">
          <div class="main-news__column border-ctn">
            <sub-news-item></sub-news-item>
            <sub-news-item></sub-news-item>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6">
          <news-item></news-item>
        </div>
        
        <div class="col-sm-6 col-lg-6">
          <news-item></news-item>
        </div>
        <div class="col-sm-6 col-lg-6">
          <div class="main-news__column border-ctn">
            <sub-news-item></sub-news-item>
            <sub-news-item></sub-news-item>
            <sub-news-item></sub-news-item>
            <sub-news-item></sub-news-item>
            <sub-news-item></sub-news-item>
          </div>
        </div>
        <div class="col-sm-6 col-lg-6">
          <div class="main-news__column border-ctn">
            <sub-news-item></sub-news-item>
            <sub-news-item></sub-news-item>
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
          <div class="sub-media-news__all-news">
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
            class="border-ctn" 
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
      <div class="row">
        <div class="col-3">
          <div class="sub-news-item">
            <div class="sub-news-item__img-wrap">
              <img class="img-fluid" src="img\unsplash_DRchVK5apjw.png" alt="">
            </div>
            <div class="sub-news-item__title">
                <span>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="sub-news-item">
            <div class="sub-news-item__img-wrap">
              <img class="img-fluid" src="img\unsplash_DRchVK5apjw.png" alt="">
            </div>
            <div class="sub-news-item__title">
                <span>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="sub-news-item">
            <div class="sub-news-item__img-wrap">
              <img class="img-fluid" src="img\unsplash_DRchVK5apjw.png" alt="">
            </div>
            <div class="sub-news-item__title">
                <span>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="sub-news-item">
            <div class="sub-news-item__img-wrap">
              <img class="img-fluid" src="img\unsplash_DRchVK5apjw.png" alt="">
            </div>
            <div class="sub-news-item__title">
                <span>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="sub-news-item">
            <div class="sub-news-item__img-wrap">
              <img class="img-fluid" src="img\unsplash_DRchVK5apjw.png" alt="">
            </div>
            <div class="sub-news-item__title">
                <span>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="sub-news-item">
            <div class="sub-news-item__img-wrap">
              <img class="img-fluid" src="img\unsplash_DRchVK5apjw.png" alt="">
            </div>
            <div class="sub-news-item__title">
                <span>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="sub-news-item">
            <div class="sub-news-item__img-wrap">
              <img class="img-fluid" src="img\unsplash_DRchVK5apjw.png" alt="">
            </div>
            <div class="sub-news-item__title">
                <span>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="sub-news-item">
            <div class="sub-news-item__img-wrap">
              <img class="img-fluid" src="img\unsplash_DRchVK5apjw.png" alt="">
            </div>
            <div class="sub-news-item__title">
                <span>
                  Lorem ipsum dolor sit amet, consectetur
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import NewsItem from '@/components/main/NewsItem.vue'
import SubNewsItem from '@/components/main/SubNewsItem.vue'
export default {
  name: 'Home',
  components: {
    NewsItem,
    SubNewsItem
  },
  data() {
    return {
      media: [
        "https://www.youtube.com/embed/tev0BTf0XW4",
        "https://www.youtube.com/embed/tev0BTf0XW4",
        "https://www.youtube.com/embed/tev0BTf0XW4",
        "https://www.youtube.com/embed/tev0BTf0XW4",
        "https://www.youtube.com/embed/tev0BTf0XW4",
        "https://www.youtube.com/embed/tev0BTf0XW4"
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
      ]

      
    }
  },
}
</script>
<style scoped lang="scss" >
 

  .main-news{
    &__column{
      padding: 20px;
      background: white;
    }
    &__all-news-link{
      background: #4AD0D3;
      padding: 14px;
      text-align: center;
      margin: 20px 0;
      span{
        font-weight: 500;
        font-size: 18px;
        line-height: 135%;
        color: #FFFFFF;
      }
    }
    &__add-1{
      background: #FBFFD1;
      box-shadow: 0px 0px 1px rgb(0 0 0 / 35%);
      border-radius: 10px;
      max-height: 500px;
      text-align: center;
    }
  }
  .sub-news-add{
    text-align: center;
    margin-top: 40px;
    width: 100%;
    background: #FBFFD1;
    height: 325px;
  }

  .sub-media-news{
    &__header{
      display: flex;
      margin: 20px 0px;
    }
    &__title{
      width: 85%;
      padding: 20px 20px 20px 20px;
      display: flex;
      justify-content: space-between;
      background: #FFFFFF;
      span{
        font-weight: 700;
        font-size: 36px;
        line-height: 140%;
      }
    }
    &__name{

    }
    &__all-news{
      display: flex;
      align-items: center;
      background: #4AD0D3;
      border-radius: 8px;
      padding: 14px 32px;
    }
    &__btns{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__btn{
      height: 48px;
      border-radius: 100px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 12px 24px;
      margin: 0px 6px;
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
      margin-right: 20px;

    }
  }

  .sub-news-categories{
    display: flex;
    overflow-x: auto;
    margin-top: 40px ;
    &__item{
      background: white;
      padding: 15px 20px;
      margin-right: 10px;
      display: flex;
      white-space: nowrap;
      border: 1px solid rgba(18, 17, 39, 0.2);
      border-radius: 10px;
    }
  }
  .sub-news-categories::-webkit-scrollbar{
      width: 0;
  }
  .sub-news{
    background: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    &__item{

    }
  }
  .white{
      background: #FFFFFF;
  }
  .aqua{
    background: #4AD0D3;   
  }

</style>
