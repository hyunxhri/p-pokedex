<script>
import LeftBar from '@/components/LeftBar.vue'

export default {
    components: {
        LeftBar
    }
}
</script>

<template lang="">
    <LeftBar/>
        <section class="register-container">
            <img class="register-container__img" src="../assets/imgs/pokeball-login-register.png">
            <form class="register-container__form">
                <input class="register-container__form--input" type="text" name="username" placeholder="Username">
                <select class="register-container__form--select" id="genre" name="genre">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <input class="register-container__form--input" type="password" name="password" placeholder="Password">
                <input class="register-container__form--input" type="password" name="confirm-password" placeholder="Confirm password">
                <button class="register-container__form--button">Register</button>
                <p class="register-container__form--text">Already have an account? <router-link to="/">Log in</router-link></p>
            </form>
        </section>
</template>

<style lang="css">
    .register-container {
        width: 86vw;
        background: #FF321D;
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position:relative;

        && .register-container__img {
            width: 30vw;
            opacity:30%;
            position:absolute;
            z-index:0;
        }

        && .register-container__form {
            display:flex;
            flex-direction: column;
            align-items: center;
            z-index:1;

            && .register-container__form--input {
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

            & .register-container__form--button, .register-container__form--select {
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

            & .register-container__form--text {
                font-family: 'Kameron';
                font-size: 1.2em;
                margin: 1vh 0;

                & a {
                    color: #000;
                    text-decoration: none;
                    font-style: italic;
                }
            }

            && .register-container__form--select{
                text-align:center;
                color: #000;
                border: 1px solid #000;
                background: #D9D9D9;
            }
        }
    }
</style>