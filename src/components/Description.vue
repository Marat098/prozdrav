<template>
    <div class="description">
        <div class="collapse-wrap">
            <div class="collapse show" id="collapseExample">
                <div class="description-body">
                    <span>{{description}}</span>
                </div>
            </div>
            <div>
                <a 
                id="descriptionToggle"
                class="btn " 
                data-bs-toggle="collapse" 
                href="#collapseExample" 
                role="button" 
                aria-expanded="false" 
                aria-controls="collapseExample">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        description: String
    },
}
</script>
<style lang="scss" scoped>
#descriptionToggle{
    background-image: url(/img/arrow.314ffd53.svg);
    background-repeat: no-repeat;
    transition: transform .2s ease-in-out;
    width: 1.35rem;
    height: 1.35rem;
    background-size: 1.25rem;
    background-position: center;
}
#descriptionToggle:not(.collapsed){
    transform: rotate(-180deg);
}
#descriptionToggle:focus{
    box-shadow: unset;
}
.collapse-wrap{
    margin-top: $margin-xl;
    padding: $padding-xl;
    border-radius: $main-border-radius;
    background: $main-bg-color;
    display: flex;
    justify-content: flex-end;
}
.description-body{
    width: 80%;
    font-weight: $font-weigth-sm;
    font-size: $font-size-md_3;
    line-height: $description-line-height;
    letter-spacing: -0.005em;
    color: rgba(18, 17, 39, 0.6);
}
</style>