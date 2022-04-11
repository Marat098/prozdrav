<template>
    <component :is="layout">
      <router-view/>
    </component> 
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import AdminLayout from '@/layouts/AdminLayout.vue'


export default {
  head: {

  },
  computed: {
    layout() {
      return (this.$route.meta.layout) + '-layout'
    }
  },
  components: {
    MainLayout,
    AdminLayout
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap&subset=cyrillic-ext');
body{
  font-family: $main-font-family!important;
  background: $body-color!important;
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
  color: inherit!important;
}
.wrapper {
    width: 100%;
    min-height: 100%;
    max-width: 1600px;
    overflow: hidden;
    padding: $padding-xl $padding-xxl;
    margin: 0 auto;
}
.border-ctn{
  border-radius: $main-border-radius;
}
.mobile-hide{
  display: block;
}
.tablet-hide{
  display: block;
}
@media screen and(max-width: 576px){
  .mobile-hide{
    display: none !important;
  }
}
@media screen and(max-width: 768px) {
  .tablet-hide{
    display: none!important;
  }
}

.desktop-hide{
  display: none; 
}
@media screen and(max-width: 576px){
  .desktop-hide{
    display: block;
  }
}

@media screen and(max-width: 992px){
  .wrapper{
    padding: 0;
  }
}
</style>
