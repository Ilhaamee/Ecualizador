<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <button class="btnbajar" @click="emit('click')">▼</button>
</template>

<style>
.btnbajar{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 10px;
    color: #666;
    border: 1px solid #999;
}

.btnbajar:hover{
    background-color: lightpink;
}

.btnbajar:active {
    box-shadow: 0 2px 4px black;
}
</style>
