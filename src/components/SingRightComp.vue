<template>
    <div class="sing-right">
        <div class="sing-right__img">
            <img 
                :src="require(`@/assets/images/FoodTop.png`)"
                alt="pic"
            />
            <div class="top-right__card">
                <OrdersCard class="top-right__card" :card="this.getOrder"/>
            </div>
            <div class="top-right__graph">
                <div class="top-right__graph_main">
                    <p class="top-right__graph_el">Main</p>
                    <p class="top-right__graph_el">Weekly</p>
                    <p class="top-right__graph_el">Monthly</p>
                    <p class="top-right__graph_el">Yearly</p>
                </div>
                <div class="top-right__graph_line">
                    <svg class="top-right__graph_svg" xmlns="http://www.w3.org/2000/svg" width="209" height="100" viewBox="0 0 209 100" fill="none">
                    <path d="M1.07422 83.6715C12.1442 83.6715 13.2155 98.0846 24.9997 98.0846C36.7839 98.0846 33.9271 57.1211 44.9972 57.1211C56.0672 57.1211 49.9965 22.6056 65.3517 22.6056C80.7069 22.6056 73.5649 57.1211 87.4917 57.1211C101.418 57.1211 99.2759 16.8297 108.203 16.8297C117.131 16.8297 114.631 40.8116 125.344 40.8116C136.057 40.8116 131.058 1.25586 142.485 1.25586C153.912 1.25586 152.84 18.5225 163.196 18.5225C173.552 18.5225 174.623 38.5359 188.907 38.5359C203.191 38.5359 194.264 60.8428 207.833 60.8428" stroke="#6C5FBC" stroke-width="1.98779" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div class="top-right__graph_day">
                    <p class="top-right__graph_item">2D</p>
                    <p class="top-right__graph_item">4D</p>
                    <p class="top-right__graph_item">5D</p>
                    <p class="top-right__graph_item">6D</p>
                    <p class="top-right__graph_item">7D</p>
                </div>
            </div>
        </div>
        <h3 class="sing-right__title">Find Foods With Love</h3>
        <p class="sing-right__text">
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes Including Asian, Chinese, Italians And Many More. Our Dashboard Helps You To Manage Orders And Money.
        </p>
        <div class="sing-right__pagination"></div>
    </div>
</template>

<script> 

import OrdersCard from '@/components/OrdersCard.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    name: 'SingRightComp',
    props: ['card'],
    components: {
      OrdersCard,
    },
    computed: {
    ...mapGetters(['GET_ORDERS']),
    getOrder(){
      return this.GET_ORDERS[0];
    }
  },
  
  methods: {
    ...mapMutations(['SET_ORDERS',]),
    ...mapActions(['feachOrders',]),
  },

  mounted() {
  
    this.feachOrders();
   
  }
}
</script>

<style lang="scss" scoped>
.sing-right{
    width: 570px;
    // flex: 0 0 44%;
    // position: relative;
    display: flex;
    flex-direction: column;
    // align-items: center;
    background: rgb(108, 95, 188);
    background-image: url('~@/assets/images/sign_opasity.png');
    padding-top: 303px;
    padding-bottom: 120px;

    &__card{
      position: absolute;
      top: -100px;
      right: -200px;
      z-index: 101;
    }

    &__img{
        width: 63%;
        height: 360px;
        margin-bottom: 78px;
        margin-left: 115px;
        position: relative;
    }

    &__title{
        color: rgb(255, 255, 255);
        font-family: Manrope;
        font-size: 40px;
        font-weight: 800;
        line-height: 110%;
        letter-spacing: 0%;
        text-align: center;
        margin-bottom: 20px;
    }

    &__text{
        max-width: 500px;
        margin-bottom: 32px;
        color: rgb(255, 255, 255);
        font-family: Manrope;
        font-size: 14px;
        font-weight: 500;
        line-height: 150%;
        letter-spacing: 0.2px;
        text-align: center;
    }

    &__pagination{
        width: 24px;
        height: 6px;
        border-radius: 50px;
        background: #FFF;
    }
}

.top-right{
  &__graph{
    position: absolute;
    bottom: -20px;
    left: -20px;
    z-index: 100;
    padding: 12px 0 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    filter: drop-shadow(13.407px -16.759px 27.932px rgba(0, 0, 0, 0.15));
    width: 157.29px;
    // height: 148.42px;
    flex-shrink: 0;
    border-radius: 15px;
    border: 0.278px solid var(--Greyscale-200, #EDF2F7);
    background: var(--Others-White, #FFF);
    box-shadow: 14.12px 18.827px 37.655px 0px rgba(26, 32, 44, 0.15);

    &_main{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5.48px;

    }
    &_el{
      color: var(--Gray-3, #828282);
      text-align: center;
      font-family: Poppins;
      font-size: 5.14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: 0.05px;
    }
    &_el:first-child{
      padding: 5px 9px;
      color: var(--Text-Light, #FFF);
      border-radius: 11px;
      background: #6C5FBC;
      font-size: 4.8px;
      line-height: 6.86px;
    }
    &_day{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 22.5px;

    }
    &_item{
      color: #828282;
      font-family: Roboto;
      font-size: 6.351px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    &_item:first-child{
      color: #151515;
      padding: 5.75px 6.97px 4.55px 9.21px;
      border-radius: 16.759px;
      background: rgba(231, 231, 231, 0.92);
    }
    &_line{
      position: relative;
      &::after{
        content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10' fill='none'%3e%3cpath d='M8.58326 4.94316C8.58326 7.05191 6.99247 8.64248 5.17234 8.64248C3.35221 8.64248 1.76143 7.05191 1.76143 4.94316C1.76143 2.83442 3.35221 1.24385 5.17234 1.24385C6.99247 1.24385 8.58326 2.83442 8.58326 4.94316Z' fill='%23C5BFED' stroke='%236C5FBC' stroke-width='2.22012'/%3e%3c/svg%3e");
        position: absolute;
        top: 15px;
        right: 30px;
        z-index: 101;
      }
      &::before{
        content: "$409";
        padding: 1.83px 5.15px 2.08px 5.5px;
        color: #FFF;
        font-family: Poppins;
        font-size: 5.55px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        border-radius: 16.759px;
        background: #6C5FBC;
        position: absolute;
        top: 5px;
        right: 10px;
        z-index: 101;
      }
    }
  }
}
</style>
