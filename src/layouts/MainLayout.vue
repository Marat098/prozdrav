<template>
  <div class="wrapper">
    <div class="container-fluid">
        <header id="header">
          <div class="header border-ctn">
            <div class="row">
              <div class="col-12">
                <div class="header__top">
                  <div class="header__icon-wrap">
                    <img src= "fonts/Group 330.svg" alt="" class="header__icon" />
                  </div>
                  <div class="header__cities">
                      <button
                        id = "current-city" 
                        type="button" 
                        class="btn btn-primary mobile-hide" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false">
                        <img src="fonts/Pin.svg" alt="">
                        Алматы
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Алматы</a></li>
                        <li><a class="dropdown-item" href="#">Астана</a></li>
                        <li><a class="dropdown-item" href="#">Караганда</a></li>
                        <li><a class="dropdown-item" href="#">Шымкент</a></li>
                      </ul>

                  </div>
                  <div class="burger" id="burger">
                    <div class="menu-mobile-close">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-12">
                <div class="header__bottom">
                  <nav class="header__nav">
                    <ul class="menu" id="menu">
                      <li class="menu__item active"><router-link to="/">Новости</router-link></li>
                      <li class="menu__item"><router-link to="/disease-directory">Справочник болезней</router-link></li>
                      <li class="menu__item"><router-link to="/catalog">Врачи</router-link></li>
                      <li class="menu__item"><router-link to="/clinics">Клиники</router-link></li>
                      <li class="menu__item"><router-link to="/medical-directory">Процедуры</router-link></li>
                      <li class="menu__item"><router-link to="/medical-directory">Диагностика</router-link></li>
                      <li class="menu__item"><router-link to="/promotions">Акции</router-link></li>
                    </ul>
                  </nav>
                  <div class="header__search-wrap">
                    <div class="input-wrap">
                      <img src="fonts/Search.svg" alt="">
                      <input class="header__search-input" type="text" name="query" placeholder="Поиск по сайту">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overlay-menu" id="overlay-menu">
            <div>
              <div class="head">
                <div class="head__close-icon" id="close-overlay">
                  <img src="fonts/mobile-arrow.svg" alt="">
                </div>
                <div class="head__main-icon-wrap">
                  <img class="head__main-icon" src="fonts/Group 330.svg" alt="">
                </div>
              </div>

              <nav class="menu-navigation " role='navigation'>
                <ul class="menu-navigation__body">
                  <li class="menu-navigation__item">
                    <div class="item-icon"><img src="fonts/search-icon.svg" alt=""></div>
                    <div class="menu-navigation__search-wrap"><input class="menu-navigation__search" placeholder="Поиск" type="text"></div>
                  </li>
                  <li class="menu-navigation__item">
                    <div class="item-icon">
                      <img src="fonts/location-icon.svg" alt="">
                    </div>
                    <div class="menu-navigation__select-city-wrap">
                      <select class="menu-navigation__select-city" name="city" id="city">
                        <option value="value1" selected> Алматы</option>
                        <option value="value2" >Шымкент</option>
                        <option value="value3">Астана</option>
                      </select>
                    </div>
                  </li>
                  <li class="menu-navigation__item">
                    <a href="">
                      <div class="item-icon"><img src="fonts/newspaper-icon.svg" alt=""></div>
                      <div class="menu-navigation__item-body">
                        <span>Новости</span>
                        <img class="menu-navigation__item-arrow" src="fonts/mobile-arrow.svg" alt=""> 
                      </div>
                    </a>
                  </li>
                  <li class="menu-navigation__item">
                    <a href="">
                      <div class="item-icon"><img src="fonts/doctor-icon.svg" alt=""></div>
                      <div class="menu-navigation__item-body">
                        <span>Врачи</span>
                        <img class="menu-navigation__item-arrow" src="fonts/mobile-arrow.svg" alt=""> 
                      </div>
                    </a>
                  </li>
                  <li class="menu-navigation__item">
                    <a href="">
                      <div class="item-icon"><img src="fonts/health-icon.svg" alt=""></div>
                      <div class="menu-navigation__item-body">
                        <span>Клиники</span>
                        <img class="menu-navigation__item-arrow" src="fonts/mobile-arrow.svg" alt=""> 
                      </div>
                    </a>
                  </li>
                  <li class="menu-navigation__item">
                    <a href="">
                      <div class="item-icon"><img src="fonts/procedure-icon.svg" alt=""></div>
                      <div class="menu-navigation__item-body">
                        <span>Процедуры</span>
                        <img class="menu-navigation__item-arrow" src="fonts/mobile-arrow.svg" alt=""> 
                      </div>
                    </a>
                  </li>
                  <li class="menu-navigation__item">
                    <a href="">
                      <div class="item-icon"><img src="fonts/diagnostic-icon.svg" alt=""></div>
                      <div class="menu-navigation__item-body">
                        <span>Диагностика</span>
                        <img class="menu-navigation__item-arrow" src="fonts/mobile-arrow.svg" alt=""> 
                      </div>
                    </a>
                  </li>
                  <li class="menu-navigation__item">
                    <a href="">
                      <div class="item-icon"><img src="fonts/stock-market-icon.svg" alt=""></div>
                      <div class="menu-navigation__item-body">
                        <span>Акции и скидки</span>
                        <img class="menu-navigation__item-arrow" src="fonts/mobile-arrow.svg" alt=""> 
                      </div>
                    </a>
                  </li>

                </ul>
                <ul class="menu-navigation__body sub-navigation">
                  <li class="menu-navigation__item">
                    <a href="">
                      <div class="item-icon"><img src="fonts/procedure-icon.svg" alt=""></div>
                      <div class="menu-navigation__item-body">
                        <span>Процедуры</span>
                      </div>
                    </a>
                  </li>
                  <li class="menu-navigation__item">
                    <a href="">
                      <div class="item-icon"><img src="fonts/diagnostic-icon.svg" alt=""></div>
                      <div class="menu-navigation__item-body">
                        <span>Диагностика</span>
                      </div>
                    </a>
                  </li>
                  <li class="menu-navigation__item">
                    <a href="">
                      <div class="item-icon"><img src="fonts/stock-market-icon.svg" alt=""></div>
                      <div class="menu-navigation__item-body">
                        <span>Акции и скидки</span>
                      </div>
                    </a>
                  </li>

                </ul>
                <div class="mobile-social-icons ">
                    <a class="social-icon" href="">
                      <img src="fonts/youtube-icon.svg" alt="">
                    </a>
                    <a  class="social-icon" href="">
                      <img src="fonts/vk-icon.svg" alt="">
                    </a>
                    <a  class="social-icon" href="">
                      <img src="fonts/facebook-icon.svg" alt="">
                    </a>
                    <a  class="social-icon" href="">
                      <img src="fonts/insta-icon.svg" alt="">
                    </a>
                    <a  class="social-icon" href="">
                      <img src="fonts/itube-icon.svg" alt="">
                    </a>
                  </div>


              </nav>
              </div>  
          </div>

        </header>
        <main>
            <router-view/>
        </main>
        <footer class="footer">
          <div class="footer-body">
            <div class="footer-row footer-line">
              <div class="footer-column">
                <ul class="footer-column__body">
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Новости
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Видео
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Пресс релизы 
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Справочник болезней
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-column">
                <ul class="footer-column__body">
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Врачи
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Клиники
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Процедуры
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Диагностика
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Акции
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-column">
                <ul class="footer-column__body">
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      О проекте
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Реклама
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Пациентам
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Врачам
                    </a>
                  </li>
                  <li class="footer-column__body-item">
                    <a class="footer-column__body-link" href="/">
                      Клиникам
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-column footer-icons">
                <div class="footer-column__icons-wrap"> 
                  <div class="footer-column__main-icon-wrap">
                    <img src= "fonts/main-icon.svg" width="350" height="80"  alt="" class="footer-column__main-icon" />
                  </div>
                  <div class="social-icons-wrap">
                    <a class="social-icon" href="">
                      <img src="fonts/youtube-icon.svg" alt="">
                    </a>
                    <a  class="social-icon" href="">
                      <img src="fonts/vk-icon.svg" alt="">
                    </a>
                    <a  class="social-icon" href="">
                      <img src="fonts/facebook-icon.svg" alt="">
                    </a>
                    <a  class="social-icon" href="">
                      <img src="fonts/insta-icon.svg" alt="">
                    </a>
                    <a  class="social-icon" href="">
                      <img src="fonts/itube-icon.svg" alt="">
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-row footer-text-wrap">
              <div class="footer-text">
                Медицинское сетевое издание «Prozdrav» Свидетельство о постановке 
                на учет периодического печатного издания и информационного агентства 
                № KZ35VPY00047899 выдано 13.04.2022. выданного Комитетом информатизации 
                Министерство информации и общественного развития Республики Казахстан.
              </div>
            </div>
          </div>
        </footer>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {

  mounted(){
    $('#burger').click(function() {
      let overlayMenu = $('#overlay-menu'),
          menuBurger = $('#burger');
      
      overlayMenu.addClass('open');
      menuBurger.addClass('open');

    })
    $('#close-overlay').click(function() {
      let overlayMenu = $('#overlay-menu'),
          menuBurger = $('#burger');
      
        if(overlayMenu.hasClass('open')) {
          overlayMenu.removeClass('open');
          menuBurger.removeClass('open');
        }
    })

  }
}
</script>

