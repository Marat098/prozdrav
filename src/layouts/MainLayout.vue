<template>
    <div class="container-fluid">
        <header id="header">
          <div class="header border-ctn">
            <div class="row">
              <div class="col-md-3 col-lg-3">
                <div class="header__icon-wrap">
                  <img src= "fonts/Group219.svg" alt="" class="header__icon" />
                </div>
              </div>
              <div class="col-md-8 col-lg-7 ">
                <nav class="header__nav">
                  <ul class="menu" id="menu">
                    <li class="menu__item"><router-link to="/">Новости</router-link></li>
                    <li class="menu__item"><router-link to="/disease-directory">Справочник</router-link></li>
                    <li class="menu__item"><router-link to="/catalog">Доктора</router-link></li>
                    <li class="menu__item"><router-link to="/promotions">Акции</router-link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="header__mobile-menu">
              <div class="header__mobile-sidebar">
                <nav class="header__mobile-nav">
                  <a href="/"
                    ><img src="fonts\world-news 1.svg" alt="" />
                    <span>Новости</span></a
                  >
                  <a href="/disease-directory"
                    ><img src="fonts\article 1.svg" alt="" />
                    <span>Справочник</span></a
                  >
                  <a href="/catalog"
                    ><img src="fonts\doctor (2) 1.svg" alt="" />
                    <span>Доктора</span></a
                  >
                  <a href="/promotions"
                    ><img src="fonts\offer 1.svg" alt="" />
                    <span>Акции</span></a
                  >
                </nav>
              </div>
            </div>
          </div>
        </header>
        <main>
            <router-view/>
        </main>
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
  #menu {
    margin: 0!important;
  }
  .header {
    &__icon-wrap{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 1rem  
    }
    &__icon{
      object-fit: cover;
      max-width: 100%;
    }
    &__nav{
      height: 100%;
      display: flex;
      align-items: center;

    }
    &__mobile-menu{
      display: none;
      position: fixed;
      top: auto;
      bottom: 0;
      left: 0;
      width: 100%;
      height: auto;
      padding-top: 0;
      transition: transform .3s;
      z-index: 103;
      background: #FFFFFF;
      border: 0.5px solid #D6D2D2;
      border-radius: 20px;
    }
    &__mobile-sidebar{
      box-sizing: initial;
      width: 100%;
      height: 61px;
      padding-bottom: env(safe-area-inset-bottom);
      background-color: var(--bg-color);
      border-top: 1px solid var(--gray-color-20);
      position: relative;
      flex-direction: column;
    }
    &__mobile-nav{
      display: flex;
      flex-wrap: nowrap;
      margin-top: 3px;
      margin-left: 0;
      a{
        position: relative;
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        white-space: nowrap;
        flex-basis: 25%;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
        color: #414141;
      }
      span{
        font-size: 12px;
      }
    }
  }

  .menu {
    display: flex;
    justify-content: space-between;
    width: 100%;
    &__item{
      list-style-type: none; 
    }
    a{
      font-weight: 500;
      font-size: 22px;
      line-height: 115%;
      text-decoration: none;
      color: #414141;
    }
  }

  @media screen and(max-width: 768px) {
    .header{
      border: 0;
      border-radius: 0;
      box-shadow: unset;
      &__nav{
        display: none;
      }
      &__icon{
        width: 35%;
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
</style>