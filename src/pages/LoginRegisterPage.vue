<script>
import LeftBar from '@/components/LeftBar.vue'

export default {
    data(){
        return {
            username: '',
            password: '',
            isLoginPage: true
        }
    },
    components: {
        LeftBar
    },
    methods: {
    changeForm() {
        if(this.isLoginPage){
            this.isLoginPage = false
        } else {
            this.isLoginPage = true
        }
    }
  }
}
</script>
<template>
        <LeftBar/>
        <section class="login-register-container">
            <img class="login-register-container__img" src="../assets/imgs/pokeball-login-register.png">
            <form v-if="isLoginPage" class="login-register-container__form">
                <input class="login-register-container__form--input" type="text" name="username" placeholder="Username">
                <input class="login-register-container__form--input" type="password" name="password" placeholder="Password">
                <button class="login-register-container__form--button">Log in</button>
                <p class="login-register-container__form--text">Don't have an account? <a href="#" @click="changeForm">Register</a></p>
            </form>
            <form v-else class="login-register-container__form">
                <input class="login-register-container__form--input" type="text" name="username" placeholder="Username">
                <select class="login-register-container__form--select" id="genre" name="genre">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input class="login-register-container__form--input" type="password" name="password" placeholder="Password">
                <input class="login-register-container__form--input" type="password" name="confirm-password" placeholder="Confirm password">
                <button class="login-register-container__form--button">Register</button>
                <p class="login-register-container__form--text">Already have an account? <a href="#" @click="changeForm">Log in</a></p>
            </form>
        </section>
</template>
<style lang="css">
    .login-register-container {
        width: 86vw;
        background: #FF321D;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position:relative;

        & .login-register-container__img {
            width: 30vw;
            opacity:30%;
            position:absolute;
            z-index:0;
            transition: ease-in all .2s;

        }

        & .login-register-container__form {
            display:flex;
            flex-direction: column;
            align-items: center;
            z-index:1;
            
            & .login-register-container__form--input {
                font-family: 'Kameron';
                text-align: center;
                color:#000;
                width: 25vw;
                height: 7vh;
                margin: 1vh 0;
                border: 1px solid #000;
                background: #D9D9D9;
                border-radius: 5px;
                padding: 0 1vw;
                font-size: 1.2em;
                transition: ease-in all .2s;

            }

            & .login-register-container__form--button, .login-register-container__form--select {
                font-family: 'Kameron';
                color:#D9D9D9;
                width: 27vw;
                height: 8vh;
                margin: 1vh 0;
                border: 1px solid #D9D9D9;
                background: #000;
                border-radius: 5px;
                padding: 0 1vw;
                font-size: 1.2em;
                cursor: pointer;
                transition: ease-in all .2s;

            }

            & .login-register-container__form--select{
                text-align:center;
                color: #000;
                border: 1px solid #000;
                background: #D9D9D9;
            }

            & .login-register-container__form--text {
                font-family: 'Kameron';
                font-size: 1.2em;
                margin: 1vh 0;
                
                & a {
                    color: #000;
                    text-decoration: none;
                    font-style: italic;
                }
            }
        }
    }

    @media screen and (max-width: 920px){
        .login-register-container {
            & .login-register-container__img {
            width: 40vh;
            transition: ease-in all .5;

            }

            & .login-register-container__form {
                & .login-register-container__form--input {
                    width: 40vh;
                    transition: ease-in all .5;
                }

                & .login-register-container__form--button, .login-register-container__form--select {
                    width: 42vh;
                    transition: ease-in all .5;                    
                }
            }
        }

        .connection-bar {
            width:25vw;

            & .connection-bar__button {
                width: 12vw;
                height: 12vw;
                font-size: 8vw;
            }

            & .connection-bar__lights-decoration .light {
                width: 4vw;
                height: 2vw;
            }
        }
    }
</style>