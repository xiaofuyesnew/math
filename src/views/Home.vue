<template>
  <div class="w-screen h-screen overflow-x-hidden overflow-y-auto">
    <div class="w-full min-h-full">
      <div class="w-full flex flex-col items-center">
        <div>生成时间：{{ time }}</div>
        <input
          v-model="num"
          type="number"
        >
        <div
          v-for="(item, index) in list"
          :key="index"
          class="text-xl font-bold py-2"
        >
          {{ item }}
        </div>
        <div
          class="w-full h-[40px] text-white bg-black flex items-center justify-center"
          @click="generate"
        >
          生成题目
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { generateList } from '@/utils'
import dayjs from 'dayjs'
const list = ref([])

const time = ref('')

const num = ref(10)

const generate = () => {
  list.value = generateList(num.value)
  time.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
}

onMounted(() => {
  list.value = generateList(num.value)
  time.value = dayjs().format('YYYY-MM-DD HH:mm:ss')
})

</script>

