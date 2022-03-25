<template>
    <div class="sub-news-item">
        <div class="sub-news-item__img-wrap border-ctn">
            <a href="/article">
                <img class="sub-news-item__img" src="img\unsplash_7wWRXewYCH4.png" alt="" width="180" height="180">
            </a>
        </div>
         <div class="sub-news-item__description">
             <a href="/article">
                <div class="sub-news-item__title">
                    <span>Lorem ipsum dolor sit amet, consectetur</span>
                    <img class="sub-news-item__title-font" src="fonts\Vector.svg" alt="">
                </div>
             </a>
             <a href="/article">
             <div class="sub-news-item__sub-title">
                 <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, euismod tempus, neque lorem massa aliquam elementum, mattis eget. </span>
             </div>
             </a>
            <div class="sub-news-item__timestamp">
                <div class="sub-news-item__date"><span>28.04.2022</span></div>
                <div class="sub-news-item__time"><span>12:00</span></div>
             </div>
         </div>
         <div>
            
         </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

    .sub-news-item{
        display: flex;
        margin-top: 15px;
        &__img-wrap{
            flex: 0 0 26%;
        }
        &__img{
            max-width: 100%;
            height: auto;
            object-fit: cover;
        }
        &__description{
            padding-left: 20px;
        }
        &__title{
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 25px;
            letter-spacing: -0.005em;
            text-transform: capitalize;
        }
        &__title-font{
            margin-left: 7px;
        }
        &__sub-title{
            font-weight: 400;
            font-size: 18px;
            line-height: 140%;
            color: rgba(18, 17, 39, 0.6);
        }

        &__timestamp{
            display: inline-flex;
            padding: 5px 10px;
            background: #4AD0D3;
            border-radius: 5px;
            color: #fff;
        }
        &__date{

        }
        &__time{
            margin-left: 20px;
        }
    }
</style>