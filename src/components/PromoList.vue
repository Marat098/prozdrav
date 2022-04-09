<template>
    <div class="promo-list">
        <slot></slot>
    </div>
</template>
<script>
import PromoCard from '@/components/PromoCard.vue'
export default {
    components:{
        PromoCard
    }
}
</script>
<style lang="scss" scoped>
.promo-list{
    display: flex;
    gap: $gap-xl;
    margin-top: $margin-xl;
}
@media screen and(max-width: 768px){
    .promo-list{
        overflow: scroll;
    }
}
</style>