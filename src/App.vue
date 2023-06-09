<script setup>
  import Cabecalho from './components/TheHeader.vue';
  import Apresentacao from './components/TheMain.vue';
  import tecnoligas from './components/TheTecnologias.vue'
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'

  onMounted(() => {
    initFlowbite();
  })
</script>

<template>
  <div class="bg-fundo h-screen w-screen">
    <header class="mb-10 md:mb-16">
      <Cabecalho />
    </header>

    <RouterView />

    <main class="mb-12 md:mb-24">
      <Apresentacao />
    </main>

    <section>
      <tecnoligas />
    </section>
    
  </div>
  
</template>

<style scoped>

</style>
