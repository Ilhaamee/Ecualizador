<script setup>
import ranges from './components/ranges.vue'
import casete from './components/casete.vue'
</script>

<template>
  <div class="app">
    <div class="mainEqualizer">
      <ranges frequency="32"/>
      <ranges frequency="64"/>
      <ranges frequency="125"/>
      <ranges frequency="250"/>
      <ranges frequency="500"/>
      <ranges frequency="1k"/>
      <ranges frequency="2k"/>
      <ranges frequency="4k"/>
      <ranges frequency="8k"/>
      <ranges frequency="16k"/>
    </div>
    <div class="mainCasete">
      <casete/>
    </div>
  </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body {
    background: linear-gradient(to bottom right,beige, white);
}

#app {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
}

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    border-radius: 30px;
    box-shadow: 0 10px 30px black;
    background: linear-gradient(to bottom right,gray, white); 
    padding: 40px 50px;
}

.mainEqualizer {
  display: flex;
  gap: 20px;
}

.mainCasete {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
}
</style>
