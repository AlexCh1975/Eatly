<template>
    <div class="review">
        <div class="review__customer">
          <div class="review__img">
            <img :src="require(`@/assets/images/imgUser_1.png`)" />
          </div>
          <div class="contentUser">
            <div class="contentUser__name">{{ review.author }}</div>
            <div content="contentUser__withUs">{{ review.withUs }}</div>
          </div>
          <div class="reviews__icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="45" viewBox="0 0 59 45" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M36.797 44.2511C33.6916 38.2474 32.139 31.7262 32.139 24.6874C32.139 17.5452 34.0281 11.645 37.8062 6.98701C41.5844 2.32901 47.4586 0 55.429 0V9.78182C52.6342 9.78182 50.5898 10.4029 49.2959 11.645C48.002 12.8872 47.3551 15.2679 47.3551 18.7873V20.34H58.6896V44.2511H36.797ZM4.65799 44.2513C1.55267 38.2477 0 31.7264 0 24.6877C0 17.5454 1.88908 11.6452 5.66723 6.98723C9.44538 2.32923 15.3196 0.000219731 23.29 0.000219731V9.78204C20.4952 9.78204 18.4508 10.4031 17.157 11.6452C15.8631 12.8874 15.2161 15.2681 15.2161 18.7875V20.3402H26.5506V44.2513H4.65799Z" fill="#DADADA"/>
          </svg>
          </div>
        </div>
        <p class="review__text">{{ review.review }}</p>
        <div class="review__balls">
          <!-- <svg xmlns="http://www.w3.org/2000/svg" width="138" height="23" viewBox="0 0 138 23" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9508 0.294884L15.2326 7.26932L22.5688 8.38799C22.7587 8.41751 22.9162 8.55695 22.9754 8.7479C23.0345 8.93886 22.9851 9.14837 22.8478 9.28867L17.5403 14.7163L18.7934 22.3818C18.8264 22.5795 18.749 22.7796 18.5938 22.8977C18.4386 23.0158 18.2327 23.0315 18.0629 22.938L11.5007 19.3196L4.93864 22.9391C4.76888 23.0328 4.56286 23.0174 4.40761 22.8994C4.25235 22.7813 4.17494 22.5811 4.20807 22.3834L5.46118 14.7163L0.152187 9.28867C0.0148778 9.14837 -0.0345498 8.93886 0.0246073 8.7479C0.0837645 8.55695 0.241294 8.41751 0.431213 8.38799L7.7674 7.26932L11.0507 0.294884C11.1343 0.114543 11.3091 0 11.5007 0C11.6924 0 11.8672 0.114543 11.9508 0.294884Z" fill="#F59E0B"/>
        </svg> -->
            <StarComp class="review__stars"/>
        </div>
    </div>
</template>

<script>

import StarComp from '@/components/StarComp.vue';

export default {
  name: 'ReviewComp',
  props: ['review'],
  components: {
    StarComp,
  },
  computed: {
   
  },
}
</script>

<style lang="scss" scoped>
.review{
  display: flex;
  flex-direction: column;
  width: 528px;
  // height: 346px;
  border-radius: 20.116px;
  padding: 38px 46px;
  border: 1px solid #323142;
  // opacity: .2;
  // background: var(--Black-Color, #323142);
  // filter: blur(92.19711303710938px);

  &__customer{
    display: grid;
    grid-template-columns: 100px auto 60px;
    grid-template-rows: 60px;
    margin-bottom: 35px;
  }

  &__text{
    color: #969696;
    text-align: justify;
    font-family: Poppins;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 26.117px; /* 145.094% */
    margin-bottom: 39px;
  }

  &__img>img{
    border-radius: 100%;
  }

  &__balls{
    display: flex;
    gap: 5px;
  }
}

.contentUser{
  padding-top: 10px;
  &__name{
    color: #030314;
    font-family: Poppins;
    font-size: 20.893px;
    font-style: normal;
    font-weight: 500;
    line-height: 31.34px; /* 150% */
  }

  &__withUs{
    color: #5E5D5D;
    font-family: Quicksand;
    font-size: 16.715px;
    font-style: normal;
    font-weight: 500;
    line-height: 26.117px; /* 156.25% */
  }
}

.isActive{

}
</style>

