<template>
    <div class="filter">
        <div class="row gy-3">
            <div class="col-sm-6">
                <div class="dropdown">
                    <a class="btn  dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Ссылка выпадающего списка
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Действие</a></li>
                        <li><a class="dropdown-item" href="#">Другое действие</a></li>
                        <li><a class="dropdown-item" href="#">Что-то еще здесь</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="d-grid">
                        <button class="btn btn-primary" type="button">По цене</button>
                </div>
            </div>
            <div class="col-sm-3">
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
    background: white;
    padding: 20px;
    border-radius: 10px;
}
#dropdownMenuLink{
    width: 100%;
    text-align: left;
    background: #FFFFFF;
    border: 1px solid rgba(18, 17, 39, 0.2);
    box-sizing: border-box;
    border-radius: 5px;
}
.btn-primary{
    background-color: #444BD3;
    border-color: #444BD3;
    border-radius: 10px;
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
    border-radius: 10px;
    padding: 5px 10px;
    margin-right: 10px;
    color: rgba(18, 17, 39, 0.6);
}
.form-check .form-check-input {
    margin-left: 0;
}
.form-check-label{
    margin-left: 10px;
}
</style>