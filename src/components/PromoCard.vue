<template>
    <div class="promo-item">
        <div class="promo-item__img-wrap">
            <img class="img-fluid" src="img\unsplash_GodLOdCpLi4.png" alt="">
        </div>
        <div class="promo-item__body">
            <div class="promo-item__percent">
                скидка 50%
            </div>
            <div class="promo-item__title">
                Guide for designing better
                mobile apps typography
            </div>
            <div class="promo-item__description">
                <p>In this article, I won’t talk about the general concepts of typography, which can be used both in print...</p> 
            </div>
            <div class="promo-item__category">
                <span> Аллергология</span>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.promo-item{
    width: 25%;
    background-color: $main-bg-color;
    border-radius: $main-border-radius;
    &__body{

        padding: $padding-xl;
    }
    &__percent{
        font-weight: $font-weigth-lg-1;
        font-size: $font-size-md_3;
        line-height: 170%;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: $promo-main-color;
        margin-bottom: $margin-md_1;
    }
    &__title{
        font-weight: $font-weigth-lg;
        font-size: $font-size-lg;
        line-height: 140%;
        color: $main-text-color;
        margin-bottom: $margin-md_1;
        height: 56px;
        overflow: hidden;
    }
    &__description{
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_2;
        line-height: $line-height-4;
        color: $description-font-color;
        height: 110px;
        overflow: hidden;
        margin-bottom: $margin-xl;
    }
    &__category{
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_3;
        line-height: $line-height-4;
        color: $promo-main-color;
        span{
            padding: $padding-sm $padding-lg;
            background: rgba(255, 140, 103, 0.2);
            border-radius: $xxl-border-radius;
        }
    }
}
@media screen and(max-width: 768px){
    .promo-item{
        width: 250px;
        margin-right: 10px;
        &__body{
            padding: $padding-md;
            min-width: 150px;
            width: 100%;
        }
        &__percent{
            font-size: $font-size-md_3;
            margin-bottom: $margin-sm;
        }
        &__title{
            font-size: $font-size-md_2;
            line-height: $line-height-1;
            margin-bottom: $margin-md_1;
            height: 66px;
        }
        &__description{
            font-size: $font-size-md_3;
            line-height: 130%;
        }
        &__category{
            font-size: $font-size-sm;
        }
    }
}
</style>