<template>
  <div>
    <p>Interceptor Here</p>
    <form @submit.prevent="register">
      <label for="username">{{ $t('message.enterUserName') }}</label>
      <input v-model="username" type="text" placeholder="Enter Username" name="username"><br>
      <label for="password">{{ $t('message.enterPassword') }}</label>
      <input v-model="password" type="password" placeholder="Enter Password" name="password"/><br>
      <button>{{ $t('message.register') }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
axios.interceptors.request.use(
(config) => {
  const token = window.localStorage.getItem('authToken');
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
(error) => {
  console.log(error);
}
);

export default {
  name: 'RegistrationForm',
  data() {
    return {
      username: '',
      password: '',
      token: '',
      res:''
    };
  },
  methods: {
      async register(){
          this.res = await axios.get('https://dummyjson.com/auth/me', {
          username: this.username,  
          password: this.password   
        })
          .then(response=>console.log(response.data))
          .catch(err=>console.error(err));
      }
  }
};
</script>