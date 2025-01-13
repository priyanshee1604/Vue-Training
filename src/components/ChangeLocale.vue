<template>
    <p>{{ $t('message.enterUserName') }}</p>
    <select v-model="locale" @change="localeChange">
        <option value="en">English</option>
        <option value="fr">French</option>
    </select>
</template>

<script>
    export default{
        data(){
            return{
                locale:this.$i18n.locale
            }
        },
        methods:{
            localeChange(){
                this.$i18n.locale = this.locale
                // alert(`locale changed to: ${this.locale}`)
            }
        }
    }
</script>