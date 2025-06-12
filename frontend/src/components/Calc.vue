<script setup>
import Buttons from '../components/Buttons.vue'
</script>

<template>
  <div class="con">
    <input id="input" type="text" />
    <p id="result">6.0</p>
    <div class="backspace-btn-con">
      <button id="backspace-btn">
        <img id="backspace-btn-img" src="../assets/backspace.svg" alt="" />
      </button>
    </div>
    <Buttons id="btns" />
  </div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .con {
    display: flex;
    flex-direction: column;
    background: #4a78cc;

    #input {
      text-align: right;
      border: none;
      outline: none;
      font-size: 3rem;
      padding: 1rem;
      padding-bottom: 0;
      background: var(--white);
      color: var(--charcoal);
      caret-color: var(--blue);

      overflow-x: auto;
      white-space: nowrap;
      touch-action: manipulation;
    }

    #result {
      margin: 0;
      text-align: right;
      padding: 1rem;
      font-size: 2rem;
      background: var(--white);
      color: var(--charcoal);
    }

    .backspace-btn-con {
      display: flex;
      justify-content: flex-end;
      background: var(--white);
      color: var(--blue);
      border-bottom: solid;

      #backspace-btn {
        margin: 0;
        border: 0;
        background: var(--white);

        #backspace-btn-img {
          width: 3.5rem;
        }
      }
    }

    #btns {
      flex: 1;
    }
  }
}
</style>
