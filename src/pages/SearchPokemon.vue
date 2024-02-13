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
    <article class="content"></article>
    <RightButtons/>
</template>

<style lang="css">
    .content {
        width: 65vw;
        border: 5vh solid #FF321D;
    }
</style>