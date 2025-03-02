<template>
  <div id="app">
    <HeaderComponent/>
    <router-view></router-view>
    <!-- <HomeView/> -->
    <!-- <MenuView/> -->
    <!-- <MenuDetailsView/> -->
    <!-- <SingUpView/> -->
    <!-- <SingRightComp/> -->
    <!-- <RestauransCard/> -->
    <!-- <nav>
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view/> -->
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
// import MenuDetailsView from '@/views/MenuDetailsView.vue';
// import SingUpView from '@/views/SingUpView.vue';
// import RestauransCard from '@/components/RestaurantsCard.vue';
// import HomeView from '@/views/HomeView.vue';
// import MenuView fcomponentsrom '@/views/MenuView.vue';
// import SingRightComp from '@/components/SingRightComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    // HomeView,
    FooterComponent,
    // MenuView,
    // MenuDetailsView,
    // SingUpView,
    // SingRightComp,
    // RestauransCard
  }
  
}
</script>


<style scoped lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}

</style>
