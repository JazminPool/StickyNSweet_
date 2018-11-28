<template>
    <div class="div_nav">
      <b-navbar type="light" fill text-variant="black" class="conf_nav" fixed toggleable>
        <b-navbar-toggle target="nav_main"></b-navbar-toggle>
          
        <b-navbar-brand href="#" class="logo_center"> <!--navLogo-->
          <!-- <img src="" alt="Sticky N' Sweet" > -->
          <router-link to="/">
            <b-navbar-brand class="mb-0"><h1>Sticky N' Sweet &#x1F369; </h1> </b-navbar-brand>
          </router-link>
        </b-navbar-brand> <!--Fin navLogo-->
        
        <b-collapse is-nav id="nav_main">

          <b-navbar-nav> <!--Nav izquierda-->
            <b-nav-item-dropdown text="Stickers" class="m-3">
              <b-dropdown-item to="/Estandar">
                Estándar
              </b-dropdown-item>
              <b-dropdown-item to="/Personalizado">
                Personalizados
              </b-dropdown-item>
            </b-nav-item-dropdown><!--Fin stickers-->

            <b-nav-item href="#">
              <b-form inline>
                <b-form-input type="text" class="search_stickers" placeholder="Buscar stickers"></b-form-input>
                <v-btn flat icon color="red lighten-2" v-b-modal="'myModal'">
                  <v-icon>fas fa-search</v-icon>
                </v-btn>
              </b-form>
            </b-nav-item>

            
          </b-navbar-nav> <!--Fin contenedor nav izquierda-->

        
          <b-navbar-nav class="ml-auto"> <!--Nav derecha-->
            <!-- Carrito -->
              <b-nav-item-dropdown class="dropcart" right no-caret> 
                <template slot="button-content" right> 
                  <v-avatar class="align-right">
                    <v-badge color="teal lighten-3" left overlap>
                      <span slot="badge" small>2</span>
                      <v-btn flat icon color="red lighten-2">
                        <v-icon dark>shopping_cart</v-icon>
                      </v-btn>
                    </v-badge>
                  </v-avatar>
                </template>

              <!-- Elementos del carrito de compras -->
                <b-row class="px-4 py-3" align-v="center">
                  <b-col md="4">
                    <img rounded="circle" src="../assets/st5.png" width="75" height="75" blank-color="#777" class="m-1" />
                  </b-col>
                  <b-col md="5">
                    <h4>Ardnold</h4><p>$12.00 varitos mexicanos</p>
                  </b-col>
                  <b-col md="2">
                    <v-btn flat icon color="cyan darken-2" v-b-tooltip.hover title="Eliminar del carrito">
                      <v-icon>fas fa-trash</v-icon>
                    </v-btn>
                  </b-col>
                </b-row>
                    
                
                <b-dropdown-divider></b-dropdown-divider>

              <!-- Elementos del carrito de compras -->
                <b-row class="px-4 py-3" align-v="center">
                  <b-col md="4">
                    <img rounded="circle" src="../assets/st2.png" width="75" height="75" blank-color="#777" class="m-1" />
                  </b-col>
                  <b-col md="5">
                    <h4>Ardnold</h4><p>$12.00 varitos mexicanos</p>
                  </b-col>
                  <b-col md="2">
                    <v-btn flat icon color="cyan darken-2" v-b-tooltip.hover title="Eliminar del carrito">
                      <v-icon>fas fa-trash</v-icon>
                    </v-btn>
                  </b-col>
                </b-row>

                <b-dropdown-divider></b-dropdown-divider>
                
                <b-row align-v="center" align-h="center">
                  <router-link to="/Details">
                      <v-btn flat
                        color="teal lighten-1" 
                        v-b-tooltip.hover title="Pagar ahora"> Ver detalles de compra
                      </v-btn>               
                  </router-link>
                </b-row>
                

              </b-nav-item-dropdown><!--Fin perfil-->

            
            <!-- Avatar -->
              <b-nav-item-dropdown right> 
                <template slot="button-content"> 
                  <v-avatar>
                    <img src="https://image.flaticon.com/icons/svg/1193/1193020.svg">
                  </v-avatar>                 
                </template>

                <b-dropdown-item to="/Profile">
                    Perfil
                </b-dropdown-item>

                <b-dropdown-item to="/Login">
                  Cerrar sesión
                </b-dropdown-item>
              
              </b-nav-item-dropdown><!--Fin perfil-->
          </b-navbar-nav><!--Fin contenedor nav derecha-->

        </b-collapse><!--Fin del collapse-->
      </b-navbar> <!--Fin del navbar-->   
    

    
      <!-- Login modal -->
        <b-modal id="myModal" 
                 hide-header
                 hide-footer>
            <b-tabs >
              <b-tab title="Iniciar sesión" active>
                <b-row align-h="center" align-v="center" class="m-3">
                  <img src="../assets/av1.png">
                </b-row>
                
                <b-row align-h="center" align-v="center" class="m-3">
                  <b-col>
                    <b-row class="p-2">
                      <v-text-field
                        type="email"
                        color="pink darken-4"
                        label="Correo electrónico"
                        hint="Correo electrónico con el que se registró."
                        required>
                      </v-text-field>
                    </b-row>
                    <b-row class="p-2">
                      <v-text-field
                        type="password"
                        color="pink darken-4"
                        label="Contraseña"
                        hint="¿Olvidó su contraseña?"
                        persistent-hint
                        required
                      ></v-text-field>
                    </b-row>
                    <!-- <b-form-input placeholder="Correo electrónico"></b-form-input> -->
                  </b-col>
                </b-row>
                <b-row class="p-3">
                  <b-col>
                    <b-button 
                        size="sm" 
                        class="login"
                        v-model="tipo"
                        @click="false"> 
                      Iniciar
                    </b-button>
                  </b-col>
                </b-row>
                <!-- {{$data}} -->
              </b-tab>
              
              <b-tab title="Registro">
                <h4 class="m-3">¡Estás a punto de ser miembro!</h4>
                
                <b-row align-h="center" align-v="center" class="m-1">
                  <b-col>
                    <!-- <v-text-field
                        type="text"
                        color="pink darken-4"
                        label="Nombre(s):"
                        required>
                    </v-text-field> -->
                    <b-form-input placeholder="Nombre(s)" name="Nombre" v-model="userData.Nombre" id="Nombre"></b-form-input>
                  </b-col>
                  <b-col>
                    <b-form-input placeholder="Apellidos" name="Apellidos" v-model="userData.Apellidos" id="Apellidos"></b-form-input>
                  </b-col>
                </b-row> 
                
                <b-row align-h="center" align-v="center" class="m-1">
                  <b-col>
                    <!-- <v-text-field
                        type="email"
                        color="pink darken-4"
                        label="Correo electrónico:"
                        hint="Con este correo podrás iniciar sesión."
                        persistent-hint
                        required>
                    </v-text-field> -->
                    <b-form-input placeholder="Correo electrónico" name="Correo" v-model="userData.Correo" id="Correo" type="email" required></b-form-input>
                  </b-col>
                </b-row>

                <b-row align-h="center" align-v="center" class="m-1">
                  <b-col>
                    <!-- <v-text-field
                        color="pink darken-4"
                        v-model="password"
                        :append-icon="show1 ? 'visibility_off' : 'visibility'"
                        :rules="[rules.required, rules.min]"
                        :type="show1 ? 'text' : 'password'"
                         @click:append="show1 = !show1"
                        label="Contraseña:"
                        required>
                    </v-text-field> -->
                    <b-form-input placeholder="Contraseña" name="Pass" v-model="userData.Pass" id="Pass" type="password"></b-form-input>
                  </b-col>
                  <b-col>
                    <!-- <v-text-field
                        color="pink darken-4"
                        :append-icon="show2 ? 'visibility_off' : 'visibility'"
                        :rules="[rules.required, rules.min]"
                        :type="show2 ? 'text' : 'password'"
                         @click:append="show2 = !show2"
                        label="Confirmar contraseña:"
                        required>
                    </v-text-field> -->
                    <b-form-input placeholder="Contraseña" name="Pass2" id="Pass2" type="password"></b-form-input>
                  </b-col>
                </b-row>

                <b-row align-h="center" align-v="center" class="m-1">
                  <b-col md="3">
                    <b-row>
                      <!-- <v-text-field
                        type="number"
                        color="pink darken-4"
                        label="Edad:"
                        required>
                      </v-text-field> -->
                      <b-form-input placeholder="Edad" name="fechaNacimiento" v-model="userData.fechaNacimiento" id="fechaNacimiento" type="number"></b-form-input>
                    </b-row>
                    <b-row>
                      Género:                  
                      <b-form-select name="Sexo" id="Sexo" v-model="userData.Sexo" class="mb-3" size="sm">
                        <option value="" disabled>Seleccione un género</option>
                        <option value="m">Mujer</option>
                        <option value="h">Hombre</option>
                      </b-form-select>
                    </b-row>
                  </b-col>
                  <b-col md="6">
                    <form id="form_contact" enctype="multipart/form-data">
                    <img name="file" src="../assets/avm.png" v-if="userData.Sexo == 'm'">
                    <img name="file" src="../assets/avh.png" v-else-if="userData.Sexo == 'h'">
                    <img name="file" src="../assets/av1.png" v-else>
                    </form> 
                  </b-col>
                </b-row>
                
                <b-row align-h="center" align-v="center" class="m-3">
                  <b-col>
                    <b-button 
                        size="sm" 
                        class="join" 
                        v-model="tipo"
                        @click="sendUser();"> 
                      Ser miembro
                    </b-button>
                  </b-col>
                </b-row>
                <vue-snotify></vue-snotify>
              </b-tab>
            </b-tabs>
        </b-modal>

      <!--Fin modal-->

      
    </div>
