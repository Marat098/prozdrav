<template>
    <section>
        <div class="banner">
            <div class="banner__wrap">
                <div class="banner__title-wrap">
                    <div class="banner__title">
                        Справочник болезней
                    </div>
                    <div class="banner__sub-title">
                        Болезни, методы лечения, методы диагностики 
                    </div>
                </div>
                <div class="banner__search-wrap">
                    <div class="banner__input-wrap">
                        <input class="banner__input" type="text" placeholder="Введите название болезни">
                    </div>
                    <button class="btn btn-primary" id="search-btn">
                        Поиск
                    </button>
                </div>
            </div>
        </div>
    </section>
    <section>
        <SubTitle textColor = textColor  title="Аллергологи в Алматы"></SubTitle>
        <Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis sit enim nullamius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculius varius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elIaculis sit enim nullam pretium ridiculus aenean sed. Sed morbi elit massa ut metus varius pellentesque eleifend. "></Description>

        <div class="catalog">
            <div class="catalog__group">
                <div class="catalog__title" v-for="(value, name) in list" :key="name">
                    <span class="catalog__letter">{{name}}</span>
                    <div class="catalog__item" v-for="item in value" :key="item">
                        <a href="/doctors" class="catalog__item-link">
                            <span class="catalog__name">{{item}}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <SeoText></SeoText>
    </section>
    
</template>
<script>
import SeoText from '@/components/SeoText.vue'
import SubTitle from '@/components/SubTitle.vue'
import Description from '@/components/Description.vue'
export default {
    components: {
        SeoText,
        SubTitle,
        Description
    },
    data() {
        return {
            textColor: "#121127",
            list: {
                "А": [
                    "Акушер-гинеколог",
                    "Аллерголог",
                    "Андролог",
                    "Аритмолог"
                ],
                "В": [
                    "Венеролог",
                    "Вертебролог"
                ],
                "Г": [
                    "Гастроэнтеролог",
                    "Гематолог",
                    "Генетик",
                    "Гепатолог",
                    "Гинеколог",
                    "Гинеколог-эндокринолог",
                    "Гирудотерапевт"
                ],
                "Д": [
                    "Дерматовенеролог",
                    "Дерматолог",
                    "Диетолог"
                ],
                "И": [
                    "Иммунолог",
                    "Инфекционист"
                ],
                "К": [
                    "Кардиолог",
                    "Кардиохирург",
                    "Косметолог"
                ],
                "Л": [
                    "Логопед",
                    "Лор (отоларинголог)"
                ],
                "М": [
                    "Маммолог",
                    "Мануальный терапевт",
                    "Массажист"
                ],
                "Н": [
                    "Нарколог",
                    "Невропатолог (Невролог)",
                    "Нейрохирург",
                    "Нетрадиционная медицина",
                    "Нефролог"
                ],
                "О": [
                    "Окулист (офтальмолог)",
                    "Онкогинеколог",
                    "Онколог",
                    "Онкомаммолог",
                    "Ортопед",
                    "Остеопат"
                ],
                "П": [
                    "Паразитолог",
                    "Педиатр",
                    "Педиатр-неонатолог",
                    "Пластический хирург",
                    "Проктолог",
                    "Психиатр",
                    "Психолог",
                    "Психотерапевт",
                    "Пульмонолог"
                ],
                "Р": [
                    "Реабилитолог",
                    "Ревматолог",
                    "Рентгенолог",
                    "Репродуктолог (ЭКО)",
                    "Рефлексотерапевт (иглотерапевт)"
                ],
                "С": [
                    "Сексолог",
                    "Сексопатолог",
                    "Сосудистый хирург",
                    "Спортивный врач",
                    "Стоматолог",
                    "Стоматолог-имплантолог",
                    "Стоматолог-ортодонт",
                    "Стоматолог-ортопед",
                    "Стоматолог-терапевт",
                    "Стоматолог-хирург"
                ],
                "Т": [
                    "Терапевт",
                    "Торакальный хирург",
                    "Травматолог",
                    "Трихолог"
                ],
                "У": [
                    "УЗИ-специалист",
                    "Уролог"
                ],
                "Ф": [
                    "Физиотерапевт",
                    "Флеболог"
                ],
                "Х": [
                    "Хирург"
                ],
                "Ч": [
                    "Челюстно-лицевой хирург"
                ],
                "Э": [
                    "Эндокринолог",
                    "Эндоскопист"
                ]
                }
        }
  },
    
}
</script>
<style lang="scss" scoped>
#search-btn{
    background: $bg-color-6;
    border-radius: $md-border-radius;
    border-color: $bg-color-6;
}
.form-control{
    border: 1px solid rgba(18, 17, 39, 0.12);
    box-sizing: border-box;
    border-radius: $md-border-radius!important;
    background: rgba(115, 247, 255, 0.2);
    margin-right: $margin-xl-1;
    font-size: $font-size-md_3;
    line-height: 180%;
    color: $description-font-color;
}
.form-control:focus{
    box-shadow: unset;
}


