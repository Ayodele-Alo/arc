<template>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <div>
    <router-view v-slot=“{ Component, route }“>
     <transition
        :name=“route.meta?.transition || ‘slide-fade’”
        :duration=“{ enter: 300, leave: 500 }”
        mode="out-in"
      >
        <component :is=“Component” :key=“route?.path + route?.name” />
      </transition>
    </router-view>
    </div>
</template>

<script lang=“ts”>
import { defineComponent } from 'vue';
export default defineComponent({

});
</script>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
</style>
