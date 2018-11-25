<template>
    <b-container>
        <b-row>
            <h1>Ardnold Cabeza de Balón</h1>
        </b-row>
        <b-row>
            <b-col class="col-md-7 col-xs-12">
                <img src="../assets/st5.png"/>
                <br>
                <h4>Detalles:</h4>
                <h5>Oh, Ardnold, mi cabeza de balón; te odio pero te amo, pero te odio.</h5>
            </b-col> <!--Fin Detalles-->

            <b-col class="col-md-5 col-xs-12">
                <h3>$10.00 varitos mexicanos</h3> <br>
                <b-row>
                    <b-col>
                        Cantidad: <b-form-input type="number" min="1.00" max="15.00"></b-form-input>
                    </b-col>
                    <b-col>
                        Tamaño: <b-form-select v-model="selected" :options="options" class="mb-3" />
                    </b-col>
                </b-row>
                <b-table striped bordered hover small :items="items" :fields="fields" class="text-center"></b-table>
                <v-btn flat icon 
                        color="red accent-2" 
                        v-b-tooltip.hover title="Añadir al carrito y seguir comprando!"
                        class="right mr-0" >
                    <v-icon>shopping_cart</v-icon> 
                </v-btn>
                <router-link to="/Details">
                    <v-btn flat  
                        color="green lighten-1" 
                        v-b-tooltip.hover title="Pagar ahora"
                        class="right mr-0" > Comprar ya!
                    </v-btn>
                </router-link>
            </b-col><!--Fin Precio/Medidas-->
            
        </b-row>
    </b-container>
</template>

<script>
export default {
    name:'InfoSticker',
    data(){
        return{
            selected: 'c',
            options:[
                {value: 'xc', text: 'Más Chico'},
                {value: 'c', text: 'Chico'},
                {value: 'm', text: 'Mediano'},
                {value: 'g', text: 'Grande'},
                {value: 'xg', text: 'Más Grande'},

            ],
            fields: [ 'nombre', 'medidas'],
            items: [
                { isActive: true, nombre: 'Más Chico', medidas: '3cm largo x 4cm ancho'},
                { isActive: false, nombre: 'Chico', medidas: '3cm largo x 4cm ancho'},
                { isActive: false, nombre: 'Mediano', medidas: '3cm largo x 4cm ancho'},
                { isActive: true, nombre: 'Grande', medidas: '3cm largo x 4cm ancho'},
                { isActive: false, nombre: 'Más Grande', medidas: '3cm largo x 4cm ancho'}
            ]
        }
    }
}
</script>

<style>

</style>
