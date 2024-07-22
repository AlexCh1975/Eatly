<template>
    <div class="card">
      <img class="card__img"
        :src="require(`@/assets/images/imgRestaurans/imgRest1.png`)" 
        :alt="card.title" 
      />
      <div class="content">
        <h3 class="content__title">{{ card.title }}</h3>
        <div class="content__box">
          <p class="content__time">
          {{ card.time }}<span class="content__time_span">min .</span>
        </p>
        <div class="balls">
          <svg class="balls__svg" width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.9993 21.687C17.7033 22.6197 19.2019 21.4893 18.876 19.511L18.2909 15.9589L20.7696 13.4433C22.1482 12.0443 21.5786 10.2111 19.6708 9.92245L16.2453 9.40421L14.7209 6.18842C13.867 4.38709 12.013 4.36771 11.1575 6.17244L9.62555 9.40421L6.19999 9.92245C4.29484 10.2107 3.72066 12.0423 5.10119 13.4433L7.57994 15.9589L6.99479 19.511C6.66935 21.4865 8.16507 22.621 9.87149 21.687L12.9354 20.01L15.9993 21.687Z" fill="#6C5FBC"/>
<mask id="mask0_1_16751" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="4" y="4" width="18" height="19">
<path d="M15.9993 21.687C17.7033 22.6197 19.2019 21.4893 18.876 19.511L18.2909 15.9589L20.7696 13.4433C22.1482 12.0443 21.5786 10.2111 19.6708 9.92245L16.2453 9.40421L14.7209 6.18842C13.867 4.38709 12.013 4.36771 11.1575 6.17244L9.62555 9.40421L6.19999 9.92245C4.29484 10.2107 3.72066 12.0423 5.10119 13.4433L7.57994 15.9589L6.99479 19.511C6.66935 21.4865 8.16507 22.621 9.87149 21.687L12.9354 20.01L15.9993 21.687Z" fill="white"/>
</mask>
<g mask="url(#mask0_1_16751)">
</g>
          </svg>
          <p class="content__text">{{ card.balls }}</p>
        </div>
        <svg class="content__bookmark" width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20.2242" cy="20.2525" r="20.0426" fill="#DBD9EE"/>
          <path d="M24.6161 10.8844C21.7146 10.3979 18.7366 10.3979 15.8351 10.8844C14.775 11.0621 13.9309 11.8759 13.7183 12.9311C12.7446 17.7651 12.6915 22.7393 13.5617 27.593L13.916 29.5691C14.0253 30.1785 14.7681 30.422 15.2169 29.9957L19.4936 25.9328C19.9038 25.5431 20.5474 25.5431 20.9577 25.9328L25.2343 29.9957C25.6831 30.422 26.426 30.1785 26.5352 29.5691L26.8895 27.593C27.7598 22.7393 27.7066 17.7651 26.7329 12.9311C26.5204 11.8759 25.6762 11.0621 24.6161 10.8844Z" fill="#6C5FBC"/>
        </svg>
        </div>
      </div>
    </div>
  </template>
  
  <script>

  
  export default {
    name: 'RestauransCard',
    props: ['card'],
    components: {

    }
  }
  </script>
  
  <style lang="scss" scoped>
    .card{
      width: 396px;
      // height: 298px;
      display: flex;
      flex-direction: column;
      border-radius: 30.023px;
      border: 1.251px solid var(--Colors-Gray-Gray-2, #F4F4F6);
      background: var(--Pure-White, #FFF);
      box-shadow: 5.946px 71.348px 35.674px 0px rgba(229, 229, 229, 0.70);

      &__img{
        margin-bottom: 34px;
      }
    }

    .content{
      display: flex;
      flex-direction: column;
      // align-items: center;
      padding: 0 34px 18px;
      margin-bottom: 17px;

      &__title{
        color: var(--BLACK, #323142);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Poppins;
        font-size: 25.786px;
        font-style: normal;
        font-weight: 600;
        line-height: 41.903px; /* 162.5% */
        position: relative;
      }

      &__title::after{
        content: "Healthy";
        color: #DAA31A;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Poppins;
        font-size: 12.776px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        position: absolute;
        top: -19px;
        left: 0;
        border-radius: 5.4px;
        background: #F7EDD0;
        padding: 3.06px 8.21px 1.86px 8.64px;
      }

      &__box{
        display: flex;
        align-items: center;
      }

      &__time, &__time_span{
        color: var(--Grey, #8E97A6);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Manrope;
        font-size: 19.34px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.786px; /* 133.333% */
      }

      &__balls{
        color: var(--Grey, #8E97A6);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Manrope;
        font-size: 19.34px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.786px; /* 133.333% */
      }

      &__time_span{
        margin-right: 6px;
      }

      &__bookmark{
        margin-left: 156px;
      }

    }

    .balls{
      display: flex;
      gap: 2px;
      align-items: center;

      &__text{
        color: var(--Grey, #8E97A6);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Manrope;
        font-size: 19.34px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.786px; /* 133.333% */
        margin-top: 3px;
      }

      &__star{
        
      }
    }
  </style>
  