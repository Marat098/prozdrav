<template>
    <div class="seo-text">
        <div class="accordion" id="seo-text-acc">
            <div class="accordion-item" v-for="(item, index) in items" :key = index>
                <h2 class="accordion-header" :id="item.idTag">
                <button 
                    class="accordion-button " 
                    type="button" 
                    data-bs-toggle="collapse"
                    :data-bs-target = "'#accordion-wrap_'+ index"
                    :aria-expanded='item.collapse'
                    :aria-controls = "'#accordion-wrap_'+ index"
                    :class='{"collapsed": !item.collapse}' >
                    {{item.title}}
                </button>
                </h2>
                <div :id = "'accordion-wrap_'+ index"   
                    class="accordion-collapse collapse" 
                    :aria-labelledby="item.idTag"
                    :class='{"show": item.collapse == true}'
                    >
                <div class="accordion-body">
                   {{item.description}}
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    // props: {
    //     items: Array
    // },
    data () {
        return {
            items: [
                {
                    idTag: `accordion_item_${Math.floor(Math.random() * (100000 - 10000 + 1) + 10000)}`,
                    title: "SEO ТЕКСТ", 
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                  Iaculis sit enim nullamius pellentesque eleifend. Lorem 
                                  ipsum dolor sit amet, consectetur adipiscing elit. Iaculius 
                                  varius pellentesque eleifend. Lorem ipsum dolor sit amet, 
                                  consectetur adipiscing elIaculis sit enim nullam pretium 
                                  ridiculus aenean sed. Sed morbi elit massa ut metus varius 
                                  pellentesque eleifend.`,
                    collapse: true
                },
                {
                    idTag: `accordion_item_${Math.floor(Math.random() * (100000 - 10000 + 1) + 10000)}`,
                    title: "SEO ТЕКСТ", 
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                  Iaculis sit enim nullamius pellentesque eleifend. Lorem 
                                  ipsum dolor sit amet, consectetur adipiscing elit. Iaculius 
                                  varius pellentesque eleifend. Lorem ipsum dolor sit amet, 
                                  consectetur adipiscing elIaculis sit enim nullam pretium 
                                  ridiculus aenean sed. Sed morbi elit massa ut metus varius 
                                  pellentesque eleifend.`,
                    collapsed: false
                },
                {
                    idTag: `accordion_item_${Math.floor(Math.random() * (100000 - 10000 + 1) + 10000)}`,
                    title: "SEO ТЕКСТ", 
                    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                  Iaculis sit enim nullamius pellentesque eleifend. Lorem 
                                  ipsum dolor sit amet, consectetur adipiscing elit. Iaculius 
                                  varius pellentesque eleifend. Lorem ipsum dolor sit amet, 
                                  consectetur adipiscing elIaculis sit enim nullam pretium 
                                  ridiculus aenean sed. Sed morbi elit massa ut metus varius 
                                  pellentesque eleifend.`,
                    collapsed: false
                },
            ]
        }
    },
    mounted () {
    }
    
    
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
@media screen and(max-width: 576px){
    .seo-text{
        margin-top:$margin-md_1;
    }
}
</style>