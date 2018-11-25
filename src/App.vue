<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <hello-world></hello-world> otra manera de llamarlo-->
    <!-- <hola></hola> -->
    <navbar></navbar>
    <!-- <navcategories></navcategories> -->
    <router-view/> <!--Este es del inicio,algoasixd-->
    <footerr></footerr>
  </div>
</template>

<script>
  // import HelloWorld from '@/components/HelloWorld'
  import NavBar from '@/components/Nav'
  import NavCategory from '@/components/NavCategorias'
  import Footer from '@/components/Footer'


  export default {
    name: 'App',
    components:{
    // 'hola' : HelloWorld
    'navbar' : NavBar,
    'navcategories' : NavCategory,
    'footerr' : Footer
    }
  }
</script>

<style>
/* Fuentes */
  @import url('https://fonts.googleapis.com/css?family=Niramit:300,400,500,600,700');

  body{
    font-family: 'Niramit', sans-serif;
    background-color: #fcfcfc;
  }
  .height{
    position: relative;
  }

  /* Colores:
    Gama1 (pasteles fuertes xd):
      #E24E42
      #e98b000;
      #eb6e80;
      #008f95
    Gama2 (pasteles):
      #bdf8d2
      #fedcd2
      #df744a
      #dcb239
    Gama3 (morados):
      #94618e
      #49274a
      #f4decb
      #f8eee7
    Gama4 (retro):
      fedc3d
      000000
      01abaa
      fea680 *
    Gama5 (energético):
      f81b84
      f5ce28
      43c0f6
      f2eee2
  */

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
