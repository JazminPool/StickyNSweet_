<template>
    <div>
        <!-- Barra de opciones: Datos, historial -->
        <navp></navp>
        <br><br>
        <!-- Content -->
        <b-container fluid>
            <b-row align-v="center" align-h="center" class="p-2">
                <b-col md="3">
                    <b-row align-v="center" align-h="center">
                        <img src="../assets/av1.png"/>
                    </b-row>
                    <br>
                    <b-row>
                        <b-col>
                            <v-btn flat color="teal lighten-3">Editar mis datos</v-btn>
                        </b-col>
                        <!-- <b-col>
                            <v-btn color="pink darken-1">Error</v-btn>
                        </b-col> -->
                    </b-row>
                    
                </b-col><!--Fin columna img-->
                <b-col md="8">
                    <b-row class="p-2">
                        <b-col sm="6">
                            Nombre(s): <b-form-input id="" type="text" placeholder="Nombre(s)" readonly></b-form-input>
                        </b-col>
                        <b-col sm="6">
                            Apellidos: <b-form-input id="" type="text" placeholder="Apellidos" readonly></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="p-2">
                        <b-col sm="6">
                            Correo electrónico: <b-form-input id="" type="email" placeholder="Correo" readonly></b-form-input>
                        </b-col>
                        <b-col sm="6">
                            Contraseña: <b-form-input id="" type="password" placeholder="Contraseña" readonly></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="p-2">
                        <b-col sm="6">
                            Edad: <b-form-input id="" type="number" placeholder="Edad" readonly></b-form-input>
                        </b-col>
                        <b-col sm="6">
                            Género: <b-form-input id="" type="text" placeholder="Género" readonly></b-form-input>
                        </b-col>
                    </b-row>
                    <b-row class="p-2" align-v="center">
                        <b-col>
                            Punto medio: 
                            <b-form-select id=""
                                    :options="dir"
                                    v-model="form.direcc" readonly>
                            </b-form-select>
                        </b-col>
                        <b-col md="auto" class="p-2 text-center">
                            <v-btn flat icon color="pink"
                                    id="puntomedio"
                                    v-b-tooltip.hover 
                                    title="¿Qué es el 'Punto medio'?">
                                <v-icon>far fa-question-circle</v-icon>
                            </v-btn>
                            <b-popover ref="popover" target="puntomedio">
                                El punto medio es un lugar estratégico para realizar la entrega.
                            </b-popover>
                        </b-col>
                    </b-row>
                </b-col> <!-- Fin columna datos -->
            </b-row><!--Fin row principal-->
        </b-container><!--Fin container-->
        <br><br><br>
    </div>
</template>

<script>
import NavProfile from '@/components/NavProfile'

export default {
    name: 'Profile',
    components:{
        'navp' : NavProfile
    },
    data () {
    return {
      form: {
        direcc: null,
      },
      dir: [
        { text: 'Starbucks Av. Bonampak', value: null },
        'Plaza las Ámericas', 'La Gran Plaza', 'Av. Andrés Q. Roo', 'Calle 151'
      ],
      show: true
    }
  }
}
</script>

<style>

</style>
