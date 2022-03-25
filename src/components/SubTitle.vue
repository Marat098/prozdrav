<template>
    <div class="sub-title">
        <span>{{title}}</span>
    </div>
</template>
<script>
export default {
    props: {
        title: String
    },
}
</script>
<style lang="scss" scoped>
.sub-title{
    width: 100%;
    margin-top: 20px;
    background-color: #FFFFFF;
    padding: 15px;
    font-weight: 700;
    font-size: 26px;
    line-height: 140%;
    color: #444BD3;
    border-radius: 10px;
}
</style>