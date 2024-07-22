import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurans: [],
    dishes: [],
    orders: [],
    reviews: [],
    questions: [],
  },

  getters: {
    GET_RESTAURANS: (state) => state.restaurans,
    GET_DISHES: (state) => state.dishes,
    GET_ORDERS: (state) => state.orders,
    GET_REVIEWS: (state) => state.reviews,
    GET_QUESTIONS: (state) => state.questions,
  },

  mutations: {
    SET_RESTAURANS(state, restaurans){
      state.restaurans = restaurans;
    },
    SET_DISHES(state, dishes){
      state.dishes = dishes;
    },
    SET_ORDERS(state, orders){
      state.orders = orders;
    },
    SET_REVIEWS(state, reviews){
      state.reviews = reviews;
    },
    SET_QUESTIONS(state, questions){
      state.questions = questions;
    },
  },

  actions: {
    fetchRestaurans({commit}){
      const restaurans = [
        {id: 1, title: 'The Chicken King', time: 24, balls: 4.8, content: 'Healthy', imgUrl: 'imgRest1.png'},
        {id: 2, title: 'The Burger King', time: 24, balls: 4.9, content: 'Trending', imgUrl: 'imgRest2.png'},
        {id: 3, title: 'The Chicken King', time: 24, balls: 4.8, content: 'Healthy', imgUrl: 'imgRest1.png'},
      ];
      commit('SET_RESTAURANS', restaurans);
    },

    feachDishes({commit}){
      const dishes = [
        {id: 1, title: 'Chiken Hell', content: 'Healithy', time: 24, balls: 4.8, imgUrl: 'FoodImage1.png', price: 12.99},
        {id: 2, title: 'Swe Dish', content: 'Trending', time: 34, balls: 4.9, imgUrl: 'FoodImage2.png', price: 19.99},
        {id: 3, title: 'Swe Dish', content: 'Supreme', time: 34, balls: 4.9, imgUrl: 'FoodImage3.png', price: 19.99},
        {id: 4, title: 'Chiken Hell', content: 'Healithy', time: 24, balls: 4.8, imgUrl: 'FoodImage1.png', price: 12.99},
        {id: 5, title: 'Swe Dish', content: 'Trending', time: 34, balls: 4.9, imgUrl: 'FoodImage2.png', price: 19.99},
      ];
      commit('SET_DISHES', dishes);
    },

    feachOrders({commit}){
      const orders = [
        {id: 1, title: 'Chicken Hell', stateEl: 'On The Way', time: '3:09PM', imgUrl: 'FoodImage1.png'},
        {id: 2, title: 'Swe Dish', stateEl: 'Delivered', time: 'Yesterday', imgUrl: 'FoodImage2.png'},
        {id: 2, title: 'Fish Hell Veg', stateEl: 'Concelled', time: 'Yesterday', imgUrl: 'FoodImage3.png'},
      ];
      commit('SET_ORDERS', orders);
    },

    feachReviews({commit}){
      const reviews = [
        {id: 1, author: 'Alexander R.', withUs: '01 Year With Us', imgUser: 'imgUser_1.png', review: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”', balls: 4},
        {id: 1, author: 'Pavel P.', withUs: '01 Year With Us', imgUser: 'imgUser_1.png', review: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”', balls: 3},
        {id: 1, author: 'Grigoriy J.', withUs: '01 Year With Us', imgUser: 'imgUser_1.png', review: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”', balls: 5},
        // {id: 1, author: 'Alexander R.', withUs: '01 Year With Us', imgUser: 'imgUser_1.png', review: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”', balls: 4},
        // {id: 1, author: 'Pavel P.', withUs: '01 Year With Us', imgUser: 'imgUser_1.png', review: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”', balls: 3},
        // {id: 1, author: 'Grigoriy J.', withUs: '01 Year With Us', imgUser: 'imgUser_1.png', review: '“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”', balls: 5},
      ];
      commit('SET_REVIEWS', reviews);
    },

    feachQuestions({commit}){
      const questions = [
        {id: 1, title: 'How long does delivery take?', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quod fugit vero rem quo totam tempore delectus sapiente officiis doloribus!'},
        {id: 2, title: 'How Does It Work ?', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quod fugit vero rem quo totam tempore delectus sapiente officiis doloribus!'},
        {id: 3, title: 'How does your food delivery service work?', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quod fugit vero rem quo totam tempore delectus sapiente officiis doloribus!'},
        {id: 4, title: 'What payment options do you accept?', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quod fugit vero rem quo totam tempore delectus sapiente officiis doloribus!'},
        {id: 5, title: 'Do you offer discounts or promotions?', answer: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat quod fugit vero rem quo totam tempore delectus sapiente officiis doloribus!'},
      ];
      commit('SET_QUESTIONS', questions);
    }
  },

  modules: {
  }
})
