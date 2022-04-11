<template>
    <div class="all-news">
        <div class="all-news__title">
            Все новости
        </div>
        <div class="row gy-3 bg-white" >
            <div class="col-12 col-md-6">
                <news-item></news-item>
            </div>
            <div class="col-12 col-md-6">
                <news-item></news-item>
            </div>
            <div class="col-12 col-md-6">
                <news-item></news-item>
            </div>
            <div class="col-12 col-md-6">
                <news-item></news-item>
            </div>
            <div class="col-12 col-md-6">
                <news-item></news-item>
            </div>
            <div class="col-12 col-md-6">
                <news-item></news-item>
            </div>
            <div class="col-12 col-md-6">
                <news-item></news-item>
            </div>
            <div class="col-12 col-md-6">
                <news-item></news-item>
            </div>
        </div>
    </div>
</template>
<script>
import NewsItem from '@/components/main/NewsItem.vue'
export default {
    components: {
        NewsItem,
    }
}
</script>
<style lang="scss" scoped>
.row{
    margin: 0!important;
}
.all-news{
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
.bg-white{
    background-color: #FFFFFF;
    border-radius: $main-border-radius;
}
</style>