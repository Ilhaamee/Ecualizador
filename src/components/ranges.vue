<script setup>
import { ref } from 'vue'
import buttonSubir from './buttonSubir.vue'
import buttonBajar from './buttonBajar.vue'

const props = defineProps({
    frequency: String
})

const value = ref(50);
const max = 100;
const min = 0;

function subir() {
    if (value.value < max) {
        value.value++
        value.value += 5;
    }else{
        value.value = max;
        console.log("No puedes subir mas");
    }
}

function bajar() {
    if (value.value > min) {
        value.value--
        value.value -= 5;
    }else{
        value.value = min;
        console.log("No puedes bajar mas");
    }
}
</script>

<template>
    <div class="container">
        <buttonSubir @click="subir"/>
        <div class="wrapper">
            <div class="line"></div>
            <input type="range" v-model="value" min="0" max="100"class="slider">
        </div>
        <buttonBajar @click="bajar"/>
        <span class="frequency">{{ frequency }}</span>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.wrapper {
    position: relative;
    width: 8px;
    height: 220px;
}

.line {
    position: absolute;
    width: 4px;
    height: 100%;
    left: 2px;
    background: black;
    border-radius: 2px;
}

.slider {
    position: absolute;
    width: 220px;
    top: 106px;
    left: -106px;
    transform: rotate(-90deg);
    background: transparent;
    cursor: pointer;
}

.slider::-webkit-slider-track {
    height: 4px;
    background: transparent;
}

.slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background: gray;
}

.frequency {
    font-size: 10px;
    color: #333;
}
</style>
