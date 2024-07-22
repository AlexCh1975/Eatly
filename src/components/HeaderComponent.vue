<template>
  <div class="center">
    <header class="header">
      <LogoComp />
      <nav class="nav">
        <ul class="nav__ul">
            <router-link class="nav__item" to="/menu">Menu</router-link>
            <router-link class="nav__item" to="/blog">Blog</router-link>
            <router-link class="nav__item" to="/pricing">Pricing</router-link>
            <router-link class="nav__item" to="/contact">Contact</router-link>
        </ul>
      </nav>
      <div class="registration">
        <a href="#" class="registration__login">Login</a>
        <button class="registration__sign">Sign Up</button>
      </div>
    </header>
    <!-- <LogoComp />
    <div class="registration">
      <a href="#" class="registration__login">Login</a>
      <button class="registration__sign">Sign Up</button>
    </div> -->
  </div>
</template>

<script>
import LogoComp from '@/components/LogoComp.vue';

export default {
  name: 'HeaderComponent',
  components: {
    LogoComp,
  }
}
</script>

<style lang="scss">
    .header{
      height: 135px;
      // width: 1248px;
      border-bottom: 1px solid #CBCBCB;
      @extend %flex-center-y;
      justify-content: space-between;
      display: flex;
      padding-top: 20px;
    }

    .nav{
      margin-left: -290px;
      &__ul{
        display: flex;
        gap: 53.5px;
      }

      &__item{
        color: #606060;
        font-family: 'Inter', sans-serif;
        font-size: 17.829px;
        font-style: normal;
        font-weight: 500;
        line-height: 26.743px; /* 150% */
        text-transform: capitalize;
      }
    }

    .registration{
      @extend %flex-center-y;
  
      &__login{
        color: #606060;
        font-family: 'Inter', sans-serif;
        font-size: 17.829px;
        font-weight: 700;
        line-height: 26.743px; /* 150% */
        text-transform: capitalize;
        margin-right: 35.65px;
      }
      
      &__sign{
        color: #F9F9F9;
        font-family: 'Inter', sans-serif;
        font-size: 17.829px;
        font-weight: 700;
        font-style: normal;
        line-height: 26.743px; /* 150% */
        text-transform: capitalize;
        display: flex;
        padding: 17.829px 26.743px;
        align-items: flex-start;
        gap: 11.143px;
        border-radius: 17.829px;
        background: #6C5FBC;
      }
    }
</style>