<style lang="scss">
  ul,li{
    padding: 0;
  }
  #current-city{
    background: $bg-color-2;
    border-radius: $main-border-radius;
    padding: $padding-md $padding-xxl-1;
    color: $main-text-color;
    border-color: $bg-color-2;
    font-weight: $font-weigth-sm;
    font-size: $font-size-md_4;
    line-height: 120%;
  }

  .header {
    background-color: $main-bg-color;
    padding: $padding-xl $padding-xxl 0 $padding-xxl;
    margin: $margin-xl 0;
    &__top{
      display: flex;
      justify-content: space-between;
      border-bottom: 2px solid #12112726;
      font-weight: normal; 
      padding-bottom: $padding-xl
    }
    &__icon-wrap{
      display: flex;

    }
    &__icon{
      max-width: 100%;
    }
    &__bottom{
      padding: $padding-xl 0;
      display: flex;
      justify-content: space-between;
    }
    &__nav{
      height: 100%;
      display: flex;
      align-items: center;
    }
    &__search-wrap{
      display: flex;
      border: 1px solid #91929D;
      box-sizing: border-box;
      border-radius: $main-border-radius;
      padding: $padding-sm-1 $padding-md;
    }
    &__search-input{
      border: 1px solid transparent;
      color: $color-text-sr;
      width: 80%;
    }
    &__search-input:focus-visible{
      outline: none !important;
    }
    &__search-input:-webkit-autofill,
    &__search-input:-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }
    .input-wrap{
      width: 100%;
    }
  }
  .overlay-menu {
    z-index: 10000;
    position: fixed;
    background: #ecfaff;
    height: 100%;
    width: 80%;
    z-index: 100; 
    right: -100%;
    transition: 0.35s;
    border-radius: $main-border-radius;
    top: 0;
    overflow-y: scroll;
  }
  .head{
    display: flex;
    padding: $padding-md;
    border-bottom: 2px solid #12112726;
    &__close-icon{
      display: flex;
      justify-content: center;
      img{
        width: 30px
      }
    }
    &__main-icon-wrap{
      width: 100%;
      display: flex;
      justify-content: center;
    }
    &__main-icon{
      width: 110px;
      height: 42px;
      object-fit: fill;
    }

  }

  .overlay-menu.open {
    right: 0%;
  }

