<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition">
      <component :is="Component" :key="route.path + route.name" />
    </transition>
  </router-view>
</template>

<script lang="“ts”">
import { defineComponent } from 'vue';
export default defineComponent({
  name:"APHRC"
});
</script>
