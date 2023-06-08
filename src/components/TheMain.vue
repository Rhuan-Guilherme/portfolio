<script setup>
import { RouterLink } from 'vue-router';


</script>

<template>
  <section class="flex flex-col">
    <div class="flex items-center justify-center mb-2">
        <div class="flex items-center justify-center">
            <img class="w-2/3 md:w-full" src="./img/foto.png" alt="Imagem em preto e branco do Rhuan">
        </div>
    </div>

    <div class="flex items-center justify-center mb-2">
        <p class="text-texto text-sm lg:text-lg">Olá, eu sou o Rhuan 👋</p>
    </div>

    <div class="flex items-center justify-center mb-4 lg:mb-5">
        <h1 class="text-texto text-3xl lg:text-5xl text-center font-semibold">Desenvolvedor Front-End</h1>
    </div>

    <div class="flex items-center justify-center">
        <RouterLink to="/" class="bg-preencimento border-2 inline-block hover:bg-fundo transition-all border-bordas text-texto py-1 px-5 lg:py-2 lg:px-6 lg:text-lg rounded-md font-bold uppercase">Projetos <span class="ml-2">➝</span></RouterLink>
    </div>
  </section>
</template>