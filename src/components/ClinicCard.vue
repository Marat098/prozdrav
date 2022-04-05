<template>
  <div class="col-12 clinic">
    <div class="clinic-item border-ctn">
      <div class="clinic-item__img-wrap">
          <a href="">
            <img
            src="img\unsplash_IV6Ge9vzmHE.png"
            alt=""
            class="clinic-item__img"
            />
          </a>
            <div class="clinic-item__rating">
                <span>Рейтинг: 7.2</span>
            </div>
            <div class="clinic-item__reviews-count">
                <span>65 отзывов</span>
            </div>
      </div>
      <div class="clinic-item__description">
        <div class="clinic-item__title">
            <a href="">
                <span>Медицинский центр “JC Clinic” </span>
            </a>
        </div>
        <div class="clinic-item__spec">
            Многопрофильная клиника, дневной стационар, КТ, МРТ, УЗИ
        </div>
        <div class="clinic-item__description-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis sit enim nullamius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculius varius pellentesque eleifend. 
        </div>
      </div>
      <div class="clinic-item__info">
        <div class="clinic-item__contacts">
            <div class="clinic-item__contacts-item">
                <div class="clinic-item__contacts-address">
                    <span>Медицинский центр “JC Clinic” </span>
                </div>
                <a class="clinic-item__contacts-phone" href="tel:+7 707 637 7050">+7 707 637 7050</a>
            </div>
            
        </div>

      </div>
    </div>
</div>
</template>

<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.icon-arrow-wrap{
    align-self: center
}
.icon-arrow{
    width: 26px;
    height: 26px;
}
.clinic{
    margin-top: $margin-xl;
}
.clinic-item{
    display: grid;
    grid-template-columns: auto 2fr;
    grid-template-rows: auto auto auto;
    padding: $padding-xl;
    background-color: $main-bg-color;

    &__img-wrap{
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        display: flex;
        text-align: center;
        flex-direction: column;
        margin-right: $margin-xl;
    }
    &__img{
        width: 130px;
        height: 150px;
        border-radius: $main-border-radius;
    }
    &__rating{
        border: 1px solid rgba(18, 17, 39, 0.2);
        border-radius: $sub-border-radius;
        padding: $padding-sm 0;
        margin-top: $margin-md_1;
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_2;
        line-height: 100%;
        color: rgba(18, 17, 39, 0.7)
    }
    &__reviews-count{
        margin-top: $margin-md_1;
        font-weight: $font-weigth-md;
        font-size: $font-size-md_3;
        line-height: $line-height-1;
        color: rgba(18, 17, 39, 0.8);
    }
    &__description{
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
    &__title{
        font-style: normal;
        font-weight: $font-weigth-md;
        font-size: $font-size-xl_1;
        line-height: 115%;
        color: $title-profile-font-color;
        margin-bottom: $margin-sm;
    }
    &__spec{
        margin-bottom: $margin-md_1;
        line-height: 115%;
        color: $main-text-color;
        font-weight: $font-weigth-sm;
    }
    &__description-body{
        font-weight: $font-weigth-sm;
        line-height: 160%;
        letter-spacing: $title-letter-spascing;
        color: $description-font-color;
    }

    &__info{
        grid-column: 2/3;
        grid-row: 2/3;
    }
    &__price{
        display: flex;
        width: 75%;
        justify-content: space-between;
        margin-bottom: $margin-md_1;
        background: $main-bg-color;
        border: 0.5px solid #D6D2D2;
        box-sizing: border-box;
        border-radius: $main-border-radius;
        padding: $padding-md;
        #price{
            font-weight: $font-weigth-md;
            color: $title-profile-font-color;
        }
  }
  &__contacts{
      margin-top: $margin-md_1;

  }
  &__contacts-item{
    width: 75%;
    padding: $padding-md;
    border: 1px solid rgba(18, 17, 39, 0.2);
    box-sizing: border-box;
    border-radius: $main-border-radius;
  }
    &__contacts-address{
        margin-bottom: $margin-md_1;
    }
    &__contacts-phone{
        padding: $padding-md-1 $padding-lg;
        background: $doc-clinic-color;
        border-radius: $sub-border-radius;
        color: $color-text-light!important;
        font-size: $font-size-md_3;
    }
}
</style>