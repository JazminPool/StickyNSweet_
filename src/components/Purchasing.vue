<template>
    <div>
        <!-- Barra de opciones: Datos, historial -->
        <navp></navp>
        <br>
        <!-- Contenido: -->
        <b-container>
            <b-table class="th_purchasing" outlined hover :items="items" :fields="fields"></b-table>
        </b-container>

        <br><br>
    </div>
</template>

<script>
import NavProfile from '@/components/NavProfile'

export default {
    name: 'PurchasingHistory',
    components:{
        'navp' : NavProfile
    },
    data () {
        return {
        // Note 'isActive' is left out and will not appear in the rendered table
        fields: [ 'numero', 'sticker', 'medida', 'cantidad', 'total', 'fecha', 'punto_medio'],
        items: [
            { 
                isActive: true, 
                numero: 124578, 
                sticker: 'Ardnold', 
                medida: 'Chico',
                cantidad: 2,
                total: '$20.00 MXN',
                fecha: '25/01/2018',
                punto_medio: 'Av. Bonampak'
            },
            { 
                isActive: true, 
                numero: 1352578, 
                sticker: 'Tricilo', 
                medida: 'Grande',
                cantidad: 6,
                total: '$50.00 MXN',
                fecha: '25/01/2018',
                punto_medio: 'Av. Bonampak'
            }
        ]
        }
    }
}
</script>

<style>
.th_purchasing th{
    background-color: #eb6e80 !important;
    color: aliceblue;
    font-weight: 500;
    font-size: 15px;
}
.th_purchasing tr:hover {
    background-color: #f0f0f0 !important;
    }
</style>
