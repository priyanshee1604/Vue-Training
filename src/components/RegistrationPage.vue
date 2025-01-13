<template>
  <div>
    <p>Register Here</p>
    <form @submit.prevent="register">
      <label for="username">{{ $t('message.enterUserName') }}</label>
      <input v-model="username" type="text" placeholder="Enter Username" name="username"><br>
      <label for="password">{{ $t('message.enterPassword') }}</label>
      <input v-model="password" type="password" placeholder="Enter Password" name="password"/><br>
      <p>{{ $t('message.yourTokenIs') }} {{ token }}</p>
      <button>{{ $t('message.register') }}</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

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
    async register() {
         this.res = await axios.post('https://dummyjson.com/auth/login', {
          username: this.username,  
          password: this.password   
        }).then(response=>{
          console.log(response.data);
        this.token = response.data.accessToken;
        localStorage.setItem('authToken', this.token);
        }).catch(error=> {
        console.error(error);
        alert('Error logging in');
      });
    }
  }
};
</script>
