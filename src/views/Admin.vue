<template>
    <div class="dash-content">
        <!-- <div class="overview">
            <div class="title">
                <i class="uil uil-tachometer-fast-alt"></i>
                <span class="text">Dashboard</span>
            </div>

            <div class="boxes">
                <div class="box box1">
                    <i class="uil uil-thumbs-up"></i>
                    <span class="text">Total Likes</span>
                    <span class="number">50,120</span>
                </div>
                <div class="box box2">
                    <i class="uil uil-comments"></i>
                    <span class="text">Comments</span>
                    <span class="number">20,120</span>
                </div>
                <div class="box box3">
                    <i class="uil uil-share"></i>
                    <span class="text">Total Share</span>
                    <span class="number">10,120</span>
                </div>
            </div>
        </div>

        <div class="activity">
            <div class="title">
                <i class="uil uil-clock-three"></i>
                <span class="text">Recent Activity</span>
            </div>

            <div class="activity-data">
                <div class="data names">
                    <span class="data-title">Name</span>
                    <span class="data-list">Prem Shahi</span>
                    <span class="data-list">Deepa Chand</span>
                    <span class="data-list">Manisha Chand</span>
                    <span class="data-list">Pratima Shahi</span>
                    <span class="data-list">Man Shahi</span>
                    <span class="data-list">Ganesh Chand</span>
                    <span class="data-list">Bikash Chand</span>
                </div>
                <div class="data email">
                    <span class="data-title">Email</span>
                    <span class="data-list">premshahi@gmail.com</span>
                    <span class="data-list">deepachand@gmail.com</span>
                    <span class="data-list">prakashhai@gmail.com</span>
                    <span class="data-list">manishachand@gmail.com</span>
                    <span class="data-list">pratimashhai@gmail.com</span>
                    <span class="data-list">manshahi@gmail.com</span>
                    <span class="data-list">ganeshchand@gmail.com</span>
                </div>
                <div class="data joined">
                    <span class="data-title">Joined</span>
                    <span class="data-list">2022-02-12</span>
                    <span class="data-list">2022-02-12</span>
                    <span class="data-list">2022-02-13</span>
                    <span class="data-list">2022-02-13</span>
                    <span class="data-list">2022-02-14</span>
                    <span class="data-list">2022-02-14</span>
                    <span class="data-list">2022-02-15</span>
                </div>
                <div class="data type">
                    <span class="data-title">Type</span>
                    <span class="data-list">New</span>
                    <span class="data-list">Member</span>
                    <span class="data-list">Member</span>
                    <span class="data-list">New</span>
                    <span class="data-list">Member</span>
                    <span class="data-list">New</span>
                    <span class="data-list">Member</span>
                </div>
                <div class="data status">
                    <span class="data-title">Status</span>
                    <span class="data-list">Liked</span>
                    <span class="data-list">Liked</span>
                    <span class="data-list">Liked</span>
                    <span class="data-list">Liked</span>
                    <span class="data-list">Liked</span>
                    <span class="data-list">Liked</span>
                    <span class="data-list">Liked</span>
                </div>
            </div>
        </div> -->
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.dash-content{
    padding-top: 50px;
}
.dash-content .title{
    display: flex;
    align-items: center;
    margin: 60px 0 30px 0;
}
.dash-content .title i{
    position: relative;
    height: 35px;
    width: 35px;
    background-color: $--primary-color;
    border-radius: 6px;
    color: $--title-icon-color;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}
.dash-content .title .text{
    font-size: 24px;
    font-weight: 500;
    color: $--text-color;
    margin-left: 10px;
}
.dash-content .boxes{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.dash-content .boxes .box{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 12px;
    width: calc(100% / 3 - 15px);
    padding: 15px 20px;
    background-color: $--box1-color;
    transition: $--tran-05;
}
.boxes .box i{
    font-size: 35px;
    color: $--text-color;
}
.boxes .box .text{
    white-space: nowrap;
    font-size: 18px;
    font-weight: 500;
    color: $--text-color;
}
.boxes .box .number{
    font-size: 40px;
    font-weight: 500;
    color: $--text-color;
}
.boxes .box.box2{
    background-color: $--box2-color;
}
.boxes .box.box3{
    background-color: $--box3-color;
}
.dash-content .activity .activity-data{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}
.activity .activity-data{
    display: flex;
}
.activity-data .data{
    display: flex;
    flex-direction: column;
    margin: 0 15px;
}
.activity-data .data-title{
    font-size: 20px;
    font-weight: 500;
    color: $--text-color;
}
.activity-data .data .data-list{
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px;
    white-space: nowrap;
    color: $--text-color;
}
@media (max-width: 780px) {
    .dash-content .boxes .box{
        width: calc(100% / 2 - 15px);
        margin-top: 15px;
    }
}
@media (max-width: 560px) {
    .dash-content .boxes .box{
        width: 100% ;
    }
}
@media (max-width: 1000px){
    .activity .activity-data{
        overflow-X: scroll;
    }
}


</style>