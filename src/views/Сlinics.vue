<template>
  <section>
    <Filter></Filter>
    <SubTitle title="Частные роддома в Алматы"></SubTitle>
    <Description description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis sit enim nullamius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculius varius pellentesque eleifend. Lorem ipsum dolor sit amet, consectetur adipiscing elIaculis sit enim nullam pretium ridiculus aenean sed. Sed morbi elit massa ut metus varius pellentesque eleifend. "></Description>
  </section>
  <section>
    <div class="clinic-list">
      <div class="col-12 col-lg-8">
        <div class="row">
            <Clinic-card></Clinic-card>
            <Clinic-card></Clinic-card>
            <Clinic-card></Clinic-card>
            <Clinic-card></Clinic-card>
            <Clinic-card></Clinic-card>
        </div>
      </div>
      <div class="col-lg-4 mobile-hide">
        <div class="doc-list__ad"></div>
        </div>
      </div>
  </section>
  <section>
    <SeoText></SeoText>
  </section>
</template>

<script>
import Filter from '@/components/Filter.vue'
import SubTitle from '@/components/SubTitle.vue'
import Description from '@/components/Description.vue'
import ClinicCard from '@/components/ClinicCard.vue'
import SeoText from '@/components/SeoText.vue'
export default {
  name: 'Clinics',
  components: {
    Filter,
    SubTitle,
    Description,
    ClinicCard,
    SeoText
  }
}
</script>
<style lang="scss" scoped>
.clinic-list{
 
}
</style>
