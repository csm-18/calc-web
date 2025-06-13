<script setup></script>

<template>
  <div class="buttons">
    <button>C</button>
    <button>(</button>
    <button>)</button>
    <button>/</button>

    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>*</button>

    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>-</button>

    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>+</button>

    <button>0</button>
    <button>%</button>
    <button>.</button>
    <button>=</button>
  </div>
</template>

<style scoped>
.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  button {
    width: 100%;
    font-size: 2rem;
    padding: 0.7rem;
    font-weight: bold;
  }
}
</style>