.banner{
    background-position: right center;
    background: rgba(115, 247, 255, 0.2);
    background-repeat: no-repeat;
    background-size: cover;
    height: 235px;
    max-width: 100%;
    border-radius: $main-border-radius;
    margin-top: $margin-xl;

    &__wrap{
        height: 100%;
        display: flex;
        padding: 0 $padding-xxl-1;
        justify-content: space-between;
        align-items: center;

    }
    &__title-wrap{

    }
    &__title{
        font-weight: $font-weigth-lg;
        font-size: $font-size-xxl-4;
        line-height: $line-height-1;
        color: $main-text-color;
    }
    &__sub-title{
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_3;
        line-height: $line-height-4;
        color: $description-font-color;
    }
    &__search-wrap{
        display: flex;
        flex: 0 0 40%;
        justify-content: end;
        
    }
    &__input-wrap{
        flex: 0 0 70%;
        margin-right: $margin-md_1;
    }
    &__input{
        border: 1px solid rgba(18, 17, 39, 0.12);
        box-sizing: border-box;
        border-radius: 8px;
        background: rgba(115, 247, 255, 0.2);
        width: 100%;
        height: 100%;
        font-size: $font-size-md_3;
        padding: $padding-md;
        color: $color-text-catalog-1;   
    }
     &__input:focus-visible{
        outline: none!important;
     }
}

.title-spec{
    padding: $padding-xl;
    margin-top: $margin-xl;
    background: $main-bg-color;
    border-radius: $main-border-radius;
    span{
        font-weight: $font-weigth-lg;
        font-size: $font-size-xxl-4;;
        line-height: $line-height-1;
        color: $main-text-color;
    }
    
}
.catalog{
    column-count: 4;
    column-gap: normal;
    background: #FFFFFF;
    border: 1px solid #D6D4D2;
    box-sizing: border-box;
    border-radius: $xl-border-radius;
    margin-top: $margin-xl;
    padding: $padding-xl;
    &__letter{
        font-weight: $font-weigth-md;
        font-size: $font-size-md_1;
        color: $color-text-catalog;
    }
    &__item-link{
        font-size: $font-size-md_3;
        text-decoration: none;
        color: $color-text-catalog-1!important;
    }
}




.aquamarine{
    background: #D4FFF5;
}
.pink{
    background: #FFD0D0;
}
.light-green{
    background: #CDFFAE;
}
.blue{
    background: #AFF1FF;
}
.peach{
    background: #FFE0BB;
}
@media screen and(min-width: 1200px){
    .banner{
        &__wrap{
            justify-content: space-evenly;
        }
    }
}
@media screen and(max-width: 768px){
    .banner{
        min-height: 300px;
        justify-content: start;
        &__wrap{
            flex-direction: column;
            padding: $padding-xxl;
        }
        &__title-wrap{
            margin-bottom: $margin-xxl;
        }
        &__title{
            text-align: center;
        }
        &__sub-title{
            text-align: center;
        }
        &__search-wrap{
            flex-direction: column;
            width: 100%;
            flex: 0 0 0;
            max-width: 350px;    
        }
        &__input-wrap{
            margin: 0;
        }
        &__input{
            height: auto;
         }
    }
}

@media screen and(max-width: 576px){
    .selector{
        &__item{
            flex-direction: column-reverse;
        }
        &__icon{
            max-height: 105px;
        }
        &__item-text{
            flex: 0;    
            text-align: center;
        }
        &__item-icon{
            flex: 0;
        }
    }
    .catalog{
        column-count: 2;
    }
}
</style>