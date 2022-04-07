<template>
    <section>
        <div class="banner">
            <div class="banner__title-wrap">
                <div class="banner__title">
                    Помогаем быть здоровыми
                </div>
                <div class="banner__sub-title">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint 
                </div>
            </div>
        </div>
    </section>
    <section>
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
export default {
    components: {
        SeoText
    },
    data() {
        return {
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

.banner{
    background-image: url("~@/assets/images/unsplash_r40EYKVyutI.png");
    background-position: right center;
    position: relative;
    background-color: #5ca1ce;
    background-repeat: no-repeat;
    background-size: cover;
    height: 622px;
    border-radius: $main-border-radius;
    margin-top: $margin-xl;
    &__title-wrap{
        border-radius: $main-border-radius;
        margin: 0;
        background: $main-bg-color;
        padding: $padding-xxl $padding-xxl-2;
        position: absolute;
        top: 75%;
        width: 80%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
    }
    &__title{
        font-weight: $font-weigth-lg;
        font-size: $font-size-xxl;
        line-height: $line-height-1;
        color: $color-text-catalog;
    }
    &__sub-title{
        font-weight: $font-weigth-sm;
        font-size: $font-size-md_1;
        line-height: $line-height-4;
        color: $description-font-color;
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
        font-size: $font-size-xl;
        color: $color-text-catalog;
    }
    &__item-link{
        font-size: $font-size-md_2;
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

@media screen and(max-width: 576px){
    .banner{
        height: 350px;
        
        &__title-wrap{
            padding: $padding-md $padding-xl;
            width: 95%;
            
        }
        &__title{
            font-size: $font-size-xl;
        }
        &__sub-title{
            font-size: $font-size-md_3;
        }
    }
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
        padding: $padding-xl $padding-md;
    }

}
</style>