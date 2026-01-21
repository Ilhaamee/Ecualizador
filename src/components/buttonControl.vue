<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faBackwardFast,
  faPlay,
  faForwardFast,
  faForwardStep,
  faStop,
  faEject
} from '@fortawesome/free-solid-svg-icons'

const emit = defineEmits(['fastrewind', 'play', 'fastforward', 'stop', 'next', 'eject'])
</script>

<template>
<button @click="emit('fastrewind')"> 
  <FontAwesomeIcon :icon="faBackwardFast" /> 
</button> 

<button @click="emit('play')">▶</button> 

<button @click="emit('fastforward')">
  <FontAwesomeIcon :icon="faForwardFast" /> 
</button> 

<button @click="emit('next')"> 
  <FontAwesomeIcon :icon="faForwardStep" /> 
</button> 

<button @click="emit('stop')"> 
  <FontAwesomeIcon :icon="faStop" /> 
</button> 

<button @click="emit('eject')"> 
  <FontAwesomeIcon :icon="faEject" /> 
</button> 
</template>

<style scoped>
button {
    padding: 15px 20px;
    font-size: 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 4px 6px black;
    transition: all 0.2s;
}

button:hover {
    box-shadow: 0 6px 8px black;
    background-color: lightpink;
}

button:active {
    box-shadow: 0 2px 4px black;
}
</style>