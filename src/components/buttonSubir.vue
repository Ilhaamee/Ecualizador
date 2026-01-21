<script setup>
  const emit = defineEmits(['click'])
</script>

<template>
  <button class="btnsubir" @click="emit('click')">▲</button>
</template>

<style>
.btnsubir{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 1px solid #999;
    cursor: pointer;
    font-size: 10px;
    color: #666;
}

.btnsubir:hover{
    background-color: lightpink;
}

.btnsubir:active {
    box-shadow: 0 2px 4px black;
}
</style>
