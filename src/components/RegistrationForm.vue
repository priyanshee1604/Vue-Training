<template>
    <h3><p>Register Here</p></h3>
    <form @submit.prevent="consoleOutput">
        <label for="username">Enter Username: </label>
        <input v-model="username" type="text" placeholder="Enter UserName" name="username"><br>
        <label for="email">Enter Email: </label>
        <input v-model="email" type="email" placeholder="Enter Email" name="email"/><br>
        <label for="password">Enter Password: </label>
        <input type="password" placeholder="Enter Password" name="password"/><br>
        <button>Register</button>
        <br><br>
        <p><b>Your UserName is: {{ username }}.</b></p>
        <p><b>Your Email Address is: {{ email }}.</b></p>
    </form>
</template>

<script>
export default{
    name: 'RegistrationForm',
    data(){
        return{
            username: '',
            email:''
        }
    },
    methods:{
        consoleOutput(){
            console.log(this.username);
            console.log(this.email);
        }
    }
}
</script>


