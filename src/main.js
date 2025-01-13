import { createApp } from 'vue'; 
import App from './App.vue';
import { createI18n } from 'vue-i18n'; 

const messages = {
  en: {
    message: {
      enterUserName: "Enter username",
      enterPassword: "Enter password",
      registerHere: "Register here",
      register: "Register",
      yourTokenIs: "Your token is",
    }
  },
  fr: {
    message: {
      enterUserName: "Entrez le nom d'utilisateur",
      enterPassword: "Entrez le mot de passe",
      registerHere: "Inscrivez-vous ici",
      register: "S'inscrire",
      yourTokenIs: "Votre jeton est",
    }
  }
};


const i18n = createI18n({
  locale: 'en',  
  messages,      
});

createApp(App)
  .use(i18n)       
  .mount('#app');  
