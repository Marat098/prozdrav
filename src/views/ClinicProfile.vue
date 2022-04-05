<template>
    <section>
        <Filter></Filter>
    </section>
    <section>
        <div class="clinic-profile">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <ClinicCard></ClinicCard>
                </div>
                <div class="col-lg-4 mobile-hide"></div>
            </div>
            <div class="col-12">
                <div class="clinic-spec">
                    <div class="clinic-spec__title">
                        ПРОФИЛЬ КЛИНИКИ
                    </div>
                    <div class="clinic-spec__list">
                        <a href="">
                            <div class="clinic-spec__item ">
                                Лечение аллергии
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="clinic-gallery">
            <div class="clinic-gallery__head">
                <div class="clinic-gallery__title">
                    Галерея
                </div>
                <div class="clinic-gallery__btns">
                    <button id="left" class="clinic-gallery__btn white"><img src="fonts\black-line.svg" alt=""></button>
                    <button id="right" class="clinic-gallery__btn mazarine"><img src="fonts\white-line.svg" alt=""></button>
                </div>
            </div>
            <div class="clinic-gallery__scroll">
                <div class="clinic-gallery__item">
                    <img class="clinic-gallery__img" src="img\unsplash_IV6Ge9vzmHE.png" alt="" width="394" height="247">
                </div>
                <div class="clinic-gallery__item">
                    <img class="clinic-gallery__img" src="img\unsplash_IV6Ge9vzmHE.png" alt="" width="394" height="247">
                </div>
                <div class="clinic-gallery__item">
                    <img class="clinic-gallery__img" src="img\unsplash_IV6Ge9vzmHE.png" alt="" width="394" height="247">
                </div>
                <div class="clinic-gallery__item">
                    <img class="clinic-gallery__img" src="img\unsplash_IV6Ge9vzmHE.png" alt="" width="394" height="247">
                </div>
                <div class="clinic-gallery__item">
                    <img class="clinic-gallery__img" src="img\unsplash_IV6Ge9vzmHE.png" alt="" width="394" height="247">
                </div>
                <div class="clinic-gallery__item">
                    <img class="clinic-gallery__img" src="img\unsplash_IV6Ge9vzmHE.png" alt="" width="394" height="247">
                </div>
                <div class="clinic-gallery__item">
                    <img class="clinic-gallery__img" src="img\unsplash_IV6Ge9vzmHE.png" alt="" width="394" height="247">
                </div>
            </div>
            <div class="clinic-gallery__media">
                <div class="row">
                    <div class="col-12 col-lg-6">
                        <div class="clinic-gallery__media-item">
                            <iframe
                                class="media border-ctn" 
                                width="560" 
                                height="408" 
                                src="https://www.youtube.com/embed/tev0BTf0XW4"
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="clinic-gallery__media-item">
                            <iframe
                                class="media border-ctn" 
                                width="560" 
                                height="408" 
                                src="https://www.youtube.com/embed/tev0BTf0XW4"
                                title="YouTube video player" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="clinic__accordion">
            <Accordion></Accordion>
        </div>
    </section>
    <section>
        <div class="clinic-doctors">
            <div class="row">
                <div class="col-12 col-lg-8">
                    <div class="row">
                        <div class="col-12">
                            <div class="clinic-doctors__title">
                                Врачи
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="clinic-doctors__select">
                                Аллергологи
                            </div>
                        </div>
                        <Doctor-card></Doctor-card>
                        <Doctor-card></Doctor-card>
                        <Doctor-card></Doctor-card>
                        <Doctor-card></Doctor-card>
                        <div class="col-12">
                            <div class="clinic-doctors__show-more">
                                <button type="button" class="btn btn-primary" id="doc-show-more">Показать больше</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <Accordion></Accordion>
    </section>
</template>
<script>
import Filter from '@/components/Filter.vue'
import DoctorCard from '@/components/DoctorCard.vue'
import ClinicCard from '@/components/ClinicCard.vue'
import SeoText from '@/components/SeoText.vue'
import Accordion from '@/components/Accordion.vue'
export default {
    name: 'ClinicProfile',
    components: {
        Filter,
        ClinicCard,
        SeoText,
        DoctorCard,
        Accordion
    }
}
</script>
<style lang="scss" scoped>
#doc-show-more{
    width: 100%;
    background-color: $color-text-catalog;
    border-radius: $md-border-radius;
}
.clinic-profile{
    margin-top: $margin-xl;
}
.clinic-spec{
    margin-top: $margin-xl;
    padding: $padding-xl;
    background-color: $main-bg-color;
    border-radius: $main-border-radius;
    &__title{
        font-weight: $font-weigth-md;
        font-size: $font-size-lg;
        line-height: $line-height-2;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: rgba(18, 17, 39, 0.75);
        
    }
    &__list{
        margin-top: $margin-xl;
        display: flex;
        flex-wrap: wrap;
    }
    &__item{
        background: #FFFFFF;
        border: 1px solid rgba(18, 17, 39, 0.12);
        box-sizing: border-box;
        border-radius: $xxl-border-radius;
        padding: $padding-md $padding-xl;
        margin: $margin-md_1 $margin-md_1 0 0;
        display: flex;
        flex-wrap: nowrap;
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_2;
        line-height: $line-height-1;
        color: $description-font-color;
    }
}

.clinic-gallery{
    margin-top: $margin-xl;
    &__head{
        display: flex;
        
    }
    &__title{
        padding: $padding-xl;
        background-color: $main-bg-color;
        width: 90%;
        border-radius: $main-border-radius;
        font-weight: $font-weigth-lg-1;
        font-size: $font-size-lg;
        line-height: $line-height-6;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: $main-text-color;
    }
    &__btns{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__btn{
        height: 48px;
        border-radius: $xxl-border-radius;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: $padding-lg-2 $padding-xl-1;
        margin: 0px $margin-sm;
        border:none;
    }
    &__scroll{
        display: flex;
        overflow-x: scroll;
        padding: $padding-xl;
        background-color: $main-bg-color;
        margin-top: $margin-xl; 
        border-radius: $main-border-radius;
    }
    &__scroll::-webkit-scrollbar{
      width: 0;
    }
    &__item{
        border-radius: $main-border-radius;
        margin-right: $margin-xl;
    }
    &__img{
        width: 394px;
        height: 247px;
    }
    &__media{
        margin-top: $margin-xl;
    }
    &__media-item{
    }
}

.clinic-doctors{
    margin-top: $margin-xl;
    &__title{
        padding: $padding-xl;
        background-color: #FFFFFF;
        border-radius: $main-border-radius;
        font-weight: $font-weigth-lg-1;
        font-size: $font-size-lg;
        line-height: $line-height-6;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: $main-text-color;
    }
    &__select{
        margin-top: $margin-xl;
        padding: $padding-xl;
        background: $main-bg-color;
        border: 1px solid rgba(18, 17, 39, 0.2);
        border-radius: $main-border-radius;
    }
    &__show-more{
        margin-top: $margin-xl;
    }
}
.white{
    background-color: #FFFFFF;
}
.mazarine{
    background-color: #444BD3;
}
.media{
    width: 100%;
    max-width: 100%;
    min-height: 300px;
    height: auto;
}
</style>