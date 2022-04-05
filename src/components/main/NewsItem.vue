<template>
    <div class="sub-news-item">
        <div class="sub-news-item__img-wrap border-ctn">
            <a :href= link>
                <img class="sub-news-item__img" :src = imgPath alt="" width="180" height="180">
            </a>
        </div>
         <div class="sub-news-item__description">
             <a :href= link>
                <div class="sub-news-item__title">
                    <span>{{title}}</span>
                    <img class="sub-news-item__title-font" src="fonts\Vector.svg" alt="">
                </div>
             </a>
             <a :href= link>
             <div class="sub-news-item__sub-title">
                 <span>{{description}}</span>
             </div>
             </a>
            <div class="sub-news-item__timestamp">
                <div class="sub-news-item__date"><span>{{date}}</span></div>
                <div class="sub-news-item__time"><span>{{time}}</span></div>
             </div>
         </div>
         <div>
            
         </div>
    </div>
</template>
<script>
export default {
    props: {
        imgPath: {
            type: String,
            default: "img\\unsplash_7wWRXewYCH4.png"
        },
        link: {
            type: String,
            default: '/article'
        },
        title: {
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        },
        description: {
            type: String,
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, euismod tempus, neque lorem massa aliquam elementum, mattis eget."
        },
        date: {
            type: String,
            default: "28.04.2022"
        },
        time: {
            type: String,
            default: "12:00"
        },
        
    },
}
</script>
<style lang="scss" scoped>
.sub-news-item{
    display: flex;
    &__img-wrap{
        flex: 0 0 30%;
    }
    &__img{
        max-width: 100%;
        height: auto;
        object-fit: cover;
    }
    &__description{
        padding-left: $padding-md;
    }
    &__title{
        font-style: normal;
        font-weight: $font-weigth-md;
        font-size: $font-size-md_1;
        line-height: $title-letter-height;
        letter-spacing: $title-letter-spascing;
        height: 52px;
        overflow: hidden;
    }
    &__title-font{
        margin-left: $margin-md_2;
    }
    &__sub-title{
        font-weight: $font-weigth-sm;
        font-size: $font-size-sm;
        line-height: $line-height-1;
        color: $description-font-color;
        height: 48px;
        overflow: hidden;
    }

    &__timestamp{
        display: inline-flex;
        padding: $padding-sm $padding-md;
        background: $time-wrap-bg-color;
        border-radius: $sub-border-radius;
        color: $time-font-color;
        font-size: $font-size-sm;
        margin-top: $margin-xs;
    }
    &__date{

    }
    &__time{
        margin-left: $margin-xl;
    }
}

@media screen and(max-width: 992px) {
    .sub-news-item{
        &__img-wrap{
            flex: 0 0 30%;
        }
        &__title{
            font-size: $font-size-md_2;
            height: 45px;
            overflow: hidden;
        }
        &__title-font{
            margin-left: $margin-md_2;
            width: 12px;
            height: 12px;
        }
        &__sub-title{
            font-size: $font-size-md_3;
            height: 30px;
            overflow: hidden;
            line-height: 120%;
        }
        &__timestamp{
            font-size: $font-size-sm;
        }
    }
}

@media screen and(min-width: 1200px) {
    .sub-news-item{
        &__img-wrap{
            flex: 0 0 25%;
        }
        &__title{
            font-size: $font-size-xl_1;
            height: 60px;
            overflow: hidden;
        }
        &__title-font{
            margin-left: $margin-md_2;
        }
        &__sub-title{
            font-size: $font-size-md_2;
            height: 60px;
            overflow: hidden;
            line-height: 120%;
        }
        &__timestamp{
            font-size: $font-size-md_2;
        }
    }
}
</style>