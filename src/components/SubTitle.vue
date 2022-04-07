<template>
    <div class="sub-title" v-bind:style="{color: textColor}">
        <span  >{{title}}</span>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        textColor: {
            type: String,
            default: '#444BD3'
        } ,
    },
    mounted (){
    }
}
</script>
<style lang="scss" scoped>
.sub-title{
    width: 100%;
    margin-top: $margin-xl;
    background-color: $main-bg-color;
    padding: $padding-lg-1;
    font-weight: $font-weigth-lg;
    font-size: $font-size-xxl-4;
    line-height: $line-height-1;
    // color: $doc-clinic-color;
    border-radius: $main-border-radius;
}
</style>