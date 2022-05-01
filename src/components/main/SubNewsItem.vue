<template>
    <div class="news-item">
    <a :href= link>
        <div class="news-item__img-wrap">
            <img class="img-fluid border-ctn" :src = imgPath alt="">
        </div>
    </a>
    <a :href = link>
        <div class="news-item__title">
            <span>
            {{title}}
            </span>
        </div>
    </a>
    </div>
</template>

<script>
export default {
    props: {
        imgPath: {
            type: String,
            default: "img\\unsplash_DRchVK5apjw.png"
        },
        link: {
            type: String,
            default: '/article'
        },
        title: {
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur'
        }
    },
}
</script>
<style lang="scss" scoped>
.news-item{
    flex: 0 0 23.5%;
    margin: auto;
    &__title{
        font-weight: $font-weigth-md;
        font-size: $font-size-md_2;
        line-height: 20px;
        letter-spacing: -0.005em;
        text-transform: capitalize;
        color: $main-text-color;
        height: 42px;
        overflow: hidden;
    }
}
@media screen and(max-width: 768px){
    .news-item{
        flex: 0 0 54%;
        margin: 5px;
        &__title{
            font-weight: 500;
            font-size: $font-size-sm;
            line-height: 19px;
            height: 38px;
            overflow: hidden;
        }
    }
}
</style>