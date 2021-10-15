<template>
  <div class="page">
    <van-button type="primary" round @click="genQuiz">生成试题</van-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { randomCalc } from '../../util/alpha'
import { request } from '../../util/index'
const { post } = request

const state = reactive({
  list: []
})

const genQuiz = () => {
  const origin = randomCalc(10, 3)
  post({
    url: '/api/updateQuiz',
    data: {
      origin
    }
  }).then(res => {
    console.log(res)
  })
}
</script>