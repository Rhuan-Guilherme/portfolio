<script setup>
  import Cabecalho from './components/TheHeader.vue';
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  onMounted(() => {
    initFlowbite();
  })
</script>

<template>
  <div class="bg-fundo h-screen w-screen">
    <header>
      <Cabecalho />
    </header>
    <RouterView />
  </div>
  
</template>

<style scoped>

</style>
