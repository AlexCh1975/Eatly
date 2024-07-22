<template>
    <div class="ordersCard" :class="orderOnTheWay">
        <div class="ordersCard__box">
            <img class="ordersCard__img" 
                :src="require(`@/assets/images/imgDishes/FoodImage1.png`)"
                :alt="card.title"
            />
            <div class="content">
                <h4 class="content__title">{{ card.title }}</h4>
                <p class="content__state"
                    :class="orderStateClass">
                    {{ card.stateEl }}
                </p>
            </div>
        </div>
        <p class="ordersCard__time">{{ card.time }}</p>
    </div>
</template>

<script>
  export default {
    name: 'OrdersCard',
    props: ['card'],
    components: {

    },
    computed: {
        orderStateClass(){
            return this.card.stateEl.toLowerCase() === 'concelled' ? 'isConcelled' : 'isState';
        },

        orderOnTheWay(){
            return this.card.stateEl.toLowerCase() === 'on the way' ?
            'onTheWay' : 'onTheWayDisebled';
        }
    },
  }
</script>

<style lang="scss" scoped>
.ordersCard{
    padding: 6px 16px 9px 21px;
    max-width: 346px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__box{
        display: flex;
    }

    &__img{
        max-width: 72px;
        max-height: 73px;
        margin-right: 19px;
    }
    &__time{
        color: var(--Dark-Grey, #ACADB9);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Poppins;
        font-size: 13.044px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 18.262px */
        margin-bottom: -50px;
    }
}

.content{
    margin-top: 10px;

    &__title{
        color: var(--Black-Color, #323142);
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Poppins;
        font-size: 19.065px;
        font-style: normal;
        font-weight: 600;
        line-height: 140%; /* 26.69px */ 
        margin-bottom: 4px;
    }

    &__state{
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Poppins;
        font-size: 12.041px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 16.857px */
    }
}

.isState{
    color: var(--Black-Color, #323142);
}

.onTheWay{
    border-radius: 12.041px;
    background: var(--Full-White, #FFF);
    box-shadow: 0px 20.068px 30.102px 0px rgba(70, 70, 70, 0.10);
}

.onTheWayDisebled{
    box-shadow: 0px  rgba(0, 0, 0, 0.0);
}

.isConcelled{
    color: #F1534E;
}
</style>