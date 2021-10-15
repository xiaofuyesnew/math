<template>
  <div class="page">222</div>
</template>

<script setup>
import { request } from '../../util/index'

const { post } = request

post({
  url: '/api/updateQuiz',
  data: {
    test: 1
  }
}).then(res => {
  console.log(res)
})

</script>