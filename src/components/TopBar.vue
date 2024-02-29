<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    data(){
        return {
            dropdownOpen: false
        }
    },
    computed: {
        isLoginPage() {
            return this.$route.path === '/';
        }
    },
    props: {
        isDisabled: {
        type: Boolean,
        default: false
        }
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen
        }
    },
    components: {
    FontAwesomeIcon
  }
}
</script>
<template>
    <div id="top-bar">
        <button class="top-bar__button" aria-label="dropdown" :class="{ 'disabled': isLoginPage }" :disabled="isLoginPage" @click="toggleDropdown">
            <font-awesome-icon icon="fa-solid fa-caret-down" />
        </button>
    </div>
    <div v-if="dropdownOpen" class="dropdown-content">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
  </div>
</template>
<style lang="css">
    #top-bar {
        width: 100%;
        height: 12vh;
        background: linear-gradient(0deg, rgba(255,50,29,1) 39%, rgba(255,202,42,0.94) 65%, rgba(255,50,29,1) 91%);
        border-bottom:3px solid #0C0C0D;
    }

    .top-bar__button {
        background: #00A3FF;
        color: #000;
        font-size: 3vh;
        padding: 0.8vh 2.5vh;
        margin-top: 3vh;
        margin-left: 4vh;
        border: 1px solid #000;
        border-radius: 5px;
        transition: ease-in all 0.2s;


        &.disabled {
                background:#d9d9d9;
                cursor: not-allowed;
            }
    }

    @media screen and (min-width: 321px){
        .top-bar__button {
            display:none;
            transition: ease-in all 0.2s;
        }
    }

</style>