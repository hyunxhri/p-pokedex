<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
    props: {
        isDisabled: {
        type: Boolean,
        default: false
        }
    },
    components: {
    FontAwesomeIcon
  }
}
</script>
<template>
    <aside class="buttons-bar">
        <!-- Apply disabled class if the button is disabled -->
        <button class="buttons-bar__button" :class="{ 'disabled': isDisabled }" :disabled="isDisabled">
            <font-awesome-icon icon="fa-solid fa-caret-right" />
        </button>
        <button class="buttons-bar__button" :class="{ 'disabled': isDisabled }" :disabled="isDisabled">
            <font-awesome-icon icon="fa-solid fa-caret-left" />
        </button>
    </aside>
</template>
<style lang="css">
    .buttons-bar{
        height: inherit;
        margin-left: auto;

        & .buttons-bar__button{
            width: 17vw;
            height: 44vh;
            display:block;
            background: #0C0C0D;
            border-bottom-right-radius: 11vw;
            border-top-right-radius: 11vw;
            border: 4vh solid #FF321D;
            border-left:none;
            color: #D9D9D9;
            font-size: 10vw;
            cursor: pointer;

            /*Only apply hover if is not disabled*/
            &:not(.disabled):hover {
                background: #212124;
            }

            &.disabled {
                cursor: not-allowed;
            }
        }
    }
</style>