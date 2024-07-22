<template>
    <button class="btnViewAll">View All</button>
</template>

<script>
export default {
  name: 'BtnViewAll',
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .btnViewAll {
    color: var(--Dark-Grey, #ACADB9);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 45.184px;
    /* 225.921% */
    letter-spacing: -0.1px;
    position: relative;
    // margin-left: 1135px;
    &::after {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='4' viewBox='0 0 19 4' fill='none'%3e%3cpath d='M2 1.90234H17.8041' stroke='%23ACADB9' stroke-width='2.25773' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
      position: absolute;
      top: -5px;
      left: 88px;
    }

    &::before {
      content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='11' height='19' viewBox='0 0 11 19' fill='none'%3e%3cpath d='M1.90234 2L9.80441 9.90206L1.90234 17.8041' stroke='%23ACADB9' stroke-width='2.25773' stroke-linecap='round' stroke-linejoin='round'/%3e%3c/svg%3e");
      position: absolute;
      top: 2px;
      left: 99px;
    }
}
</style>