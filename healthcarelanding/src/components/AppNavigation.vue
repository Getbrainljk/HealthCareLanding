<template>
<v-card
    color="grey lighten-4"
    flat
    tile
  >
<v-toolbar app  color="blue darken-3"   height="30" tdark>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-row justify="space-around" >
      <span class="group pa-2">
        <span>
          <v-icon>room</v-icon> 
          60 rue du Château deu - 9330 Paris
        </span> 

        <span>
        <v-icon>phone</v-icon>
        (+216) 00 00 00 00
        </span>
       
        <span>
        <v-icon>email</v-icon>
          contact@centre-medical.com
        </span>

      </span>
    </v-row>
</v-toolbar>


<v-toolbar app  color="white" light>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>CENTRE LOGO</v-toolbar-title>
   
    
    <v-row no-gutters>
      <v-col
        cols="12"
        sm="6"
        md="8"
      >







      </v-col>
      <v-col
        cols="6"
        md="3"
      >
     <v-btn rounded color="primary"  dark>PRENDRE RDV EN LIGNE</v-btn>   
      </v-col>
    </v-row>
 
</v-toolbar>
</v-card>

</template>

<script>

export default {
    name: 'AppNavigation'
};
</script>

<style scoped>

span {
  font-size: 10px;
  padding: 40px;
}
.v-toolbar {
  flex:auto;
}
</style>