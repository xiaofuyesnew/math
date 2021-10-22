<template>
  <div class="timer">{{ state.min }}分{{ state.time }}秒</div>
</template>

<script setup>

import { reactive, computed } from 'vue'

const props = defineProps({
  start: {
    type: Boolean,
    default: false
  }
})

const state = reactive({
  min: 0,
  time: '0.0',
  timer: 0
})

const count = () => {
  state.timer = setInterval(() => {
    state.time = (+state.time + 0.1).toFixed(1)
    if (state.time.split('.')[0] === '60') {
      state.time = '0.0'
      state.min++
    }
  }, 100)
}

const startTrick = computed(() => {
  console.log('computed', props.start)
  if (props.start) {
    count()
  } else {
    clearInterval(state.timer)
  }
  return props.start
})

</script>

<style lang="scss" scoped></style>