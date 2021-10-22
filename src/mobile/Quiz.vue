<template>
  <van-nav-bar title="口算测试" left-text="返回" left-arrow safe-area-inset-top @click-left="back" />
  <div class="top">
    <timer :start="state.start" />
    <div class="counter">{{ state.done }}/{{ state.quiz.length }}</div>
  </div>
  <div class="question">
    <div class="test">1+1=</div>
    <div class="block">{{ state.input }}</div>
  </div>
  <key-board @press="press" />
  <van-button type="primary" @click="toggle">{{ state.start ? '结束' : '开始' }}</van-button>
</template>

<script setup>
import keyBoard from '../components/KeyBoard.vue'
import timer from '../components/Timer.vue'
import { Dialog } from 'vant'
import { reactive } from 'vue'

const state = reactive({
  input: '',
  start: false,
  done: 0,
  quiz: [],
})

const back = () => {
  Dialog.confirm({
    title: '退出',
    message: '确定要退出吗？',
  })
    .then(() => {
      // on confirm
    })
}

const press = (e) => {
  console.log(e)

  if (e) {
    if (+state.input) {
      state.input += e
    } else {
      state.input = e
    }
  } else {
    if (state.input) {
      state.input = state.input.substring(0, state.input.length - 1)
    }
  }

}

const toggle = () => {
  state.start = !state.start
}

</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.question {
  display: flex;
  align-items: center;
  justify-content: center;

  .test {
    height: 100px;
    font-size: 64px;
    color: #333;
    display: flex;
    align-items: center;
  }

  .block {
    height: 64px;
    padding: 32px;
    border-radius: 10px;
    background-color: #ccc;
    margin-left: 20px;
    font-size: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>