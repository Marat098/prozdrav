<template>
    <div class="news-item">
        <a :href= link>
            <div class="news-item__img-wrap border-ctn">
                <img :src = imgPath class="img-fluid" />
                <div class="news-item__title ">
                    <span>{{title}}</span>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        imgPath: {
            type: String,
            default: "img\\unsplash_w8p9cQDLX7I.png"
        },
        link: {
            type: String,
            default: '/article'
        },
        title: {
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
    },
}
</script>

<style scoped lang="scss">
.news-item{
     &__img-wrap{
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      overflow: hidden;
      flex-direction: column;
      color: $main-text-color;

    }
    &__title{
        position: absolute;
        padding-left: $padding-xl;
        width: 60%;
        right: 0;
        background: $main-bg-color;
        border-radius: $main-border-radius 0 0 0;
        span{
            font-size: $font-size-md_1;
            font-weight: $font-weigth-lg;
        }
    }
}

  @media screen and(max-width: 992px) {
    .news-item{
        span{
            font-size: $font-size-md_2;
            font-weight: $font-weigth-lg;
        }
        &__title{
            position: absolute;
            width: 75%;
        }
    }
  }
</style>