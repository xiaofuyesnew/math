<template>
  <div class="page">
    <van-button type="primary" round @click="genQuiz">生成试题</van-button>
    <van-button type="primary" round @click="getQuizList">获取测试列表</van-button>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { randomCalc } from '../util/alpha'
import { request } from '../util/index'
const { post, get } = request

const state = reactive({
  list: []
})

const genQuiz = () => {
  const condition = {
    limit: 10,
    num: 10,
  }
  const origin = randomCalc(condition.limit, condition.num)
  post({
    url: '/api/updateQuiz',
    data: {
      condition,
      origin
    }
  }).then(res => {
    console.log(res)
  })
}

const getQuizList = () => {
  get({
    url: '/api/getQuizList',
  }).then(res => {
    console.log(res)
  })
}
</script>