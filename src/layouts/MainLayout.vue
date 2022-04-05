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
                        class="btn btn-primary" 
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
        </header>
        <main>
            <router-view/>
        </main>
    </div>
  </div>
</template>
<script>
export default {
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

  @media screen and(max-width: 992px) {
    .header{
      border: 0;
      border-radius: 0;
      box-shadow: unset;
      &__nav{
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