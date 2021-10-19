<template>
  <van-nav-bar title="口算测试" left-text="返回" left-arrow safe-area-inset-top @click-left="back" />
  <div class="question">
    <div class="test">1+1=</div>
    <div class="block">{{ state.input }}</div>
  </div>
  <key-board @press="press" />
</template>

<script setup>
import keyBoard from '../components/KeyBoard.vue'
import { Dialog } from 'vant'
import { reactive } from 'vue'

const state = reactive({
  input: ''
})


const back = () => {
  Dialog.confirm({
    title: '标题',
    message: '弹窗内容',
  })
    .then(() => {
      // on confirm
    })
    .catch(() => {
      // on cancel
    });
}

const press = (e) => {
  console.log(e)

  if (e) {
    state.input += e
  } else {
    if (state.input) {
      state.input = state.input.substring(0, state.input.length - 1)
    }
  }

}

</script>

<style lang="scss">
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