</template>

<script>

import {createUser} from "../services/usuarios"
import {Snotify} from 'vue-snotify'

export default {
    name: 'NavBar',
    //props:["userData"],
    data(){
      return {
        tipo: null,
        //coso del ojo del password
        show1: false,
        show2: false,
        //tipo de field password
        password: 'Password',
        //required
        rules: {
          required: value => !!value || 'Campo requerido.'
        },
        //sexo
        gender: '',
        //userData
        loading:true,
        userData:{
            Nombre: '',
            Apellidos:'',
            Direccion:'',
            Sexo:'',
            Edad:'',
            Correo:'',
            Pass:'',
            file:{}
      }
      }
    },
    methods:
    {
      sendUser()
      {
        let self = this;
        console.log("this: ", this.userData);

      this.$snotify.async(
        "Registrando nuevo contacto",
        "Registrando...",
        () =>
          new Promise((resolve, reject) => {
            setTimeout(function() {
             createUser(self.userData)
                .then(function(response) {
                  console.log("data response: ", response);
                  setTimeout(
                    () =>
                      resolve({
                        title: "Registro correcto",
                        body: "El Usuario se ha registrado correctamente",
                        config: {
                          closeOnClick: true,
                          titleMaxLength: 30,
                          timeout: 2000
                        }
                      }),
                    1000
                  );
                  setTimeout(()=>
                    self.clearForm(),
                    3000)
                })
                .catch(function(error) {
                  setTimeout(
                    () =>
                      reject({
                        title: "Error",
                        body:
                          "Error al subir datos. No se puede continuar con el registro",
                        config: {
                          closeOnClick: true,
                          timeout: 2000
                        }
                      }),
                    1000
                  );
                })
                .finally(() => console.log("consulta api finalizada"));
            }, 1500);
          })
      );
      },
      clearForm()
      {
        console.log('formClean')
        document.getElementById("Nombre").value="";
        document.getElementById("Apellidos").value="";
        document.getElementById("Sexo").value="";
        document.getElementById("fechaNacimiento").value="";
        document.getElementById("Correo").value="";
        document.getElementById("Pass").value="";
              this.dialogvisible = false

      }
    }
}
</script>

<style>
    .logo_center{
        left: 50%;
        position: absolute;
        margin-left: -10%;
        margin-top: -8x;
    }

    .conf_nav{
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 8%;
        padding-right: 8%;
        background: #fcfcfc; 
        font-weight: 500;
    }
    .search_stickers{
        border: none;
        border-radius: 0;
        border-bottom: 2px solid #cc6161;
        background: none;
    }
    .search_stickers::selection{
        border: 2px solid #e57373 !important;
    }
    .dropcart{
      min-width: 25rem;
    }
    .align-right{
      float: right !important;
    }
    /* fondo detras del modal */
    .modal-backdrop {
      /* background-image: url('https://png.pngtree.com/thumb_back/fh260/back_pic/00/15/30/4656e81f6dc57c5.jpg'); */
      opacity: 0.6 !important;
    }
    /* bg modal */
    .modal-body, .modal-footer {
      background: #d1e4ee; 
    }
    .login{
      background-color: #92568b;
      border: none;
    }
    .login:hover{
      background-color: #613a63;
    }
    .join{
      background-color: #26A69A;
      border: none;
    }
    .join:hover{
      background-color: #00897B;
    }
</style>
