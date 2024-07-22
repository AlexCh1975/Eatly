<template>
    <div class="questions">
        <details class="questions__details">
            <summary class="questions__summary">
                <h4 class="details__title">{{ question.title }}</h4>
                <svg class="details__svg" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                <circle cx="15.7452" cy="15.3179" r="14.5023" fill="#6C5FBC" stroke="#6C5FBC" stroke-width="1.11556"/>
                <rect x="10.1675" y="15.3184" width="10.5978" height="1.11556" fill="white"/>
                <rect x="14.9087" y="21.1748" width="10.5978" height="1.11556" transform="rotate(-90 14.9087 21.1748)" fill="white"/>
                </svg>
            </summary>
            <p class="details__text">
                {{ question.answer }}
            </p>
        </details>
    </div>
</template>

<script>

export default {
  name: 'QuestionsComp',
  props: ['question'],
  components: {
  },
  data(){
    return {
    }
  },
 
}
</script>

<style lang="scss" scoped>
.questions{
    &__details{
        padding: 35px 13px 15px;
        box-sizing: border-box;
        width: 100%;
        border-bottom: 1px solid #ADADAD;
    }

    &__summary{
        display: flex;
        justify-content: space-between;
    }
} 
.details{

    &__title{
        color: #323142;
        font-family: Poppins;
        font-size: 23.417px;
        font-style: normal;
        font-weight: 600;
        line-height: 59.24px; /* 252.982% */
    }

    &__text{
        color: #323142;
        font-family: Poppins;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal; 
        padding-top: 15px; 
    }
}
</style>