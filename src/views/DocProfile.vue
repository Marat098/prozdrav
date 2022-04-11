<template>
<section>
    <div class="doc">
        <div class="row gy-3">
            <div class="col-12 col-sm-8">
                <div class="row gy-3">
                    <doctor-card></doctor-card>         
                </div>
            </div>
            <div class="col-sm-4 mobile-hide">
                <div class="doc__ad">

                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="doc__media-item" >
                    <iframe
                        class="media-frame border-ctn" 
                        width="560" 
                        height="408" 
                        src="https://www.youtube.com/embed/tev0BTf0XW4"
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="doc__media-item" >
                    <iframe
                        class="media-frame border-ctn" 
                        width="560" 
                        height="408" 
                        src="https://www.youtube.com/embed/tev0BTf0XW4"
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div class="col-12">
            <div class="accordion" id="doc-profile-info">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="services">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#services-wrap" aria-expanded="true" aria-controls="services-wrap">
                        Какие услуги оказывает врач:
                    </button>
                    </h2>
                    <div id="services-wrap" class="accordion-collapse collapse show" aria-labelledby="services">
                    <div class="accordion-body">
                        <div class="services-item">
                            Лечение аллергии
                        </div>
                        <div class="services-item">
                            Лечение аллергии
                        </div>
                        <div class="services-item">
                            Лечение аллергии
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Цены
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div class="accordion-body">
                        <div class="price">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Iaculis sit enim nullamius pellentesque eleifend. Lorem 
                            ipsum dolor sit amet, consectetur adipiscing elit. Iaculius 
                            varius pellentesque eleifend. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elIaculis sit enim nullam pretium 
                            ridiculus aenean sed. Sed morbi elit massa ut metus varius 
                            pellentesque eleifend. 
                        </div>
                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        О враче
                    </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div class="accordion-body">
                        <div class="about-doctor">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Iaculi nim nullamius pellentesque eleifend. Lorem ipsum 
                                dolor sit amet, consectetur adipiscing elit. Iaculius 
                                varius pellentesque eleifend. Lorem ipsum dolor sit amet, 
                                consectetur adipiscing elIaculis sit enim nullam pretium 
                                ridiculus aenean sed. Sed morbi elit massa ut metus varius 
                                pellentesque
                        </div>
                    </div>
                    </div> 
                </div>
            </div>
            </div>
            <div class="col-12">
                <div class="reviews-title">
                    <span id="title"> ОТЗЫВЫ</span>
                    <span id="count"> 23 </span>
                </div>
            </div>
            <review></review>
            <review></review>
            <review></review>
            <review></review>
            <div class="col-12">
                <button type="button" class="btn btn-primary" id="doc-show-more">Показать больше</button>
            </div>
        </div>
    </div>
</section>

</template>

<script>
import DoctorCard from '@/components/DoctorCard.vue'
import MedServices from '@/components/MedServices.vue'
import Review    from '@/components/Review.vue'
export default {
    name: 'DoctorProfile',
    components: {
        DoctorCard,
        MedServices,
        Review
    }
}
</script>

<style lang="scss" >
#count{
    color: $color-text-catalog;
}
#doc-show-more{
    width: 100%;
    background-color: $doc-clinic-color;
}
.doc{
    margin-top: $margin-xl;
    &__ad{
        width: 100%;
        height: 294px;
        background: chocolate;
        border-radius: $main-border-radius;
    }
    &__media{
        width: 100%;
        max-width: 100%;
        min-height: 300px;
        height: auto;
    }
}
.accordion-item{
    border-radius: $main-border-radius;
    margin-top: $margin-xl;
    border: none;
    letter-spacing: $title-letter-spascing;
    color: $description-font-color;
}

.accordion-button{
    font-weight: $font-weigth-md;
}
.accordion-button:focus{
    border-color: unset;
    outline: 0;
    box-shadow: none;
    border-radius: $main-border-radius;
}
.accordion-button:not(.collapsed){
    color: $main-text-color;
    background-color: unset;
    box-shadow: none;
}
.accordion-button::after{
    background-image: url("~@/assets/fonts/arrow.svg")
}

.accordion-button:not(.collapsed)::after{
    background-image: url("~@/assets/fonts/arrow.svg")
}
.services-item{
    width: 80%;
    padding: $padding-lg-1 $padding-xl;
    margin-top: $margin-md_1;
    background: $main-bg-color;
    border: 1px solid rgba(18, 17, 39, 0.2);
    border-radius: $main-border-radius;    
}
.about-doctor{
    width: 60%;
}
.reviews-title{
    background-color: $main-bg-color;
    padding: $padding-md $padding-lg-1;
    font-weight: $font-weigth-md;
    border-radius: $main-border-radius;
}
.media-frame{
    width: 100%;
    height: 400px;
}

@media screen and (max-width: 992px){
    .media-frame {
        height: 350px;
    }
}
@media screen and (max-width: 576px){
    .media-frame {
        height: 250px;
    }
    .accordion-body{
        padding: $padding-md;
    }
    .services-item{
        width: 90%;
        padding: $padding-sm $padding-md;
        margin-top: $margin-sm;
    }
    .price{
        width: 85%;
    }
    .about-doctor{
        width: 85%;
    }
    .accordion-button{
        padding: 0.5rem 0.9rem;
    }
}
</style>