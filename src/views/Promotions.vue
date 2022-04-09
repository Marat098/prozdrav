<template>
    <section>
        <div class="banner">
            <div class="banner__title-wrap">
                <div class="banner__title">
                    <p>Contact us</p>
                    Скидки и акции в вашем городе
                </div>
                <div class="banner__sub-title">
                    <p><strong>Offices</strong></p>
                    <p>1901 Thornridge Cir.Shiloh, Hawaii 81063</p>
                    <p>8502 Preston Rd.Inglewood, Maine 98380</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="promo-category">
            <div class="promo-category__title">
                Консультация врачей
            </div>
            <button type="button" class="btn btn-primary mobile-hide">Показать еще</button>
        </div>
        <PromoList>
            <promo-card></promo-card>
            <promo-card></promo-card>
            <promo-card></promo-card>
            <promo-card></promo-card>
        </PromoList>
        <div class="promo-button desktop-hide" >
            <button type="button" class="btn btn-primary mobile-button">Показать еще</button>
        </div>
        <div class="promo-category">
            <div class="promo-category__title">
                Консультация врачей
            </div>
            <button type="button" class="btn btn-primary mobile-hide">Показать еще</button>
        </div>
        <PromoList>
            <promo-card></promo-card>
            <promo-card></promo-card>
            <promo-card></promo-card>
            <promo-card></promo-card>
        </PromoList>
        <div class="promo-button desktop-hide" >
            <button type="button" class="btn btn-primary mobile-button">Показать еще</button>
        </div>
        <div class="promo-category">
            <div class="promo-category__title">
                Консультация врачей
            </div>
            <button type="button" class="btn btn-primary mobile-hide">Показать еще</button>
        </div>
        <PromoList>
            <promo-card></promo-card>
            <promo-card></promo-card>
            <promo-card></promo-card>
            <promo-card></promo-card>
        </PromoList>
        <div class="promo-button desktop-hide" >
            <button type="button" class="btn btn-primary mobile-button">Показать еще</button>
        </div>
    </section>
    <section>
        <SeoText></SeoText>
    </section>
    
</template>
<script>
import SeoText from '@/components/SeoText.vue'
import PromoList from '@/components/PromoList.vue'
import PromoCard from '@/components/PromoCard.vue'
export default {
    components: {
        SeoText,
        PromoList,
        PromoCard
    },
    data() {
        return {
        }
  },
    
}
</script>
<style lang="scss" scoped>

.banner{
    background-image: url("~@/assets/images/unsplash_Ta3f1ZcCgWg.png");
    background-position: right center;
    position: relative;
    background-color: $bg-color-7;
    background-repeat: no-repeat;
    background-size: cover;
    height: 512px;
    border-radius: $main-border-radius;
    margin-top: $margin-xl;
    &__title-wrap{
        border-radius: $main-border-radius;
        margin: 0;
        background: white;
        padding: $padding-xxl $padding-xxl-2;
        position: absolute;
        top: 50%;
        width: 80%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        display: flex;
    }
    &__title{
        font-weight: $font-weigth-lg;
        font-size: $font-size-xxl;
        line-height: $line-height-1;
        color: $main-text-color;
        display: flex;
        flex-direction: column;
        flex: 0 0 75%;
        align-self: center;
        p{
            font-weight: $font-weigth-lg-1;
            font-size: $font-size-md_1;
            line-height: 170%;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            color: $promo-main-color;
        }
    }
    &__sub-title{
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_1;
        line-height: 180%;
        color: rgba(0, 0, 0, 0.6);
    }
}
.promo-category{
    background-color: $main-bg-color;
    padding: $padding-xl;
    margin-top: $margin-xl;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-radius: $main-border-radius;
    &__title{
        font-weight: $font-weigth-lg;
        font-size: $font-size-xxl;
        line-height: $line-height-1;
        color: $main-text-color;
    }
}




.promo-button{
    margin-top: $margin-md_1;
}


.aquamarine{
    background: #D4FFF5;
}
.pink{
    background: #FFD0D0;
}
.light-green{
    background: #CDFFAE;
}
.blue{
    background: #AFF1FF;
}
.peach{
    background: #FFE0BB;
}
.btn-primary{
    background: $promo-main-color;
    border-radius: $md-border-radius;
    border-color: unset;
}
.mobile-button{
    width: 100%!important;
}

@media screen and(max-width: 768px){
    .banner{
        &__title-wrap{
            padding: $padding-xl;
            flex-direction: column;
        }
        &__title{
            font-size: $font-size-xl;
            align-self: start;
            margin-bottom: $margin-xl;
            p{
                margin-bottom: $margin-sm;
                font-size: $font-size-md_3;
            }
        }
        &__sub-title{
            font-size: $font-size-md_2;
            p{
                margin-bottom: $margin-md_1;
            }
        }
    }
    .promo-category{
        padding: $padding-md;
        margin-top: $margin-md_1;
        &__title{
            font-size:$font-size-xl;
        }
    }

    
}
</style>