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
    border-radius: 10px;
    margin-top: 20px;
    &__title-wrap{
        border-radius: 10px;
        margin: 0;
        background: white;
        padding: 40px 48px;
        position: absolute;
        top: 75%;
        width: 80%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
    }
    &__title{
        font-weight: 700;
        font-size: 36px;
        line-height: 140%;
        color: #444BD3;
    }
    &__sub-title{
        font-weight: 400;
        font-size: 18px;
        line-height: 180%;
        color: rgba(18, 17, 39, 0.6);
    }
}

.catalog{
    column-count: 4;
    column-gap: normal;
    background: #FFFFFF;
    border: 1px solid #D6D4D2;
    box-sizing: border-box;
    border-radius: 20px;
    margin-top: 1rem;
    padding: 1rem 1.5rem;
    &__letter{
        font-weight: 500;
        font-size: 1.5rem;
        color: #444BD3;
    }
    &__item-link{
        font-size: 1rem;
        text-decoration: none;
        color: #505050;
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
        column-count: 1;
    }
}
</style>