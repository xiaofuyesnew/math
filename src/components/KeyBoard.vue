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
    <div class="key point" @click="press('.')" :class="{ show: point }">.</div>
    <div class="key" @click="press('0')">0</div>
    <div class="key" @click="press('')">←</div>
  </div>
</template>


<script setup>

const emits = defineEmits(['press'])

const props = defineProps({
  point: {
    type: Boolean,
    default: false
  }
})

const press = (value) => {
  if (value === '.') {
    if (props.point) {
      emits('press', value)
    } else {
      return false
    }
  } else {
    emits('press', value)
  }

}
</script>

<style lang="scss" scoped>
.keyboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 260px;
  padding: 20px 20px 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin: auto;

  .key {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;

    &.point {
      opacity: 0 !important;
    }

    &.show {
      opacity: 1 !important;
    }

    &:active {
      opacity: 0.5;
    }
  }
}
</style>