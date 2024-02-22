<script>
import LeftBar from '@/components/LeftBar.vue'
import RightButtons from '@/components/RightButtons.vue'

export default {
    components: {
        LeftBar,
        RightButtons,
    }
}
</script>
<template>
    <LeftBar/>
    <article class="screen"></article>
    <RightButtons/>
</template>

<style lang="css" scoped>
    .screen {
        width: 69vw;
        border: 5vh solid #FF321D;
    }

    @media screen and (max-width: 425px){
        .screen {
            width: 100vw;
        }
    }
</style>