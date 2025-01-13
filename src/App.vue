
<template>
  <ChangeLocale/>
  <RegistrationPage/>
  <Interceptor/>
</template>

<script>

import Interceptor from './components/Interceptor.vue';
import RegistrationPage from './components/RegistrationPage.vue';
import ChangeLocale from './components/ChangeLocale.vue';
export default {
  name: 'App',
  components: {
    RegistrationPage,
    Interceptor,
    ChangeLocale
  }
}
</script>

<style>

</style>
