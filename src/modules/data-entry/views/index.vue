<template>
    <div>
          <div class="row align-items-start">
            <div class="col-4"><SideBar/></div>
            <div class="col-8"><router-view></router-view></div>
          </div>

 


      
         
         
      
       
      
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import SideBar from '../components/SideBar.vue'; 

export default defineComponent({
  name: 'indexHome',
  components: {
    SideBar
  },
});
</script>


<style lang="scss">

</style>