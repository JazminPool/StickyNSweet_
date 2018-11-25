<template>
    <v-footer dark height="auto" class="footer">
        <v-card class="flex" flat tile>
            <v-card-title 
                class="bg_footer">
                <strong class="subheading">Encuentranos también en nuestras redes sociales!</strong>
                <v-spacer></v-spacer>
                <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon
                       v-b-tooltip.hover title="Chécate nuestro instagram">
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>

            </v-card-title>

            <v-card-actions class="bg_footerBot darken-3 justify-center">
                <strong>2018 Sticky N' Sweet</strong>
            </v-card-actions>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{
            icons:[
                'fab fa-instagram','fab fa-instagram'
            ]
        }
    }
}
</script>

<style>
    /* .footer{
        bottom: 0 !important;
        left: 0;
        position: fixed;
        width: 100%;
    } */
   .bg_footer{
    background: #94618e;
  }
  .bg_footerBot{
    background: #49274a;
  }
</style>
