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
    margin-top: 20px;
}
.clinic-item{
    display: grid;
    grid-template-columns: auto 2fr;
    grid-template-rows: auto auto auto;
    padding: 20px;
    background-color: #ffffff;

    &__img-wrap{
        grid-column: 1 / 2;
        grid-row: 1 / 3;
        display: flex;
        text-align: center;
        flex-direction: column;
        margin-right: 20px;
    }
    &__img{
        width: 130px;
        height: 150px;
        border-radius: 10px;
    }
    &__rating{
        border: 1px solid rgba(18, 17, 39, 0.2);
        border-radius: 5px;
        padding: 5px 0;
        margin-top: 10px;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
        color: rgba(18, 17, 39, 0.7)
    }
    &__reviews-count{
        margin-top: 10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 140%;
        color: rgba(18, 17, 39, 0.8);
    }
    &__description{
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
    &__title{
        font-style: normal;
        font-weight: 500;
        font-size: 22px;
        line-height: 115%;
        color: #414141;
        margin-bottom: 5px;
    }
    &__spec{
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: 10px;
        line-height: 115%;
        color: #121127;
        font-weight: 400;
    }
    &__description-body{
        font-weight: 400;
        line-height: 160%;
        letter-spacing: -0.005em;
        color: rgba(18, 17, 39, 0.6);
    }

    &__info{
        grid-column: 2/3;
        grid-row: 2/3;
    }
    &__price{
        display: flex;
        width: 75%;
        justify-content: space-between;
        margin-bottom: 10px;
        background: #FFFFFF;
        border: 0.5px solid #D6D2D2;
        box-sizing: border-box;
        border-radius: 10px;
        padding: 10px;
        #price{
            font-weight: 500;
            color: #414141;
        }
  }
  &__contacts{
      margin-top: 10px;

  }
  &__contacts-item{
    width: 75%;
    padding: 10px;
    border: 1px solid rgba(18, 17, 39, 0.2);
    box-sizing: border-box;
    border-radius: 10px;
  }
    &__contacts-address{
        margin-bottom: 10px;
    }
    &__contacts-phone{
        padding: 8px 16px;
        background: #444BD3;
        border-radius: 5px;
        color: #FFFFFF!important;
        font-size: 14px;
    }
}
</style>