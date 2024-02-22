<script>
import LeftBar from '@/components/LeftBar.vue'
import RightButtons from '@/components/RightButtons.vue'
import fetchPokemonById from '@/services/fetchPokemonById'
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      pokemonId: null,
      pokemon: null,
    }
  },
  created() {
    this.pokemonId = parseInt(this.$route.params.id)
    this.fetchPokemon()
  },
  methods: {
    fetchPokemon() {
      fetchPokemonById(this.pokemonId)
        .then(response => {
          this.pokemon = response
          console.log(this.pokemon)
        })
        .catch(error => {
          console.error('Error fetching Pokemon:', error)
        })
    },
    fetchNextPage() {
      if (this.pokemonId < 500) {
        this.pokemonId++
      } else {
        this.pokemonId = 1
      }
      this.$router.push({ path: `/pokedex/${this.pokemonId}` })
      this.fetchPokemon()
    },
    fetchPrevPage() {
      if (this.pokemonId > 1) {
        this.pokemonId--
      } else {
        this.pokemonId = 500
      }
      this.$router.push({ path: `/pokedex/${this.pokemonId}` })
      this.fetchPokemon()
    },
  },
  components: { LeftBar, RightButtons },
}
</script>

<template>
    <LeftBar />
    <article class="screen">
      <div class="screen__background">
        <section class="screen__infoPokemon">
          <h2 class="screen__pokemonId">{{ pokemonId }}</h2>
          <h1 class="screen__pokemonName">{{ pokemon ? this.pokemon.name : '' }}</h1>
          <img class="screen__img" :src="pokemon ? this.pokemon.img : '@/assets/imgs/bulbasaur.png' " alt="pokemon_img">
          <ul class="screen__typeList">
            <li class="screen__typeList--type">{{ pokemon ? this.pokemon.type : '' }}</li>
            <li v-if="pokemon ? this.pokemon.type2 : ''" class="screen__typeList--type">{{ this.pokemon.type2 }}</li>
          </ul>
          <button class="screen__shinyButton" @click="changeImgToShiny">Shiny</button>
        </section>

        <ul class="screen__stadistics">
          <li class="screen__stadistics--li">Hp {{ pokemon ? this.pokemon.hp : ''}}</li>
          <li class="screen__stadistics--li">Attack {{ pokemon ? this.pokemon.attack : ''}}</li>
          <li class="screen__stadistics--li">Defense {{ pokemon ? this.pokemon.defense : ''}}</li>
          <li class="screen__stadistics--li">S-Attack {{ pokemon ? this.pokemon.sattack : ''}}</li>
          <li class="screen__stadistics--li">S-Defense {{ pokemon ? this.pokemon.sdefense : ''}}</li>
          <li class="screen__stadistics--li">Speed {{ pokemon ? this.pokemon.speed : ''}}</li>
        </ul>
      </div>

      <div class="screen__buttons">
            <RouterLink to="/pokedex">
                <button class="screen__buttons--button">Pokedex</button>
            </RouterLink>
            <RouterLink to="/profile">
                <button class="screen__buttons--button">Profile</button>
            </RouterLink>
        </div>

    </article>
    <RightButtons @next-page="fetchNextPage" @prev-page="fetchPrevPage" />
</template>

<style lang="css" scoped>
    .screen {
        width: 69vw;
        border: 5vh solid #FF321D;
        padding: 2vw;

        & .screen__background{
          width:100%;
          height:90%;
          background-color: #416E6D;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          

          & .screen__pokemonId, .screen__pokemonName {
              text-align: center;
              display: inline-block;
              font-size:1em;
              color:white;
              margin:.5vw;
          }
        }

        & .screen__buttons{
            width: 53vw;
            margin: 0 auto;
        }

        & .screen__buttons--button{
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

</style>

  