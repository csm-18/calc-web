<script setup></script>

<template>
  <div class="con"><input id="input" type="text" /></div>
</template>

<style scoped>
@media only screen and (max-width: 600px) {
  .con {
    display: flex;
    flex-direction: column;
    background: yellow;

    #input {
      text-align: right;
      border: none;
      outline: none;
      font-size: 3rem;
      padding: 1rem;
      background: var(--white);
      color: var(--charcoal);

      overflow-x: auto;
      white-space: nowrap;
      touch-action: manipulation;
    }
  }
}
</style>
