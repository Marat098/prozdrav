<template>
    <div class=" col-md-6 col-12">
        <div class="review-item">
            <div class="review-item__body">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim veli.
            </div>
            <div class="review-item__head">
                <div class="review-item__photo-wrap">
                    <img class="review-item__photo"  src="img\unsplash_WNoLnJo7tS8.png" alt="" width="54" height="54">
                </div>
                <div class="review-item__date-name">
                    <div class="review-item__name">
                        Дим Димосский
                    </div>
                    <div>
                        27 января 2020
                    </div>
                </div>
            </div>
            <div class="review-item__rating-wrap">
                <div class="review-item__rating">
                    <span>
                        Рейтинг: 7.5
                    </span>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import DateRatingFilter from '@/components/DateRatingFilter.vue'
export default {
    name: 'Reviews',
    components: {
        DateRatingFilter
    }
}
</script>
<style lang="scss" scoped>
.review-item{
    background-color: #FFFFFF;
    border-radius: 12px;
    padding: 20px;
    line-height: 160%;
    color: rgba(18, 17, 39, 0.56);
    display: flex;
    flex-wrap: wrap;
    &__body{
        width: 100%;
        margin-bottom: 10px;
    }
    &__head{
        display: flex;
        width: 50%;
    }
    &__photo-wrap{
        height: 54px;
        width: 54px;
        margin-right: 10px;
    }
    &__date-name{

    }
    &__name{
        line-height: 180%;
        color: #121127;
        font-weight: 600;
    }
    &__rating-wrap{
        width: 50%;
        display: flex;
        justify-content: end;
        align-items: center;
        
    }
    &__rating{
        padding: 5px 20px;
        border: 1px solid rgba(18, 17, 39, 0.2);
        border-radius: 5px;
        font-weight: 400;
        font-size: 20px;
        line-height: 100%;
        color: rgba(18, 17, 39, 0.7)
    }
}
</style>