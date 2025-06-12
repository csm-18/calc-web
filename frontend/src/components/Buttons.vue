<script setup></script>

<template>
  <div class="con">
    <div class="btn-row">
      <button id="clear" class="btn">C</button>
      <button class="btn">(</button>
      <button class="btn">)</button>
      <button class="btn operator">/</button>
    </div>

    <div class="btn-row">
      <button class="btn">7</button>
      <button class="btn">8</button>
      <button class="btn">9</button>
      <button class="btn operator">*</button>
    </div>
    <div class="btn-row">
      <button class="btn">4</button>
      <button class="btn">5</button>
      <button class="btn">6</button>
      <button class="btn operator">-</button>
    </div>
    <div class="btn-row">
      <button class="btn">1</button>
      <button class="btn">2</button>
      <button class="btn">3</button>
      <button class="btn operator">+</button>
    </div>
    <div class="btn-row">
      <button class="btn">0</button>
      <button class="btn operator">%</button>
      <button class="btn">.</button>
      <button id="equals" class="btn operator">=</button>
    </div>
  </div>
</template>

<style scoped>
.con {
  padding-top: 0.2rem;

  display: grid;

  grid-template-rows: 20% 20% 20% 20% 20%;

  .btn-row {
    display: flex;
    .operator {
      background: #e6effb;
      color: #4a78cc;
    }

    #equals {
      background: #6d9bff;
      color: #ffff;
    }
  }

  button {
    flex: 1;
    margin: 0.1rem;
    font-size: 2.8rem;
    border-width: 0.1;
    border-radius: 100px;

    background: #ffff;
    color: #333;
  }
}
</style>
