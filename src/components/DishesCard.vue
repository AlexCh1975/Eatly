<template>
    <div class="card">
        <img class="card__img" 
            :src="require(`@/assets/images/imgDishes/FoodImage1.png`)" 
            :alt="card.title"
        />
        <div class="content">
            <h4 class="content__title">{{ card.title }}</h4>
            <div class="content__time-box">
                <p class="content__time">{{ card.time }}
                    <span class="content__time_span">min .</span>
                </p>
                <p class="content__balls">{{ card.balls }}</p>
            </div>
            <div class="content__add-box">
                <p class="content__price">
                    ${{ priceDollars }}
                    <span>.{{ priceCents }}</span>
                </p>
                <button class="content__add">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="41" viewBox="0 0 45 41" fill="none">
                    <rect x="0.199219" y="0.885254" width="43.8299" height="39.7208" rx="8.93034" fill="#323142"/>
                    <mask id="path-2-inside-1_1_16631" fill="white">
                        <path d="M29.0767 21.9628H22.7371V28.3916H20.2073V21.9628H13.8975V19.671H20.2073V13.2124H22.7371V19.671H29.0767V21.9628Z"/>
                    </mask>
                    <path d="M29.0767 21.9628H22.7371V28.3916H20.2073V21.9628H13.8975V19.671H20.2073V13.2124H22.7371V19.671H29.0767V21.9628Z" fill="black"/>
                    <path d="M29.0767 21.9628V26.0718H33.1858V21.9628H29.0767ZM22.7371 21.9628V17.8537H18.6281V21.9628H22.7371ZM22.7371 28.3916V32.5007H26.8462V28.3916H22.7371ZM20.2073 28.3916H16.0982V32.5007H20.2073V28.3916ZM20.2073 21.9628H24.3163V17.8537H20.2073V21.9628ZM13.8975 21.9628H9.78841V26.0718H13.8975V21.9628ZM13.8975 19.671V15.562H9.78841V19.671H13.8975ZM20.2073 19.671V23.7801H24.3163V19.671H20.2073ZM20.2073 13.2124V9.10335H16.0982V13.2124H20.2073ZM22.7371 13.2124H26.8462V9.10335H22.7371V13.2124ZM22.7371 19.671H18.6281V23.7801H22.7371V19.671ZM29.0767 19.671H33.1858V15.562H29.0767V19.671ZM29.0767 17.8537H22.7371V26.0718H29.0767V17.8537ZM18.6281 21.9628V28.3916H26.8462V21.9628H18.6281ZM22.7371 24.2826H20.2073V32.5007H22.7371V24.2826ZM24.3163 28.3916V21.9628H16.0982V28.3916H24.3163ZM20.2073 17.8537H13.8975V26.0718H20.2073V17.8537ZM18.0065 21.9628V19.671H9.78841V21.9628H18.0065ZM13.8975 23.7801H20.2073V15.562H13.8975V23.7801ZM24.3163 19.671V13.2124H16.0982V19.671H24.3163ZM20.2073 17.3215H22.7371V9.10335H20.2073V17.3215ZM18.6281 13.2124V19.671H26.8462V13.2124H18.6281ZM22.7371 23.7801H29.0767V15.562H22.7371V23.7801ZM24.9677 19.671V21.9628H33.1858V19.671H24.9677Z" fill="white" mask="url(#path-2-inside-1_1_16631)"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name: 'RestauransCard',
    props: ['card'],
    components: {

    }, 
    computed:{
        priceDollars(){
            return String(this.card.price).split('.')[0];
        },

        priceCents(){
            return String(this.card.price).split('.')[1];
        }
    }
  }
</script>

