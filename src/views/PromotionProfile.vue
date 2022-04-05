<template>
    <section>
        <div class="promotion">
            <div class="promotion__img-wrap">
                <img class="promotion__img" src="img\unsplash_ZbzYDboN7fg.png" alt="">
            </div>
            <div class="promotion__head">
                <div class="promotion__title"> 
                    <p>МРТ 1, 2 и 3 отделов <span>со скидкой до 45%</span> в медицинском центре «Вектор»!</p>
                </div>
                <div class="promotion__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis sit enim nullamius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculius varius pellentesque eleifend.</p>
                </div>
            </div>
            <div class="promotion__body">
                <div class="promotion__detail">
                    <div class="promotion__clinic">
                        <div class="promotion__clinic-title">Медицинский центр “JC Clinic” </div>
                        <div class="promotion__clinic-spec">Многопрофильная клиника, дневной стационар, КТ, МРТ, УЗИ</div>
                        <div class="promotion__clinic-phone"><a href="">+7 707 637 7050</a></div>
                    </div>
                    <div class="promotion__price">
                        <div class="promotion__price-title">Цены на услуги:</div>
                        <div class="promotion__price-list">
                            <div class="promotion__price-item">
                                <span>Лечение аллергии</span> 
                                <span>50% скидка</span>
                            </div>
                            <div class="promotion__price-item">
                                <span>Лечение аллергии</span> 
                                <span>50% скидка</span>
                            </div>
                            <div class="promotion__price-item">
                                <span>Лечение аллергии</span> 
                                <span>50% скидка</span>
                            </div>
                            <div class="promotion__price-item">
                                <span>Лечение аллергии</span> 
                                <span>50% скидка</span>
                            </div>
                            <div class="promotion__price-item">
                                <span>Лечение аллергии</span> 
                                <span>50% скидка</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="promotion__info">
                    <Accordion></Accordion>
                </div>
            </div>

        </div>
    </section>
    <section>
        <div class="additional-promo">
            <div class="additional-promo__head">
                <div class="additional-promo__title">
                    Дополнительно
                </div>
                <button type="button" class="btn btn-primary">Показать еще</button>
            </div>
            <div class="additional-promo__body">
                <div class="promo-list">
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
                </div>
            </div>
        </div>
    </section>
    <section>
        <accordion></accordion>
    </section>
    
</template>
<script>
import Accordion from '@/components/Accordion.vue'
export default {
    components: {
        Accordion
    },
    data() {
        return {

        }
  },
    
}
</script>
<style lang="scss" scoped>
.btn-primary{
    background: $promo-main-color;
    border-radius: $md-border-radius;
}

.promotion{
    margin: $margin-xl 0;
    &__img-wrap{

    }
    &__img{
        position: relative;
        width: 100%;
        height: auto;
        max-height: 70vh;
        max-width: 100%;
        object-fit: fill;
    }
    &__head{
        margin: $margin-xl 0;
        padding: $padding-xl;
        background-color: $main-bg-color;
        border-radius: $main-border-radius;
    }
    &__title{
        font-weight: $font-weigth-lg;
        font-size: $font-size-xxl-2;
        line-height: $line-height-1;
        color: $main-text-color;
        span{
            color:$promo-main-color;
        }
    }
    &__description{
        width: 65%;
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_2;
        line-height: $line-height-4;
        color: $description-font-color;
        p{
            margin: 0;
        }
    }

    &__body{
        display: flex;

    }
    &__detail{
        flex: 0 0 50%;
        margin-right: $margin-xxl;

    }
    &__clinic{
        background-color: $main-bg-color;
        border-radius: $main-border-radius;
        padding: $padding-xl;
        margin-bottom: $margin-xl;
    }
    &__clinic-title{
        font-weight: $font-weigth-md;
        font-size: $font-size-xl;
        line-height: $description-line-height;
        color: rgba(18, 17, 39, 0.8);
        margin-bottom: 5px;
    }
    &__clinic-spec{
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_1;
        line-height: $line-height-2;
        color: $main-text-color;
        margin-bottom: $margin-xl;
    }
    &__clinic-phone{
        a{
            background: $promo-main-color;
            border-radius: $sub-border-radius;
            padding: $padding-md $padding-xl;
            color: $color-text-light!important;
        }
    }
    &__price{
        background-color: $main-bg-color;
        border-radius: $main-border-radius;
        padding: $padding-xl;
    }
    &__price-title{
        font-weight: $font-weigth-md;
        font-size: $font-size-xl;
        line-height: $line-height-2;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: $main-text-color;
        margin-bottom: $margin-xl;
    }
    &__price-item{
        background: $main-bg-color;
        border: 1px solid rgba(18, 17, 39, 0.2);
        border-radius: $main-border-radius;
        padding: $padding-lg-1 $padding-xl;
        margin-bottom: $margin-md_1;
        display: flex;
        justify-content: space-between;
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_2;
        line-height: $line-height-2;
        color: rgba(18, 17, 39, 0.75);
    }
    &__info{
        width: 100%;
    } 
}

.additional-promo{
    
    &__head{
        display: flex;
        justify-content: space-between;
        padding: $padding-xl;
        background-color: $main-bg-color;
        border-radius: $main-border-radius;
    }
    &__title{
        font-weight: $font-weigth-lg;
        font-size: $font-size-xxl;
        line-height: $line-height-1;
        color: $main-text-color;
    }
    &__body{
        margin: $margin-xl 0;
    }
}

.promo-list{
    display: flex;
    gap: $gap-xl;
    margin-top: $margin-xl;
}

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
        line-height: $line-height-1;
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
</style>