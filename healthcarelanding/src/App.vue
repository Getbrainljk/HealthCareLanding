<template>
    <v-app>
      <app-navigation></app-navigation>
      <home>

      </home>
     
       <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>



     <app-footer></app-footer>
     
    </v-app>
    
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
    name: 'App',

    components: {
       AppNavigation,
       AppFooter,
    },

    data: () => ({
        //
    })
};
</script>

<style>
</style>