<style lang="scss" scoped>
.card{
    padding: 36px 24px 31px 15px;
    width: 224.628px;
    // height: 390.36px;
    display: flex;
    flex-direction: column;
    flex-shrink: 0; 
    border-radius: 34.581px;
    border: 1.441px solid var(--Colors-Gray-Gray-2, #F4F4F6);
    background: var(--Pure-White, #FFF);
    box-shadow: 6.848px 82.181px 41.091px 0px rgba(229, 229, 229, 0.70);
    position: relative;
    &:hover{
        border: 1.441px solid var(--Colors-Gray-Gray-2, #ebebee);
        box-shadow: 16.848px 42.181px 21.091px 5px rgba(203, 202, 202, 0.9);
        transform: translate(0, -2px);
        transition: all 0.3s;
    }

    &__img{
        margin-bottom: 23px;
    }

    &::before{
        content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='23' height='19' viewBox='0 0 23 19' fill='none'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.363281 6.66277C0.363281 3.27527 3.33513 0.666992 6.82344 0.666992C8.62159 0.666992 10.2039 1.51012 11.3393 2.60107C12.4747 1.51012 14.057 0.666992 15.8551 0.666992C19.3434 0.666992 22.3153 3.27527 22.3153 6.66277C22.3153 8.98325 21.3257 11.0239 19.9547 12.7488C18.5861 14.4707 16.7959 15.9322 15.0818 17.1197C14.427 17.5732 13.7647 17.9917 13.1585 18.3004C12.5893 18.5903 11.9348 18.8558 11.3393 18.8558C10.7438 18.8558 10.0893 18.5903 9.52007 18.3004C8.91388 17.9917 8.25153 17.5732 7.59682 17.1197C5.88271 15.9322 4.09245 14.4707 2.72384 12.7488C1.35285 11.0239 0.363281 8.98325 0.363281 6.66277ZM6.82344 2.54859C4.21523 2.54859 2.24488 4.4667 2.24488 6.66277C2.24488 8.42332 2.99224 10.0625 4.19684 11.578C5.40382 13.0966 7.02782 14.4365 8.66835 15.573C9.28912 16.003 9.87382 16.369 10.374 16.6237C10.9111 16.8972 11.2222 16.9742 11.3393 16.9742C11.4564 16.9742 11.7675 16.8972 12.3046 16.6237C12.8048 16.369 13.3895 16.003 14.0102 15.573C15.6508 14.4365 17.2748 13.0966 18.4817 11.578C19.6863 10.0625 20.4337 8.42332 20.4337 6.66277C20.4337 4.4667 18.4633 2.54859 15.8551 2.54859C14.3572 2.54859 12.9585 3.44351 12.0851 4.57937C11.907 4.81098 11.6314 4.94671 11.3393 4.94671C11.0471 4.94671 10.7715 4.81098 10.5935 4.57937C9.72011 3.44351 8.32139 2.54859 6.82344 2.54859Z' fill='%23323142'/%3e%3c/svg%3e");
        position: absolute;
        top: 23px;
        right: 21px;
    }
}

.content{
    margin-left: 8px;
    &__title{
        color: var(--BLACK, #323142);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Poppins;
        font-size: 23.054px;
        font-style: normal;
        font-weight: 600;
        line-height: 37.463px; /* 162.5% */
        margin-bottom: 1.6px;
    }

    &__time-box{
        margin-bottom: 11px;
        display: flex;
    }  
    
    &__add-box{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    &__time{
        color: var(--Grey, #8E97A6);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Manrope;
        font-size: 17.291px;
        font-style: normal;
        font-weight: 400;
        line-height: 23.054px; /* 133.333% */
        margin-right: 6px;
    }

    &__balls{
        position: relative;
        color: var(--Grey, #8E97A6);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Manrope;
        font-size: 17.291px;
        font-style: normal;
        font-weight: 400;
        line-height: 23.054px; /* 133.333% */ 
        margin-left: 26px;
        &::before{
            content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'%3e%3cpath d='M15.1087 19.118C16.6321 19.9519 17.9719 18.9412 17.6806 17.1725L17.1574 13.9968L19.3735 11.7478C20.606 10.497 20.0968 8.85801 18.3911 8.59997L15.3285 8.13664L13.9657 5.26157C13.2023 3.6511 11.5447 3.63378 10.7799 5.24729L9.41022 8.13664L6.34762 8.59997C4.64434 8.85765 4.131 10.4952 5.36524 11.7478L7.58136 13.9968L7.05821 17.1725C6.76725 18.9387 8.10449 19.9531 9.63011 19.118L12.3694 17.6186L15.1087 19.118Z' fill='%236C5FBC'/%3e%3cmask id='mask0_1_16615' style='mask-type:luminance' maskUnits='userSpaceOnUse' x='4' y='4' width='17' height='16'%3e%3cpath d='M15.1087 19.118C16.6321 19.9519 17.9719 18.9412 17.6806 17.1725L17.1574 13.9968L19.3735 11.7478C20.606 10.497 20.0968 8.85801 18.3911 8.59997L15.3285 8.13664L13.9657 5.26157C13.2023 3.6511 11.5447 3.63378 10.7799 5.24729L9.41022 8.13664L6.34762 8.59997C4.64434 8.85765 4.131 10.4952 5.36524 11.7478L7.58136 13.9968L7.05821 17.1725C6.76725 18.9387 8.10449 19.9531 9.63011 19.118L12.3694 17.6186L15.1087 19.118Z' fill='white'/%3e%3c/mask%3e%3cg mask='url(%23mask0_1_16615)'%3e%3c/g%3e%3c/svg%3e");
            position: absolute;
            top: 0;
            left: -26px;
        }
    }

    &__price{
        color: var(--BLACK, #323142);
        font-family: Manrope;
        font-size: 25.936px;
        font-style: normal;
        font-weight: 700;
        line-height: 40.345px; /* 155.556% */
    }
    &__price>span{
        color: var(--Grey, #8E97A6);
        font-size: 18.806px;
    }
}
</style>