.menu-navigation {
  &__body{
    margin-bottom: 0;
    padding: $padding-xl $padding-sm;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  &__item{
    font-size: $font-size-md_2;
    padding: $padding-sm $padding-lg-1;
    background-color: $main-bg-color;
    list-style-type: none;
    display: flex;
    a{    
      display: flex;
      width: 100%;
    }
  }
  &__item-body{
    width: 100%;
    display: flex;
    margin-left: $margin-md_1;
    padding: $padding-sm;
    justify-content: space-between;
    align-items: center;

  }
  &__item-arrow{
    width: 17px;
    height: 17px;
  }
  &__search-wrap{
    width: 100%;
    background: #E6E6E6;
    border-radius: 25px;
  }
  &__search{
    width: 100%;
    padding: $padding-sm;
    font-size: 16px;
    outline: none;
    border: $main-bg-color;
    background: #E6E6E6;
    border-radius: 25px;
    margin-left: $margin-md_1;
  }
  &__select-city-wrap{
    width: 100%;
    margin-left: $margin-md_1;
  }
  &__select-city{
    padding: $padding-sm;
    width: 100%;
    border: none;
    font-size: $font-size-md_2;
    background-color: $main-bg-color;
  }
  &__select-city:focus-visible{
      outline:none;
    }
  &__select-city::after{
      color: #e02b2b!important;
  }
  
}
.sub-navigation{
  margin-top: 30px;
}
.item-icon{
  align-self: center;
  img{

  }
}


#overlay-menu nav ul li a:after {
  content: ' ';
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  height: 3px;
  width: 0%;
  background: #fff;
  transition: 0.25s;
}

