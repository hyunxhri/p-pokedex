<script>
import LeftBar from '@/components/LeftBar.vue'
import RightButtons from '@/components/RightButtons.vue'
import fetchRandomPokemon from '@/services/fetchRandomPokemon'
import { RouterLink } from 'vue-router'

export default {
    components: {
    LeftBar,
    RightButtons,
    RouterLink
},
    data(){
        return{
            isButtonDisabled: true,
            pokemon: null
        }
    },
    methods: {
        async fetchNewPokemon() {
            try {
                this.pokemon = await fetchRandomPokemon()
            } catch (error) {
                console.error('Error fetching random Pokemon:', error)
            }
        }
    },
    async mounted() {
        await this.fetchNewPokemon()
        console.log(this.pokemon)
    }
}
</script>
<template>
    <LeftBar/>
    <article class="screen">
        <section class="screen__capture-pokemon">
            <img class="screen__img" :src="pokemon ? this.pokemon.img : '#' ">
            <div class="screen__text-buttons">
                <p class="screen__text-buttons--text">
                    {{ pokemon ? this.pokemon.name : 'Loading...' }} savage just appear! <br/>
                </p>
                <button class="screen__text-buttons--button">Capture</button>
                <button class="screen__text-buttons--button" @click="fetchNewPokemon">Search other</button>
            </div>
        </section>
        <div class="screen__buttons">
            <RouterLink to="/pokedex">
                <button class="screen__buttons--button">Pokedex</button>
            </RouterLink>
            <RouterLink to="/profile">
                <button class="screen__buttons--button">Profile</button>
            </RouterLink>
        </div>
    </article>
    <RightButtons :is-disabled="isButtonDisabled"/>
</template>

<style lang="css">
    .screen {
        width: 69vw;
        border: 5vh solid #FF321D;
        display: flex;
        flex-direction: column;
        align-items: center;

        & .screen__capture-pokemon{
            background: #416E6D;
            width: 58vw;
            margin-top: 4vh;
            height: 60vh;
            display: flex;
            align-items: center;
            flex-direction: column;

            & .screen__img{
                width: 40dvh;
                height: 40vh;
                margin:0 auto;
            }


            & .screen__text-buttons {
                background-color: rgba(255, 255, 255, 0.3);
                border:2px solid #fff;
                border-radius:15px;
                padding: 0 5vw;

                & .screen__text-buttons--text{
                font-size: 1.8em;
                text-align: center;
                font-family: 'Kameron';
                color: #000;
                margin-top: 2vh;
                }

                & .screen__text-buttons--button{
                    width:20vw;
                }

            }
        }

        & .screen__buttons{
            margin-top: auto;
        }

        & .screen__buttons--button, .screen__text-buttons--button{
                width: 25vw;
                padding: 0.5vw;
                border: none;
                margin: 15px 7px;
                border-radius: 12px;
                background-color: #D9D9D9;
                color: #000;
                font-size: 1.5em;
                text-transform:uppercase;
                font-family: 'Kameron';
                cursor: pointer;
            }
    }

    @media screen and (max-width: 935px){
        .screen {

            & .screen__capture-pokemon {

                & .screen__text-buttons{
                    padding: 0;

                    & .screen__text-buttons--button{
                        margin: 15px 0vw;
                        width: 27vw;
                    }
                }
            }
        }


    }


</style>