<template>
    <div class="filter-wrap border-ctn">
        <button class="filter-wrap__buttton btn nohover" id="date">
            Дата 
            <img
                class="icon-arrow"
                src="fonts\down-arrow (1) 5.svg"
                alt=""
            />
        </button>
        <button class="filter-wrap__buttton btn nohover" id="rating">
            Рейтинг
            <img
                class="icon-arrow"
                src="fonts\down-arrow (1) 5.svg"
                alt=""
            />
        </button>
    </div>
</template>
<script>

export default {
    name: "DateRatingFilter",
    data() {
        return {}
    },
    mounted(){
    }
}
</script>
<style lang="scss" scoped>
.filter-wrap{
    color: #414141;
    opacity: 0.6;
    display: flex;
    &__buttton{
        display: flex;
        align-items: center;
        align-self: center;
        
    } 

}
.btn.nohover:focus{
    outline: 0!important;
    box-shadow: none!important;
}
.icon-arrow-wrap{
    align-self: center
}
.icon-arrow{
    margin-left: 10px;
    width: 12px;
    height: 12px;
}
</style>