#overlay-menu nav ul li a:hover:after {
  width: 100%;
}


  .footer-body{
    margin-top: 10px;
    padding: 20px;
    background-color: #FFFFFF;
    margin-bottom: 0 !important;
    border-radius: 10px;
  }
  .footer-line{
    border-bottom: 2px solid #12112726;
    padding-bottom: 20px;
  }
  .footer-row{
    display: flex;
  }
  .footer-column{
    display: flex;
    margin-right: auto;
    &__body{

    }
    &__body-item{
      margin-bottom: 10px;
      color: #000000;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
    }
    &__icons-wrap{
      display: flex;
      flex-direction: column;
      align-items: center;
      align-self: center;
    }
    &__main-icon-wrap{
      display: flex;
      align-items: center;
      margin-left: 20px;
    }
    &__main-icon{
      position: relative;
      width: 100%;
      max-width: 350px;
    }
  }
  .social-icons-wrap{

  }
  .social-icon{
    margin-left: $margin-sm;
  }
  .mobile-social-icons {
    text-align: center;
  }
  .footer-text-wrap{
    padding: 20px;
  }
  .footer-text{
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #000000;
  }

  .menu {
    display: flex;
    margin: 0!important;
    padding: 0!important;
    &__item{
      list-style-type: none;
      margin-right: $margin-lg;
      a{
        font-weight: $font-weigth-xl;
        font-size: $font-size-sm;
        line-height: $line-height-2;
        text-transform: uppercase;
        color: $description-font-color!important;
      }
    }
    .active{
        a{
          text-decoration-line: underline!important;
          text-transform: uppercase;
          color: #121127!important;;
        }
      }
  }

  .burger{
    width: 100px;
    display: none;
    span{
      border-bottom: 2px solid #001b36;
      display: block;
      margin-bottom: 5px;
      width: 23px;
    }
  }
  .menu-mobile-close{
    margin-left:auto;
  }

  @media screen and(max-width: 992px) {
    .header{
      border: 0;
      border-radius: 0;
      padding: $padding-xl $padding-xl 0 $padding-xl;
      box-shadow: unset;
      &__nav{
        display: none;
      }
      &__cities{
        display: none;
      }
      &__icon{
        width: 100%;
        height: 100%; 
      }
      &__icon-wrap{
        padding: 0;
      }
      &__mobile-menu{
        display: block;
      }

    }
    .burger{
      display: inherit;
    }
  }
    @media screen and(max-width: 1140px) {
        .menu {
          &__item{
            margin-right: $margin-md_1;
          }
        }
    }
</style>

//  $('document').ready(function() {
    $('.menu a').each(function() {
        if ('http://site.ru'+$(this).attr('href') == window.location.href)
        {
            $(this).addClass('active');
        }
    });
}); 