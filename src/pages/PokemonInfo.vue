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
      imgShiny : false,
    }
  },
  created() {
    this.pokemonId = parseInt(this.$route.params.id)
    this.fetchPokemon()
  },
  methods: {
    fetchPokemon() {
      this.imgShiny = false
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
    getPokemonTypeBackground() {
      if(this.pokemon) {
        return `background-color: var(--${this.pokemon.type})`
      }
    },
    getPokemonType2Background(){
      if(this.pokemon) {
        return `background-color: var(--${this.pokemon.type2})`
      }
    },
    changeImgToShiny(){
      this.imgShiny ? this.imgShiny = false : this.imgShiny = true
    }
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
          <h1 class="screen__pokemonName" :style="getPokemonTypeBackground()">{{ pokemon ? this.pokemon.name : '' }}</h1>
          <img v-if="pokemon" class="screen__img" :src="imgShiny ? this.pokemon.imgShiny : this.pokemon.img" alt="pokemon_img">
          <ul class="screen__typeList">
            <li class="screen__typeList--type" :class="{ 'fullWidth': pokemon && !pokemon.type2 }" :style="getPokemonTypeBackground()">{{ pokemon ? this.pokemon.type : '' }}</li>
            <li v-if="pokemon ? this.pokemon.type2 : ''" class="screen__typeList--type" :class="{ 'fullWidth': !pokemon.type2 }" :style="getPokemonType2Background()">{{ this.pokemon.type2 }}</li>
          </ul>
          <button class="screen__shinyButton" @click="changeImgToShiny">Shiny</button>
        </section>

        <ul class="screen__stadistics">
          <li class="screen__stadistics--li"><h3>Hp</h3> {{ pokemon ? this.pokemon.hp : ''}}</li>
          <li class="screen__stadistics--li"><h3>Attack</h3> {{ pokemon ? this.pokemon.attack : ''}}</li>
          <li class="screen__stadistics--li"><h3>Defense</h3> {{ pokemon ? this.pokemon.defense : ''}}</li>
          <li class="screen__stadistics--li"><h3>S-Attack</h3> {{ pokemon ? this.pokemon.sattack : ''}}</li>
          <li class="screen__stadistics--li"><h3>S-Defense</h3> {{ pokemon ? this.pokemon.sdefense : ''}}</li>
          <li class="screen__stadistics--li"><h3>Speed</h3> {{ pokemon ? this.pokemon.speed : ''}}</li>
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
          justify-content: space-evenly;
          
          & .screen__infoPokemon{
            width: 36vh;
            height: 90%;
            background:#07370F;
            padding:1vw;
            border-radius:10px;

            & .screen__pokemonId, .screen__pokemonName {
              text-align: left;
              font-family: "IBM Plex Mono";
              display: inline-block;
              font-size:1em;
            }

            & .screen__typeList{
              margin: 1vh 0;
              list-style: none;
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: row;

              & .screen__typeList--type{
                width: 49%;
                padding: .5vw;
                text-align: center;
                border-radius: 10px;
                display: inline;
                color: #fff;
                font-size: 1em;
                font-family: 'IBM Plex Mono';
                text-transform: uppercase;
                text-shadow: 0px 2px 2px rgba(0,0,0,.75);
              }
              
              & .fullWidth {
                width: 100%;
              }
            }

            & .screen__shinyButton {
              width: 100%;
              padding: 0.5vh;
              font-size: 2vw;
              text-transform: uppercase;
              font-family: 'Kameron';
              letter-spacing: 1px;
              border-radius: 10px;
              border: none;
              cursor: pointer;
            }

          & .screen__pokemonId {
            width: 35%;
            height: auto;
            padding: 2vh;
            background: #fff;
            color: #000;
            border-top-left-radius: 10px;
            clip-path: polygon(0% 100%, 50% 100%, 100% 0%, 0% 0%);
          }

          & .screen__pokemonName {
            height: auto;
            width: 83%;
            margin-left:-18%;
            padding: 2vh;
            text-transform: uppercase;
            text-align: right;
            color: #fff;
            border-top-right-radius: 10px;
            clip-path: polygon(0% 100%, 20% 0%, 100% 0%, 100% 100%, 0% 100%);
            text-shadow: 0px 2px 2px rgba(0,0,0,.75);
          }

          & .screen__img{
            background: white;
            margin: 0 auto;
            width: 100%;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
          }
        }

        & .screen__stadistics {
          width: 35vw;
          list-style: none;
          

          & .screen__stadistics--li {
            width: 45%;
            padding: 1vh;
            margin:1vh;
            background: #fff;
            color: #000;
            font-size: 1.5vw;
            display: inline-block;
            font-family: 'IBM Plex Mono';
            font-weight: 600;
            text-transform: uppercase;
            text-align: center;
            border-radius: 10px;
            box-shadow: 4px 4px 0px #FF321D;
            transition: .3s all ease-in-out;

            & h3 {
              background: #FF321D;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              font-size:1em;
            }
          }
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

    @media screen and (max-width: 933px){

      .screen {

        & .screen__buttons {
          width: 52vw;

          & .screen__buttons--button {
            width: 24vw;
          }
        }
      }
    }

    @media screen and (max-width: 699px){

    .screen {

      & .screen__buttons {
        width: 51vw;

        & .screen__buttons--button {
          width: 23vw;
        }
      }
    }
  }


  @media screen and (max-width: 559px){
    .screen {

      & .screen__buttons {
        width: 50vw;

        & .screen__buttons--button {
          width: 22vw;
        }
      }
    }
  }

  @media screen and (max-width: 828px){
  .screen {

    & .screen__background {
      & .screen__stadistics {
        width: 20vw;

        & .screen__stadistics--li {
          width: 100%;
          margin: 1vh 0;
          transition: .3s all ease-in-out;
        }
      }
    }
  }
}
</style>

  