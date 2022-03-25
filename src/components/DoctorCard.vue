<template>
  <div class="col-12 doc">
    <div class="doc-item border-ctn">
      <div class="doc-item__img-wrap">
          <a href="">
            <img
            src="img\Rectangle 210.png"
            alt=""
            class="doc-item__img"
            />
          </a>
            <div class="doc-item__rating">
                <span>Рейтинг: 7.2</span>
            </div>
            <div class="doc-item__reviews-count">
                <span>65 отзывов</span>
            </div>
      </div>
      <div class="doc-item__description">
        <div class="doc-item__title">
            <a href="">
                <span>Рязанцева Алена Андреевна</span>
            </a>
        </div>
        <div class="doc-item__exp">
            <div class="doc-item__exp-itm">
                <span>Стаж 20 лет, высшая категория, к.м.н</span>
            </div>
        </div>
        <div class="doc-item__spec">
            <a class="doc-item__spec-item" href="">
                <span>
                    Аллерголог
                </span>
            </a>
            <a class="doc-item__spec-item" href="">
                <span>
                    Cтоматолог
                </span>
            </a>
            <a class="doc-item__spec-item" href="">
                <span>
                    Гнатолог
                </span>
            </a>
        </div>
      </div>
      <div class="doc-item__info">
        <div class="doc-item__price">
            <span>Первичный прием</span>
            <span id="price">от 5500 тенге</span>
        </div>
        <div class="doc-item__contacts">
            <div class="doc-item__contacts-item">
                <div class="doc-item__contacts-address">
                    <span>Медицинский центр “JC Clinic”</span>
                </div>
                <a class="doc-item__contacts-phone" href="tel:+7 707 637 7050">+7 707 637 7050</a>
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
.doc{
    margin-top: 20px;
}
.doc-item{
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
        margin-bottom: 20px;
    }
    &__spec-item{
        padding: 5px 8px;
        margin-right: 10px;
        background: rgba(68, 75, 211, 0.2);
        border-radius: 5px;
        font-weight: 400;
        font-size: 14px;
        line-height: 100%;

    }
    &__exp{
        margin-bottom: 10px;
        display: flex;
        flex-flow: wrap;
        color: #414141;
    }
    &__exp-itm{
        margin: 5px 0;
        background: #FFFFFF;
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