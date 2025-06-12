<script setup>
import Calc from '../components/Calc.vue'
</script>

<template>
  <div class="con">
    <h1>Calculator</h1>
    <div class="calc-con">
      <Calc />
    </div>
  </div>
</template>

<style lang="scss">
.con {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;

  h1 {
    margin: 0;
    text-align: center;
    background: var(--blue);
    font-size: 3.5rem;
    padding-bottom: 0.2rem;
    font-family: Itim;
  }

  .calc-con {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
}
</style>
