<template>
    <div class="main">
          <div class="row align-items-start">
            <div class="col-3"><SideBar/></div>
            <div class="col-9 form-view"><router-view></router-view></div>
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

<style scoped>
.form-view{
  background-color: #F9F9F9;
}

.main{
    background-color: #F9F9F9;
}
</style>


<style lang="scss">

</style>

