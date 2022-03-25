<template>
    <div class="seo-text">
        <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    SEO ТЕКСТ
                </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis sit enim nullamius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculius varius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elIaculis sit enim nullam pretium ridiculus aenean sed. Sed morbi elit massa ut metus varius pellentesque eleifend. 
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    SEO ТЕКСТ
                </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis sit enim nullamius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculius varius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elIaculis sit enim nullam pretium ridiculus aenean sed. Sed morbi elit massa ut metus varius pellentesque eleifend. 
                </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    SEO ТЕКСТ
                </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis sit enim nullamius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculius varius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elIaculis sit enim nullam pretium ridiculus aenean sed. Sed morbi elit massa ut metus varius pellentesque eleifend. 
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
.seo-text{
    margin-top: 20px;
}
.accordion-item{
    border-radius: 10px;
    margin-top: 20px;
    border: none;
}

.accordion-button{
    font-weight: 500;
}
.accordion-button:focus{
    border-color: unset;
    outline: 0;
    box-shadow: none;
    border-radius: 10px;
}
.accordion-button:not(.collapsed){
    color: #121127;
    background-color: unset;
    box-shadow: none;
}
.accordion-button::after{
    background-image: url("~@/assets/fonts/arrow.svg")
}

.accordion-button:not(.collapsed)::after{
    background-image: url("~@/assets/fonts/arrow.svg")
}
</style>