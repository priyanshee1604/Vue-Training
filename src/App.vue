<template>
  <RegistrationPage/>
  <Interceptor/>
</template>

<script>

import Interceptor from './components/Interceptor.vue';
import RegistrationPage from './components/RegistrationPage.vue';
export default {
  name: 'App',
  components: {
    RegistrationPage,
    Interceptor
  }
}
</script>

<style>

</style>
