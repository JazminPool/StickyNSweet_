<template>
<div><navcategories></navcategories>
    <b-container fluid> <br>
        <h2>Detalles de la compra</h2> <br>
        
        <b-row align-v="center" align-h="center">
            <b-col cols="5">
                <b-row align-v="center" align-h="center">
                    <b-col cols="5">
                        <img rounded="circle" src="../assets/st5.png" width="170" height="170"/>
                    </b-col> <!--Fin col Imagen-->
                    <b-col cols="5">
                        <b-row align-h="center">
                            <h4>Ardnold Cabeza de Balón</h4>
                        </b-row>
                        <b-row align-h="center">
                            <p class="description">Oh, Ardnold, mi cabeza de balón; te odio pero te amo, pero te odio.</p>
                        </b-row>
                    </b-col> <!--Fin col name-description-->
                </b-row> 
            </b-col> <!--Fin col description sticker-->

            <b-col cols="2">
                <h3>$10.00 varitos mexicanos</h3>
            </b-col> <!--Fin col price-->

            <b-col cols="3">
                Cantidad: <b-form-input type="number" min="1.00" max="15.00"></b-form-input> <br>
                Tamaño: <b-form-select v-model="selected" :options="options"/>
            </b-col> <!--Fin col cantidad-->

            <b-col>
                <v-btn flat icon color="red lighten-2" v-b-tooltip.hover title="Eliminar del carrito">
                    <v-icon>fas fa-trash</v-icon>
                </v-btn>
            </b-col> <!--Fin btn delete-->

        </b-row> <!--Fin detalles compra-->

        <hr>

        <b-row align-v="center" align-h="center">
            <b-col cols="5">
                <b-row align-v="center" align-h="center">
                    <b-col cols="5">
                        <img rounded="circle" src="../assets/st6.png" width="170" height="170"/>
                    </b-col> <!--Fin col Imagen-->
                    <b-col cols="5">
                        <b-row align-h="center">
                            <h4>Triciclo del Paraíso</h4>
                        </b-row>
                        <b-row align-h="center">
                            <p class="description">
                                Sin esquites y elotes no hay paraíso! Lleva el trici y elotes a todos lados.
                            </p>
                        </b-row>
                    </b-col> <!--Fin col name-description-->
                </b-row> 
            </b-col> <!--Fin col description sticker-->

            <b-col cols="2">
                <h3>$23.00 varitos mexicanos</h3>
            </b-col> <!--Fin col price-->

            <b-col cols="3">
                Cantidad: <b-form-input type="number" min="1.00" max="15.00"></b-form-input> <br>
                Tamaño: <b-form-select v-model="selected" :options="options"/>
            </b-col> <!--Fin col cantidad-->

            <b-col>
                <v-btn flat icon color="red lighten-2" v-b-tooltip.hover title="Eliminar del carrito">
                    <v-icon>fas fa-trash</v-icon>
                </v-btn>
            </b-col> <!--Fin btn delete-->

        </b-row> <hr> <!--Fin detalles compra-->
    
        
        <b-row align-h="end"> 
            <b-col class="text-justify">
                <b-btn id="popSizes">Medidas</b-btn>
                <b-popover target="popSizes"
                    title="Medidas en cm"
                    triggers="hover focus">
                    <b-table striped bordered hover small :items="items" :fields="fields" class="text-center"></b-table>
                </b-popover>
            </b-col>
            <h3 class="m-2 p-3">Total a pagar: $33.00 MXN</h3>
        </b-row>

        
        <b-row align-h="end p_left_30">
           
            <b-col></b-col>
            <b-col></b-col>
            <b-col>
                <b-button v-b-tooltip.hover title="Pagar ahora" class="btn-block btn_pay">Comprar</b-button>
            </b-col>
        </b-row>
    <br>
    </b-container>
</div>
</template>

<script>
import NavCategory from '@/components/NavCategorias'
export default {
    name:'PurchaseDetails',
    components:{
        'navcategories' : NavCategory
    },
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
    @import url('https://fonts.googleapis.com/css?family=Niramit:300,400,500,600,700');

    body{
        font-family: 'Niramit', sans-serif !important;
        background-color: #fcfcfc;
    }

    .description{
        font-size: 15px !important;
    }
    .btn_pay{
        background: #4DB6AC; /**/
        border: none;
    }
    .btn_pay:hover{
        background: #80CBC4;
        color: black;
    }
</style>
