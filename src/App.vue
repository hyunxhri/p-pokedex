<script>
import TopBar from '@/components/TopBar.vue'
export default {
  name: 'App',
  components: {
        TopBar
  }
}
</script>

<template>
  <TopBar/>
  <main id="wrapper">
    <router-view/>
  </main>
</template>

<style>
  @font-face {
    font-family: "Kameron";
    src: url('./assets/fonts/Kameron-VariableFont_wght.ttf') format('woff2'),
        url('./assets/fonts/Kameron-VariableFont_wght.ttf') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  #app {
    width: 100%;
    background-color: #0C0C0D;
  }
  #wrapper{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 88vh;
  }
</style>
