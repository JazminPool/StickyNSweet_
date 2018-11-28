<template>
    <b-container>
        <b-row>
            <b-col>
                <b-card class="bgcard">
                    <!-- Elementos del carrito de compras -->
                        <b-row class="px-4 py-3" align-v="center">
                            <b-col md="4">
                                <img rounded="circle" src="../assets/st5.png" width="75" height="75" blank-color="#777" class="m-1" />
                            </b-col>
                            <b-col md="5">
                                <h4>Ardnold</h4><p>$12.00 varitos mexicanos</p>
                            </b-col>
                        </b-row>
                            
                        
                        <b-dropdown-divider></b-dropdown-divider>

                    <!-- Elementos del carrito de compras -->
                        <b-row class="px-4 py-3" align-v="center">
                            <b-col md="4">
                                <img rounded="circle" src="../assets/st2.png" width="75" height="75" blank-color="#777" class="m-1" />
                            </b-col>
                            <b-col md="5">
                                <h4>Aguacate</h4><p>$12.00 varitos mexicanos</p>
                            </b-col>
                        </b-row>


                        <b-dropdown-divider></b-dropdown-divider>

                    <!-- Elementos del carrito de compras -->
                        <b-row class="px-4 py-3" align-v="center">
                            <b-col md="4">
                                <img rounded="circle" src="../assets/st3.png" width="75" height="75" blank-color="#777" class="m-1" />
                            </b-col>
                            <b-col md="5">
                                <h4>Tres Arizonas</h4><p>$12.00 varitos mexicanos</p>
                            </b-col>
                        </b-row>


                        <b-dropdown-divider></b-dropdown-divider>


                    <!-- Elementos del carrito de compras -->
                        <b-row class="px-4 py-3" align-v="center" align-h="end">
                            <b-col>
                                <h4>Total a pagar: $36.00</h4>
                            </b-col>
                        </b-row>
                </b-card>
            </b-col>

            <b-col>
                <b-card class="bgcardcart">
                    <b-img height="150" src="http://www.oscarabadfolgueira.com/wp-content/uploads/2016/03/icono-paypal-tarjetas.png"></b-img>
                    <b-row>
                        <b-col>
                           <v-text-field
                            :mask="mask"
                            label="Número de tarjeta"
                            append-icon="fa fa-credit-card"
                            outline></v-text-field> 
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <v-text-field
                                label="Nombre de propietario"
                                append-icon="person"
                                outline></v-text-field> 
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <v-text-field
                                label="Fecha de expiración"
                                append-icon="fa fa-calendar-alt "
                                outline></v-text-field> 
                        </b-col>
                        <b-col>
                            <v-text-field
                                label="Código de seguridad"
                                append-icon="security"
                                type="password"
                                outline></v-text-field> 
                        </b-col>
                    </b-row>
                    <b-button class="btn-block btn-info">Pagar</b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name:'CreditCard',
    data(){
        return{
            mask: 'credit-card'
        }
    }
    
}
</script>

<style>
body{
    font-family: 'Niramit', sans-serif !important;
}
.bgcardcart{
    background-image: url('https://images.unsplash.com/photo-1521449256184-170b4a4c437c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=db2fb9dc4a09793aaab44e20e34c8e49&w=1000&q=80');
    background-size: cover;
}
.bgcard{
    background-color:rgb(252, 250, 248);
}
</style>
