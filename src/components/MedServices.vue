<template>
  <div class="col-12">
    <div class="services">
      <div class="services__title border-ctn">
        <h3>Услуги</h3>
        <span>Какие услуги оказывает специлист?</span>
      </div>
      <div class="services__list border-ctn">
        <div class="services__consultation">
          <h3>Консультация:</h3>
          <span>Первичный прием</span>
          <span>Первичный прием</span>
        </div>
        <hr />
        <div class="services__all">
          <h3>Все услуги:</h3>
          <span>Лечение аллергии</span>
          <span>Лечение аллергии</span>
          <span>Лечение аллергии</span>
          <span>Лечение аллергии</span>
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
.services{
    &__title{
        padding: 1rem;
        span{
            text-decoration-line: underline;
            color: rgba(0, 0, 0, 0.6);
        }
    }
    &__list{
        margin-top: 1rem;
        padding: 1rem;
    }
    &__consultation{
        display: flex;
        flex-direction: column;
        span{
            color: rgba(0, 0, 0, 0.6);
        }
    }
    &__all{
        display: flex;
        flex-direction: column;
        span{
            text-decoration-line: underline;
            color: rgba(0, 0, 0, 0.6);
        }
    }
}
</style>