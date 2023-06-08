<script setup>
  import TheOptions from './menu/TheOptions.vue';
  import ThePessoal from './menu/ThePessoal.vue'
  import MenuHamburguer from './menu/TheHamburguer.vue'
</script>

<template>
  <nav class="border-b border-bordas">
    <div class="p-5 md:px-20 xl:px-36 flex flex-wrap items-center justify-between mx-auto">
      <TheOptions />

      <ThePessoal />

      <MenuHamburguer />
    </div>
  </nav>
</template>
