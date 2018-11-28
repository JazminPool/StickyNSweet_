<template>
    <div><navcategories></navcategories>
        <b-container>
            <b-row class="m-2">
                <h2>Comida</h2> 
                <v-btn icon class="m-0" v-b-tooltip.hover title="Ver más">
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </b-row>
            <b-row>
                <b-col>
                    <b-card title="Hongüito Rosa"
                            img-alt="Hongüito"
                            img-top
                            tag="article"
                            style="max-width: 25rem;"
                            class="mb-2">
                        <img src="../assets/st1.png"/>

                        <v-btn flat icon 
                            color="red accent-2" 
                            v-b-tooltip.hover title="Añadir al carrito!"
                            class="right mr-0" >
                            <v-icon>shopping_cart</v-icon> 
                        </v-btn>
                        
                        <router-link to="/Info">
                            <v-btn flat icon color="red lighten-2" class="right mr-0">
                                <v-icon> fa-info-circle</v-icon>
                            </v-btn>
                        </router-link>

                        <h3>$10.00 varitos mexicanos</h3>
                        <p class="card-text">
                            Hongüito alucinógeno super chido color rossa. Duración 6 horas aproximadas.
                        </p>
                    </b-card><!--Fin card-->
                </b-col><!--Fin col-->
                
                <b-col>
                    <b-card title="Awacatito Verde"     
                            img-alt="Aguacate"
                            img-top
                            tag="article"
                            style="max-width: 25rem;"
                            class="mb-2">
                        <img src="../assets/st2.png"/>
                    
                        <v-btn flat icon 
                            color="red accent-2" 
                            v-b-tooltip.hover title="Añadir al carrito!"
                            class="right mr-0" >
                            <v-icon>shopping_cart</v-icon> 
                        </v-btn>
                        <h3>$18.00 varitos mexicanos</h3>
                        <p class="card-text">
                            Aguacatito verde bien chidurri para hacer un guacamole bien sabrosongo.
                        </p>                    
                    </b-card><!--Fin card-->
                </b-col><!--Fin col-->

                <b-col>
                    <b-card title="Tres Tés Arizonas"     
                            img-alt="Arizonas"
                            img-top
                            tag="article"
                            style="max-width: 25rem;"
                            class="mb-2">
                        <img src="../assets/st3.png"/>
                    
                        <v-btn flat icon 
                            color="red accent-2" 
                            v-b-tooltip.hover title="Añadir al carrito!"
                            class="right mr-0" >
                            <v-icon>shopping_cart</v-icon> 
                        </v-btn>
                        <h3>$13.00 varitos mexicanos</h3>
                        <p class="card-text">
                            Arizonas bien muertas pa' distrutar y estár bien agustín con los friends.
                        </p>                    
                    </b-card><!--Fin card-->
                </b-col><!--Fin col-->

            </b-row> <!--Fin categoría 1-->

            <br>

            <b-row class="m-2">
                <h2>Caricaturas</h2> 
                <v-btn icon class="m-0" v-b-tooltip.hover title="Ver más">
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </b-row>
            <b-row>
                <b-col>
                    <b-card title="Lengua Sexosa"     
                            img-alt="Lengua"
                            img-top
                            tag="article"
                            style="max-width: 25rem;"
                            class="mb-2">
                        <img src="../assets/st4.png"/>
                    
                        <v-btn flat icon 
                            color="red accent-2" 
                            v-b-tooltip.hover title="Añadir al carrito!"
                            class="right mr-0" >
                            <v-icon>shopping_cart</v-icon> 
                        </v-btn>
                        <h3>$14.50 varitos mexicanos</h3>
                        <p class="card-text">
                            Lengua sexosa para dar unos becerros bien cachondones.
                        </p>                    
                    </b-card><!--Fin card-->
                </b-col><!--Fin col-->
                
                <b-col>
                    <b-card title="Ardnold Cabeza de Balón"     
                            img-alt="Ardnold"
                            img-top
                            tag="article"
                            style="max-width: 25rem;"
                            class="mb-2">
                        <img src="../assets/st5.png"/>
                    
                        <v-btn flat icon 
                            color="red accent-2" 
                            v-b-tooltip.hover title="Añadir al carrito!"
                            class="right mr-0" >
                            <v-icon>shopping_cart</v-icon> 
                        </v-btn>
                        <h3>$19.00 varitos mexicanos</h3>
                        <p class="card-text">
                            Oh, Ardnold, mi cabeza de balón; te odio pero te amo, pero te odio.
                        </p>                    
                    </b-card><!--Fin card-->
                </b-col><!--Fin col-->

                <b-col>
                    <b-card title="Triciclo del Paraíso"     
                            img-alt="Trici"
                            img-top
                            tag="article"
                            style="max-width: 25rem;"
                            class="mb-2">
                        <img src="../assets/st6.png"/>
                    
                        <v-btn flat icon 
                            color="red accent-2" 
                            v-b-tooltip.hover title="Añadir al carrito!"
                            class="right mr-0" >
                            <v-icon>shopping_cart</v-icon> 
                        </v-btn>
                        <h3>$23.00 varitos mexicanos</h3>
                        <p class="card-text">
                            Sin esquites y elotes no hay paraíso! Lleva el trici y elotes a todos lados.
                        </p>                    
                    </b-card><!--Fin card-->
                </b-col><!--Fin col-->
            </b-row><!--Fin categoría 2-->
            <br>            
            <b-row class="m-2">
                <h2>Comida</h2> 
                <v-btn icon class="m-0" v-b-tooltip.hover title="Ver más">
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </b-row>
            <b-row>
                    <b-col v-for="producto in productos" :key="producto.id">
                    <b-card 
                            img-alt="Trici"
                            img-top
                            tag="article"
                            style="max-width: 25rem;"
                            class="mb-2">
                        <img src="../assets/st6.png"/>
                        <h1>{{producto.Titulo}}</h1>
                        <v-btn flat icon 
                            color="red accent-2" 
                            v-b-tooltip.hover title="Añadir al carrito!"
                            class="right mr-0" >
                            <v-icon>shopping_cart</v-icon> 
                        </v-btn>
                         <router-link to="/Info">
                            <v-btn flat icon color="red lighten-2" class="right mr-0">
                                <v-icon> fa-info-circle</v-icon>
                            </v-btn>
                        </router-link>
                        <h3>{{producto.Precio}}</h3>
                        <p class="card-text">
                           {{producto.Descripcion}}
                        </p>                   
                    </b-card><!--Fin card-->
                </b-col><!--Fin col-->
            </b-row>
        </b-container>
    </div>
</template>

<script>
import NavCategory from '@/components/NavCategorias'
import {getProduct} from '../services/productos'

    export default {
        name:'StandarDesign',
        data(){
            return{
                productos: []
            }
        },
        components:{
            'navcategories' : NavCategory
        },
        created()
        {
            this.consultarProductos();
        },
        methods:{
            consultarProductos()
            {
                let self = this;
                let num;
                getProduct().then(res=>{
                    console.log("test res: ",res);
                    console.log(res.Productos);
                    console.log(res.Productos[1])
                    self.productos = res.Productos
                    console.log("self: ",self.productos);
                })
                .catch(error=>{
                    console.log("error: ",error);
                })
                .finally(()=>console.log("consulta finalizada"))
            }
        },
        mounted()
        {
            getProduct
        }
    }
</script>

<style>
body{
    font-family: 'Niramit', sans-serif;
    background-color: #fcfcfc;
}
.right{
    float: right !important;
}
</style>
