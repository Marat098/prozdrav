<template>
  <div class="col-12 doc">
    <div class="doc-item border-ctn">
      <div class="doc-item__img-wrap">
          <a href="/doc-profile">
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
            <a href="/doc-profile">
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
    margin-top: $margin-xl;
}
.doc-item{
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
        line-height: $line-height-2;
        color: $title-profile-font-color;
        margin-bottom: $margin-sm;
    }
    &__spec{
        color: rgba(0, 0, 0, 0.6);
        margin-bottom: $margin-xl;
    }
    &__spec-item{
        padding: $padding-sm $padding-md-1;
        margin-right: $margin-md_1;
        background: rgba(68, 75, 211, 0.2);
        border-radius: $sub-border-radius;
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_3;
        line-height: $line-height-3;

    }
    &__exp{
        margin-bottom: $margin-md_1;
        display: flex;
        flex-flow: wrap;
        color: $title-profile-font-color;
    }
    &__exp-itm{
        margin: $margin-sm 0;
        background: $main-bg-color;
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
@media screen and(max-width: 576px){
    .doc-item{
        padding: $padding-xl $padding-md;
        &__img-wrap{
            margin-right: $margin-md_1;
        }
        &__img{
            width: 100px;
            height: 110px;
        }
        &__rating{
            font-size: $font-size-md_3;
        }
        &__reviews-count{
            font-size: $font-size-sm;
        }
        &__title{
            font-size: $font-size-md_1;
            margin-bottom: 0;
        }
        &__exp-itm{
            font-size: $font-size-md_3;
        }
        &__spec{
            display: flex;
            flex-wrap: wrap;
            margin-bottom: $margin-md_1;

        }
        &__spec-item{
            margin-right: $margin-sm;
            margin-bottom: $margin-sm;
        }
        &__price{
            font-size: $font-size-sm;
            padding: $padding-sm $padding-md;
            width: 100%;
        }
        &__contacts{

        }
        &__contacts-item{
            padding: $padding-sm $padding-md;
            width: 100%;
            font-size: $font-size-sm;
        }
        &__contacts-phone{
            font-size: $font-size-sm;
            padding: $padding-sm $padding-md;
            margin-bottom: $margin-sm;
        }
    }
}
</style>