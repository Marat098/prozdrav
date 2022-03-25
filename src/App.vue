<template>
  <div class="wrapper">
    <MainLayout></MainLayout>
  </div>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'

export default {
  components: {
    MainLayout,
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap&subset=cyrillic-ext');
  body{
    font-family: "Roboto"!important;
    background: #E5E5E5!important;
  }
  .img-fluid {
    position: relative;
    width: 100%;
    height: auto;
    max-width: 100%;
    object-fit: cover
  } 
  a{
    text-decoration: none!important;
    color: #000!important;
  }
  .wrapper {
      width: 100%;
      min-height: 100%;
      max-width: 1600px;
      overflow: hidden;
      padding: 20px 40px;
      margin: 0 auto;
  }
  .border-ctn{
    border-radius: 10px;
  }
  .mobile-hide{
    display: block;
  }
  @media screen and(max-width: 576px){
  .mobile-hide{
    display: none !important;
  }
}
@media screen and(max-width: 576px){
  .wrapper{
    padding: 0;
  }
}
</style>
