<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    props: {
        isDisabled: {
        type: Boolean,
        default: true
        }
    },
    components: {
    FontAwesomeIcon
  }
}
</script>
<template>
    <div id="top-bar">
        <button class="top-bar__button" :class="{ 'disabled': isDisabled }" :disabled="isDisabled">
            <font-awesome-icon icon="fa-solid fa-caret-down" />
        </button>
    </div>
</template>
<style lang="css">
    #top-bar {
        width: 100%;
        height: 11.7vh;
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