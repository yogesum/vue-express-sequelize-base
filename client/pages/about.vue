<template>
  <h1>Hello {{ name }}!</h1>
</template>

<script>
export default {
  async asyncData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({})
      }, 1000)
    })
  },
  data: () => ({ name: 'about' }),
}
</script>
