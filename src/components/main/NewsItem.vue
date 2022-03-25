<template>
    <div class="news-item">
        <a href="/article">
            <div class="news-item__img-wrap border-ctn">
                <img src="img\unsplash_w8p9cQDLX7I.png" class="img-fluid" />
                <div class="news-item__title ">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
                </div>
            </div>
        </a>
    </div>
</template>


<style scoped lang="scss">
.news-item{
     &__img-wrap{
      position: relative;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      overflow: hidden;
      flex-direction: column;
      color: #121127;
      span{
        font-size: 24px;
        font-weight: 700;
      }
    }
    &__title{
      position: absolute;
      padding-left: 20px;
      width: 60%;
      right: 0;
      background: white;
      border-radius: 10px 0 0 0;

    }
}
</style>