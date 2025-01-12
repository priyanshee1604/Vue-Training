<template>
    <h3><p>Login Here</p></h3>
    <form @submit.prevent="consoleOutput">
        <label for="username">Enter Username: </label>
        <input v-model="username" type="text" placeholder="Enter UserName" name="username"><br>
        <label for="password">Enter Password: </label>
        <input type="password" placeholder="Enter Password" name="password"/><br>
        <button>Login</button>
        <br><br>
        <p><b>Your UserName is: {{ username }}.</b></p>
    </form>
</template>

<script>
export default{
    name: 'LoginForm',
    data(){
        return{
            username: '',
        }
    },
    methods:{
        consoleOutput(){
            console.log(this.username);
        }
    }
}
</script>