<template>
    <div class="filter">
        <div class="row gy-3">
            <div class="col-sm-6">
                <div class="filter__select-wrap">
                    <div class="filter__select-body ">
                        <select id="selector" class="filter__select" name="select"> 
                            <option value="value1">Терапевт</option>
                            <option value="value2" selected>Аллерголог</option>
                            <option value="value3">Травмотолог</option>
                            <option value="value1">Терапевт</option>
                            <option value="value2" selected>Аллерголог</option>
                            <option value="value3">Травмотолог</option>
                            <option value="value1">Терапевт</option>
                            <option value="value2" selected>Аллерголог</option>
                            <option value="value3">Травмотолог</option>
                            <option value="value1">Терапевт</option>
                            <option value="value2" selected>Аллерголог</option>
                            <option value="value3">Травмотолог</option>     
                        </select>
                        <div class="filter__select-font">

                        </div>
                    </div>
 
                </div>     
            </div>
            <div class="col-sm-3 mobile-hide">
                <div class="d-grid">
                        <button class="btn btn-primary" type="button">По цене</button>
                </div>
            </div>
            <div class="col-sm-3 mobile-hide">
                <div class="d-grid">
                        <button class="btn btn-primary" type="button">По рейтингу</button>
                </div>
            </div>
            <div class="col-12">
                <div class="checkbox-wrap">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="homeVisit">
                        <label class="form-check-label" for="homeVisit">
                            Выезд на дом
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="aroundСlock">
                        <label class="form-check-label" for="aroundСlock">
                            Круглосуточно
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="childish">
                        <label class="form-check-label" for="aroundСlock">
                            Детский
                        </label>
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
.filter{
    background: $main-bg-color;
    padding: $padding-xl;
    border-radius: $main-border-radius;
    &__select-wrap{
        padding: $padding-sm $padding-md;
        background: $main-bg-color;
        border: 1px solid rgba(18, 17, 39, 0.2);
        box-sizing: border-box;
        border-radius: $sub-border-radius;
        display: flex;
    }
    &__select-body{
        flex: 0 0 100%;
        display: flex;
        position: relative;
    }
    &__select{
        width: 100%;
        border: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        font-size: $font-size-md_3;
        color: rgba(18, 17, 39, 0.6);
    }
    &__select-font{
        background-image: url(/img/arrow.314ffd53.svg);
        background-repeat: no-repeat;
        transition: transform 0.2s ease-in-out;
        width: 1.35rem;
        height: 1.35rem;
        background-size: 1rem;
        background-position: center;
        transform: rotate(-180deg);
        position: absolute;
        cursor: default;
	    pointer-events: none;
        right: 0;
        top: 3%;
    }
    &__select:focus-visible{
        outline:none;
    }
    &__select::after{
        color: #e02b2b!important;
    }

}
#dropdownMenuLink{
    width: 100%;
    text-align: left;
    background: $main-bg-color;
    border: 1px solid rgba(18, 17, 39, 0.2);
    box-sizing: border-box;
    border-radius: $sub-border-radius;
}
.btn-primary{
    background-color: $doc-clinic-color;
    border-color: $doc-clinic-color;
    border-radius: $main-border-radius;
}
.dropdown-menu{
    width: 100%;
}
.checkbox-wrap{
    display: flex;
}
.form-check{
    background: #FFFFFF;
    border: 1px solid rgba(18, 17, 39, 0.2);
    border-radius: $main-border-radius;
    padding: $padding-sm $padding-md;
    margin-right: $margin-md_1;
    color: $description-font-color;
}
.form-check .form-check-input {
    margin-left: 0;
}
.form-check-label{
    margin-left: $margin-md_1;
}

@media screen and(max-width: 576px){
    .filter{
        padding: $padding-md;
    }
    .checkbox-wrap{
        flex-wrap: wrap;
        justify-content: start;
    }
    .form-check{
        margin-bottom: $margin-sm;
        margin-right: $margin-sm;
        font-size: $font-size-sm;
    }
    .form-check-label{
        margin-left: $margin-sm;
    }
}
</style>