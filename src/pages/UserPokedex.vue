<script>
import LeftBar from '@/components/LeftBar.vue'
import RightButtons from '@/components/RightButtons.vue'
import fetchPokemons from '@/services/fetchPokemons'

export default {
    data() {
        return {
            pokemons: [],
            currentPage: 0
        }
    }, 
    async mounted() {
        await this.fetchAllPokemons()
    },
    components: {
        LeftBar,
        RightButtons,
    }, methods: {
        async fetchAllPokemons(page = this.currentPage) {
            try {
                const response = await fetchPokemons(page)
                this.pokemons = response.content
                console.log(this.pokemons)
            } catch (error) {
                console.error('Error fetching random Pokemon:', error)
            }
        },
        async fetchNextPage() {
            this.currentPage++
            await this.fetchAllPokemons()
        },
        async fetchPrevPage() {
            if (this.currentPage > 1) {
                this.currentPage--
                await this.fetchAllPokemons()
            }
        },
        infoPokemon(id) {
            console.log(id)
            this.$router.push({ path: `/pokedex/${id}` })
        },
        printPokemonName(pokemon) {
            if(pokemon.name.length >=10){
                return `${pokemon.name.slice(0,5)}...`
            } else{
                return pokemon.name
            }
        }
    }
}
</script>
<template>
    <LeftBar/>
    <article class="screen">
        <ul class="screen__list">
            <li v-for="pokemon in pokemons" :key="pokemon.pokemonId" class="screen__list--element" @click="infoPokemon(pokemon.pokemonId)">
                    <img class="screen__list--img" :src="pokemon.img" :alt="pokemon.name">
                    <p class="screen__list--name">{{ printPokemonName(pokemon) }}</p>
            </li>
        </ul>
    </article>
    <RightButtons @next-page="fetchNextPage" @prev-page="fetchPrevPage"/>
</template>

<style lang="css" scoped>
    .screen {
        width: 69vw;
        border: 5vh solid #FF321D;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & .screen__list {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            list-style: none;
            padding: 0;

            & .screen__list--element {
                width: 15vw;
                display: flex;
                flex-direction: row;
                align-items: center;
                background-color: #D9D9D9;
                margin: .5vh;
                box-shadow: inset 0 0 10px #FF321D;
                text-transform: capitalize;
                border-radius: 5px;
                cursor: pointer;

                & .screen__list--img {
                    width: 4vw;
                    height: 4vw;
                    display: inline;
                }

                & .screen__list--name {
                    font-size: 2vw;
                    margin: 0 1vw;
                    display: inline;
                }
            }
        }
    }

    @media screen and (max-width: 425px){
        .screen {
            width: 100vw;
            position:relative;

            & .screen__list {
                height: 66vh;
                position: absolute;
                top: 2vw;
                overflow: scroll;

                & .screen__list--element{
                width: 40vw;
                height: 3.7vh;

                    & .screen__list--name {
                        font-size: 1em;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 320px){
        .screen {

            & .screen__list {

                & .screen__list--element{
                width: 38vw;
                }
            }
        }
    }
</style>