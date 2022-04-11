<template>
    <div class="all-media">
        <div class="all-media__title">
            Все видео
        </div>
        <div class="row gy-2 bg-white" >
            <div class="col-12 col-md-6" v-for="item in media" :key="item">
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
    </div>
</template>
<script>
import NewsItem from '@/components/main/NewsItem.vue'
export default {
    components: {
        NewsItem,
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
        }
    }
}
</script>
<style lang="scss" scoped>
.row{
    margin: 0!important;
}
.all-media{
    &__title{
        padding: $padding-xl;
        font-weight: $font-weigth-lg;
        font-size: $font-size-xxl;
        line-height: 140%;
        color: #121127;
        background-color: $main-bg-color;
        border-radius: $main-border-radius;
        margin-bottom: $margin-xl;
    }
}
.media-frame{
    width: 100%;
    height: 400px;
}
.bg-white{
    background-color: #FFFFFF;
    border-radius: $main-border-radius;
}
@media screen and(max-width: 1200px) {
    .media-frame{
         height: 350px;
    }
}
@media screen and(max-width: 992px) {
    .media-frame{
         height: 300px;
    }
}
@media screen and(max-width: 768px) {
    .media-frame{
         height: 230px;
    }
}
</style>