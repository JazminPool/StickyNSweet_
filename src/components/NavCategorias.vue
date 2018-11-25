<template>
    <div>
        <b-navbar id="navColor" type="dark" toggleable class="navCategory">
            <b-navbar-toggle target="nav_category"></b-navbar-toggle>
            <b-collapse is-nav id="nav_category">
                <b-navbar-nav>
                    <router-link to="/DetallesCompra">
                        <b-btn class="item category_item">Música</b-btn>            
                    </router-link>
                    
                    <b-nav-item class="item">Caricaturas</b-nav-item>
                    <b-nav-item class="item">Geek</b-nav-item>
                    <b-nav-item class="item">Comida</b-nav-item>
                    <b-nav-item class="item">Animales</b-nav-item>

                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name:'NavCategory'  
}
</script>

<style>
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
.navCategory{
    padding-left: 30%;
    padding-right: 30%;
    font-weight: 400;
    background: #94618e !important;
}
.category_item{
    background: none;
    border: none;
    color:#ffffff80;
}
.category_item:hover{
    background: none;
    
}
.item{
    margin-right: 60px !important;
}
</style>

