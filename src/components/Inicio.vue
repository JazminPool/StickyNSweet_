<template>
    <b-container fluid>
      <b-row>
        <b-col class="">
          <b-img src="https://c1.staticflickr.com/2/1468/24233255356_ce1d6f4c7a_b.jpg" 
              fluid-grow />
              <!-- <b-embed type="video" aspect="4by3" controls poster="poster.png">
                <source src="../assets/Intro_Sticky.mp4"
                        type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
              </b-embed> -->
        </b-col> 
      </b-row>
      
      <hr>

      <div class="height">
        <b-row>
          <b-col cols="6">
            <b-card overlay
                    class="text-center "
                    img-src="https://st-listas.20minutos.es/images/2010-04/211673/list_640px.jpg?1271811847"
                    img-alt="Estándares"
                    text-variant="black"
                    style="max-width: 50rem;"
                    img-top
                    title="Stickers ya hechos">
                <router-link to="/Estandar">
                  <b-btn class="align-middle">Estándar</b-btn>            
                </router-link>
            </b-card>
          </b-col><!--Fin Estandar-->
          
          <b-col cols="6">
            <b-card overlay
                    class="text-center"
                    img-src="https://res.cloudinary.com/teepublic/image/private/s--WlRhcYqW--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1519987534/production/designs/2412529_0.jpg"
                    text-variant="white"
                    style="max-width: 50rem;"
                    img-top
                    title="Pide tu propio diseño">
                <router-link to="/Personalizado">
                  <b-btn>Personalizados</b-btn>
                </router-link>
            </b-card>
          </b-col><!--Fin personalizado-->
        </b-row>
      </div> <!--Fin tipo de stickers-->
      
    </b-container>
</template>


<script>
export default {
    name:'Inicio'
}
</script>

<style>

</style>
