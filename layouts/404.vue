<template>
  <div class="container">
    <center>
      <p v-if="error.statusCode === 404" class = "error-info-text">404 - Страница не найдена</p>
      <p v-else class = "error-info-text">Ошибка</p>
      <NuxtLink to="/" class = "go-to-main">Перейти на главную</NuxtLink>
    </center>
  </div>
</template>


<script>
export default {
    head () {
      return {
        bodyAttrs: {
          class: 'body-error'
        }
      }
    },
  props: ['error']
}
</script>

<style scoped>

.body-error {
  background-color: #fff!important;
}

.error-info-text {
  color: #000!important;
}

.go-to-main {
  text-decoration: underline;
  color: #000;
}

</style>