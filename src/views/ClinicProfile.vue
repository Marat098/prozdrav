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
                        <a href="" v-for="(item, index) in section" :key="index">
                            <div class="clinic-spec__item" >
                                {{item.title}}
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
                    <div class="col-12 col-md-6">
                        <div class="clinic-gallery__media-item">
                            <iframe
                                class="media-frame border-ctn" 
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
                    <div class="col-12 col-md-6">
                        <div class="clinic-gallery__media-item">
                            <iframe
                                class="media-frame border-ctn" 
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
                <div class="col-12 col-md-8">
                    <div class="row">
                        <div class="col-12">
                            <div class="clinic-doctors__title">
                                Врачи
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="clinic-doctors__select-wrapper">
                                <div class="clinic-doctors__select-wrap">
                                    <div class="clinic-doctors__select-body ">
                                        <select id="selector" class="clinic-doctors__select" name="select"> 
                                            <option value="value1">Терапевт</option>
                                            <option value="value2" selected>Аллерголог</option>
                                            <option value="value3">Травмотолог</option>
                                            <option value="value1">Терапевт</option>
                                            <option value="value2" selected>Аллерголог</option>
                                            <option value="value3">Травмотолог</option>
                                            <option value="value1">Терапевт</option>
                                            <option value="value2" selected>Аллерголог</option>
                                            <option value="value3">Травмотолог</option>
                                            <option value="value1">Терапевт</option>
                                            <option value="value2" selected>Аллерголог</option>
                                            <option value="value3">Травмотолог</option>     
                                        </select>
                                        <div class="clinic-doctors__select-font">
                                        </div>
                                    </div>
                                </div>
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
                <div class="col-md-4 tablet-hide">
                    <div class="add-clinic-doctors"></div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <Accordion></Accordion>
    </section>
</template>
<script>
import $ from 'jquery'
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
    },
    data() {
        return {
            section: [
                {title: "Лечение аллергии"},
                {title: "Лечение аллергии"},
                {title: "Лечение аллергии"},
                {title: "Лечение аллергии"},
                {title: "Лечение аллергии"},
                {title: "Лечение аллергии"},
                {title: "Лечение аллергии"},
                {title: "Лечение аллергии"},
            ]
        }
    },
    mounted() {
        const left_btn = document.querySelector("#left");
        left_btn.addEventListener("mousedown", event=> {
            const scroll = document.querySelector(".clinic-gallery__scroll");
            const media_item= document.querySelector(".clinic-gallery__item");
            const item_minus = media_item.offsetWidth;
            scroll.scrollLeft -= item_minus;
        });
        const right_btn = document.querySelector("#right");
        right_btn.addEventListener("mousedown", event=> {
        const scroll = document.querySelector(".clinic-gallery__scroll");
        const media_item= document.querySelector(".clinic-gallery__item");
        const item_plus = media_item.offsetWidth;
        scroll.scrollLeft += item_plus;
        });
        let movement = false;
        let mousedown = false;
        function onMouseMove(e){
            e.preventDefault();
            e.stopPropagation();
            if(mousedown) {
                movement = true;
                this.scrollLeft -= event.movementX;
                this.scrollTop -= event.movementY;
            }
        }

        function onMouseDown(){
        mousedown = true;
        movement = false;
        }

        function onMouseUp(e){
        mousedown = false;
        setTimeout(()=>movement = false, 10);
        }

        function onMouseClick(e){
        if(movement){
            e.preventDefault();
            e.stopPropagation();
        }
        }
        function onDragStart(e){
            e.preventDefault();
            e.stopPropagation();
        }

        let scr = $(".clinic-gallery__scroll");

        scr.mousemove(onMouseMove);
        scr.mousedown(onMouseDown);
        $(window).mouseup(onMouseUp);
        window.addEventListener('dragstart',onDragStart);
        window.addEventListener('blur',onMouseUp);
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
        width: 350px;
        height: 250px;
    }
    &__media{
        margin-top: $margin-xl;
    }
    &__media-item{
    }
}

.clinic-doctors{
    margin: $margin-xl 0;
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
    &__select-wrapper{
        margin-top: $margin-xl;
        padding: $padding-xl;
        background: $main-bg-color;
        border: 1px solid rgba(18, 17, 39, 0.2);
        border-radius: $main-border-radius;
    }
    &__show-more{
        margin-top: $margin-xl;
    }
     &__select-wrap{
        padding: $padding-sm $padding-md;
        background: $main-bg-color;
        border: 1px solid rgba(18, 17, 39, 0.2);
        box-sizing: border-box;
        border-radius: $sub-border-radius;
        display: flex;
    }
    &__select-body{
        flex: 0 0 100%;
        display: flex;
        position: relative;
    }
    &__select{
        width: 100%;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-size: $font-size-md_3;
        color: rgba(18, 17, 39, 0.6);
    }
    &__select-font{
        background-image: url(/img/arrow.314ffd53.svg);
        background-repeat: no-repeat;
        transition: transform 0.2s ease-in-out;
        width: 1.35rem;
        height: 1.35rem;
        background-size: 1rem;
        background-position: center;
        transform: rotate(-180deg);
        position: absolute;
        cursor: default;
	    pointer-events: none;
        right: 0;
        top: 3%;
    }
    &__select:focus-visible{
        outline:none;
    }
    &__select::after{
        color: #e02b2b!important;
    }
}
.add-clinic-doctors{
    background: #C1C1C1;
    height: 100%;
    width: 100%;
    border-radius: 10px;
}

.white{
    background-color: #FFFFFF;
}
.mazarine{
    background-color: #444BD3;
}
.media-frame{
    width: 100%;
    height: 400px;
}

@media screen and (max-width: 992px){
    .media-frame {
        height: 350px;
    }
}
@media screen and (max-width: 576px){
    .media-frame {
        height: 250px;
    }
    .clinic-spec{
        margin-top: 10px;
        &__list{
            margin-top: 10px;
        }
        &__item{
            padding: 5px 10px;
            margin: 5px 5px 0 0;
            font-size: 14px;
        }
    }
    .clinic-gallery{
        &__title{
            padding: 10px;
            font-size: 18px;
        }
        &__scroll{
            padding: 10px;
        }
        &__item{
            margin-right: 10px;
        }
        &__img{
            width: 180px;
            height: 130px;
        }
    }

}
</style>