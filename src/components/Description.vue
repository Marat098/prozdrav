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
                class="btn collapsed" 
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
    margin-top: 20px;
    padding: 20px;
    border-radius: 10px;
    background: #FFFFFF;
    display: flex;
    justify-content: flex-end;
}
.description-body{
    width: 80%;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: -0.005em;
    color: rgba(18, 17, 39, 0.6);
}
</style>