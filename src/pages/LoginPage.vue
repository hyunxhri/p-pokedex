<script>
import LeftBar from '@/components/LeftBar.vue'

export default {
    components: {
        LeftBar
    }
}
</script>
<template>
        <LeftBar/>
        <section class="login-container">
            <img class="login-container__img" src="../assets/imgs/pokeball-login-register.png">
            <form class="login-container__form">
                <input class="login-container__form--input" type="text" name="username" placeholder="Username">
                <input class="login-container__form--input" type="password" name="password" placeholder="Password">
                <button class="login-container__form--button">Login</button>
                <p class="login-container__form--text">Don't have an account? <router-link to="/register">Register</router-link></p>
            </form>
        </section>
</template>
<style lang="css">
    .login-container {
        width: 86vw;
        background: #FF321D;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position:relative;

        && .login-container__img {
            width: 30vw;
            opacity:30%;
            position:absolute;
            z-index:0;
        }

        && .login-container__form {
            display:flex;
            flex-direction: column;
            align-items: center;
            z-index:1;

            && .login-container__form--input {
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
            }

            & .login-container__form--button {
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
            }

            & .login-container__form--text {
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
</style>