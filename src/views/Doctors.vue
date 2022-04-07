<template>
    <section>
        <Filter></Filter>
        <SubTitle title="Аллергологи в Алматы"></SubTitle>
        <Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis sit enim nullamius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculius varius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elIaculis sit enim nullam pretium ridiculus aenean sed. Sed morbi elit massa ut metus varius pellentesque eleifend. "></Description>
    </section>
    <section>
        <div class="doc-list">
            <div class="row" >
                <div class="col-12 col-lg-8">
                    <div class="row">
                        <Doctor-card></Doctor-card>
                        <Doctor-card></Doctor-card>
                        <Doctor-card></Doctor-card>
                        <Doctor-card></Doctor-card>
                        <Doctor-card></Doctor-card>
                    </div>
                </div>
                <div class="col-lg-4 mobile-hide">
                    <div class="doc-list__ad"></div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <SeoText></SeoText>
    </section>
</template>
<script>
import DoctorCard from '@/components/DoctorCard.vue'
import Filter from '@/components/Filter.vue'
import SubTitle from '@/components/SubTitle.vue'
import Description from '@/components/Description.vue'
import SeoText from '@/components/SeoText.vue'
export default {
    name: 'Doctors',
    components: {
        DoctorCard,
        Filter,
        SubTitle,
        Description,
        SeoText
    }
}
</script>
<style lang="scss">

.doc-list{
    &__ad{
        margin-top: 20px;
        width: 100%;
        height: 330px;
        background: #C1C1C1;
        border-radius: 10px;
    }
}


</style>
