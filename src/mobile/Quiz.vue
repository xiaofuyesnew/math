<template>
  <van-nav-bar title="口算测试" left-text="返回" left-arrow safe-area-inset-top fixed @click-left="back" />
</template>

<script setup>
import { Dialog } from 'vant'

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

</script>

<style lang="scss">
</style>