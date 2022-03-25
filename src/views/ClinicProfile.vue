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
    background-color: #444BD3;
    border-radius: 8px;
}
.clinic-profile{
    margin-top: 20px;
}
.clinic-spec{
    margin-top: 20px;
    padding: 20px 20px;
    background-color: #FFFFFF;
    border-radius: 10px;
    &__title{
        font-weight: 500;
        font-size: 20px;
        line-height: 115%;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: rgba(18, 17, 39, 0.75);
        
    }
    &__list{
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
    }
    &__item{
        background: #FFFFFF;
        border: 1px solid rgba(18, 17, 39, 0.12);
        box-sizing: border-box;
        border-radius: 100px;
        padding: 10px 20px;
        margin: 10px 10px 0 0;
        display: flex;
        flex-wrap: nowrap;
        font-weight: 400;
        font-size: 16px;
        line-height: 140%;
        color: rgba(18, 17, 39, 0.6);
    }
}

.clinic-gallery{
    margin-top: 20px;
    &__head{
        display: flex;
        
    }
    &__title{
        padding: 20px;
        background-color: #FFFFFF;
        width: 90%;
        border-radius: 10px;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: #121127;
    }
    &__btns{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__btn{
        height: 48px;
        border-radius: 100px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 24px;
        margin: 0px 6px;
        border:none;
    }
    &__scroll{
        display: flex;
        overflow-x: scroll;
        padding: 20px;
        background-color: #FFFFFF;
        margin-top: 20px; 
        border-radius: 10px;
    }
    &__scroll::-webkit-scrollbar{
      width: 0;
    }
    &__item{
        border-radius: 10px;
        margin-right: 20px;
    }
    &__img{
        width: 394px;
        height: 247px;
    }
    &__media{
        margin-top: 20px;
    }
    &__media-item{
    }
}

.clinic-doctors{
    margin-top: 20px;
    &__title{
        padding: 20px;
        background-color: #FFFFFF;
        border-radius: 10px;
        font-weight: 600;
        font-size: 20px;
        line-height: 28px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        color: #121127;
    }
    &__select{
        margin-top: 20px;
        padding: 20px;
        background: #FFFFFF;
        border: 1px solid rgba(18, 17, 39, 0.2);
        border-radius: 10px;
    }
    &__show-more{
        margin-top: 20px;
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