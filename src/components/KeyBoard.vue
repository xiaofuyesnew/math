<template>
  <div class="keyboard">
    <div class="key" @click="press('1')">1</div>
    <div class="key" @click="press('2')">2</div>
    <div class="key" @click="press('3')">3</div>
    <div class="key" @click="press('4')">4</div>
    <div class="key" @click="press('5')">5</div>
    <div class="key" @click="press('6')">6</div>
    <div class="key" @click="press('7')">7</div>
    <div class="key" @click="press('8')">8</div>
    <div class="key" @click="press('9')">9</div>
    <div class="key" @click="press('.')">.</div>
    <div class="key" @click="press('0')">0</div>
    <div class="key" @click="press">←</div>
  </div>
</template>


<script setup>

const emits = defineEmits(['press'])

const press = (value) => {
  console.log(value)
  emits('press', { value })
}
</script>

<style lang="scss">
.keyboard {
  display: flex;


  .key {
    
  }
}
</style>