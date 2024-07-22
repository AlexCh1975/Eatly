<template>
    <div class="menu-details">
        <div class="top center">
            <div class="top__card">
              <img 
                :src="require(`@/assets/images/chickenBig.png`)"
                alt="pic"
              />  
              <dic class="top__content">
                <h3 class="top__title">
                  The Chicken King
                </h3>
                <div class="top__balls-time">
                  <p class="top__time">{{ this.GET_RESTAURANS[0].time }}mim .</p>
                  <p class="top__balls">{{ this.GET_RESTAURANS[0].balls }}</p>
                </div>
                <svg class="top__svg" xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none">
                  <circle cx="30.8916" cy="30.8916" r="30.8916" fill="#DBD9EE"/>
                  <path d="M37.6606 16.452C33.1884 15.7022 28.5985 15.7022 24.1263 16.452C22.4925 16.7259 21.1913 17.9802 20.8637 19.6065C19.363 27.0572 19.2811 34.724 20.6224 42.205L21.1685 45.2508C21.3368 46.19 22.4818 46.5653 23.1735 45.9082L29.7651 39.6462C30.3974 39.0455 31.3895 39.0455 32.0218 39.6462L38.6134 45.9082C39.3051 46.5653 40.4501 46.19 40.6184 45.2508L41.1645 42.205C42.5058 34.724 42.4239 27.0572 40.9232 19.6065C40.5956 17.9802 39.2944 16.7259 37.6606 16.452Z" fill="#6C5FBC"/>
                </svg>
              </dic>        
            </div>
        </div>
        <section class="popular center">
            <h3 class="popular__title">Popular</h3>
            <div class="popular__container">
                <DishesCard
                    v-for="card in this.GET_DISHES" 
                    :key="card.id"
                    :card="card"
                />
            </div>
        </section>
        <section class="vegetables center">
            <h3 class="vegetables__title">Chicken Vegetebles</h3>
            <div class="vegetables__container">
              <DishesCard
                v-for="card in this.getVegetables" 
                :key="card.id"
                :card="card"
              />
            </div>
        </section> 
        <LineComp class="center"/>
        <section class="question center">
            <h2 class="question__title">
                Frequently Asked <br>
                    <span>Questions</span>
            </h2>
            <div class="question__container">
                <QuestionComp 
                    v-for="question in this.GET_QUESTIONS" 
                    :key="question.id"
                    :question="question"
                />
            </div>
        </section>
    </div>
</template>

<script>
// import RestauransCard from '@/components/RestaurantsCard.vue';
import DishesCard from '@/components/DishesCard.vue';
import QuestionComp from '@/components/QuestionComp.vue';
import LineComp from '@/components/LineComp.vue';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'MenuDatailsView',

  components: {
    // RestauransCard,
    LineComp,
    DishesCard,
    QuestionComp,
  },
  data(){
    return {
      vegetables: [],
    }
  },
  computed: {
    ...mapGetters(['GET_RESTAURANS', 'GET_DISHES', 'GET_QUESTIONS']),
    getVegetables(){
      return [this.GET_DISHES[0], this.GET_DISHES[1]];
    }
  },

  methods: {
    ...mapMutations(['SET_RESTAURANS', 'SET_DISHES','SET_QUESTIONS']),
    ...mapActions(['fetchRestaurans', 'feachDishes', 'feachQuestions']),
  },
  mounted() {
    this.fetchRestaurans();
    this.feachDishes();
    this.feachQuestions();
    this.vegetables.forEach(el => {
      console.log(el);
    })
  }
}
</script>

<style lang="scss" scoped>
.top{
  width: 100%;
  padding-top: 106px;
  padding-bottom: 148px;
  &__card{
    padding: 5px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    border: 1.593px solid var(--Colors-Gray-Gray-2, #F4F4F6);
    background: var(--Pure-White, #FFF);
    box-shadow: 7.572px 90.862px 45.431px 0px rgba(229, 229, 229, 0.70);
  }

  &__img{
    max-hieght: 378px;
    width: 100%;
    border-radius: 30px 30px 0px 0px;
    opacity: 0.1;
    background: var(--BLACK, #323142);
    object-fit: cover;
  }

  &__content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 31px 35px 46px;
  }

  &__title{
    color: var(--BLACK, #323142);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 53.364px; /* 133.41% */
  }

  &__balls-time{
    display: flex;
    color: var(--Grey, #8E97A6);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Manrope;
    font-size: 26.233px;
    font-style: normal;
    font-weight: 400;
    line-height: 34.977px; /* 133.333% */
  }

  &__svg{
    
  }
}

.popular{
  &__title{
    color: #323142;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 25.558px; /* 73.024% */
  }

  &__container{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 146px;
  }
}

.vegetables{
  &__title{
    color: #323142;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 25.558px; /* 73.024% */
    margin-bottom: 60px;
  }

  &__container{
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 152px;
  }
}

.question {
  margin-bottom: 145px;
}
</style>