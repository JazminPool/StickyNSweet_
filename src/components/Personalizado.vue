<template>
    <div><navcategories></navcategories>
    <b-container>
        <b-row>
            <h3>¡Pide tu propio diseño!</h3>
        </b-row><br>
        <b-row>
            <b-col class="col-md-6 col-xs-12">
                <b-form-file accept=".jpg, .png, .gif" @change="previewImage"></b-form-file>
                <br>
                <div v-if="imageData.length > 0">
                    <b-img center class="preview m-3" :src="imageData"/>
                </div>
            </b-col> <!--Fin Detalles-->

            <b-col class="col-md-6 col-xs-12">
                <b-alert show>El precio de tu Sticker va a depender del tamaño y el tipo.</b-alert>
                <b-row>
                    <b-col>
                        Cantidad: <b-form-input type="number" min="1.00" max="15.00"></b-form-input>
                    </b-col>
                    <b-col>
                        Tamaño:
                        <b-form-select  class="mb-3">
                        <option v-for="i in size" :key="i.id" :value="i.Code">{{i.Descripcion}}</option>
                        </b-form-select>
                    </b-col>
                </b-row>

                <b-form-textarea id="textarea1"
                                placeholder="¿Tienes más especificaciones sobre tu diseño? ¡Escribe!"
                                :rows="2">
                </b-form-textarea>
                <br>
                <b-table striped bordered hover small :items="size"  :fields="fields" class="text-center">
                </b-table>
                
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
</div>
</template>

<script>
import NavCategory from '@/components/NavCategorias'
import {getSize} from '../services/tamaños'
    export default {
        name:'CustomDesign',
        data(){
            return{
                imageData: "",
                selected: 'c',
                options:[
                    {value: 'xc', text: 'Más Chico'},
                    {value: 'c', text: 'Chico'},
                    {value: 'm', text: 'Mediano'},
                    {value: 'g', text: 'Grande'},
                    {value: 'xg', text: 'Más Grande'},

                ],
                    size:[],
                fields: [ 'Descripcion', 'Medidas'],
                items: [
                    { isActive: true, nombre: 'Más Chico', medidas: '3cm largo x 4cm ancho'},
                    { isActive: false, nombre: 'Chico', medidas: '3cm largo x 4cm ancho'},
                    { isActive: false, nombre: 'Mediano', medidas: '3cm largo x 4cm ancho'},
                    { isActive: true, nombre: 'Grande', medidas: '3cm largo x 4cm ancho'},
                    { isActive: false, nombre: 'Más Grande', medidas: '3cm largo x 4cm ancho'}
                ]
            }
        },
        components:{
            'navcategories' : NavCategory
        },
        mounted()
        {
        
        },
        created()
        {
            this.consultaSize();
        },
        methods:{
           previewImage: function(event) {
                var input = event.target;

                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.imageData = e.target.result;
                    }
                    reader.readAsDataURL(input.files[0]);
                }
            },
            consultaSize()
            {
                let self = this;
                getSize().then(res=>{
                    console.log("test ",res);
                    self.size = res.Tamaño
                    console.log("self: ",self.size)
                })
                 .catch(error=>{
                    console.log("error: ",error);
                })
                .finally(()=>console.log("consulta finalizada"))
            }
        }
    }
</script>

<style>
    .preview {
        width: 100%;
        height: auto;
        background-color: white;
        border: 1px solid #DDD;
        padding: 5px;
    }
</style>
