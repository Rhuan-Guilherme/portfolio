<script setup>

</script>

<template>
  <nav class="border-b border-bordas">
    <div class="p-5 md:px-20 xl:px-36 flex flex-wrap items-center justify-between mx-auto">
      <div class="flex gap-3 md:gap-5">
        <button
          class="peer w-8 h-8 md:w-12 md:h-12 bg-preencimento rounded-full border-2 hover:bg-fundo transition-all border-bordas flex items-center justify-center"
        >
          <span class="material-symbols-outlined text-xl md:text-2xl text-texto peer-hover:hidden"
            >light_mode</span
          >
        </button>

        <div>
          <button
            id="dropdownHoverButton"
            data-dropdown-toggle="dropdownHover"
            data-dropdown-trigger="hover"
            class="w-8 h-8 md:w-12 md:h-12 bg-preencimento rounded-full border-2 hover:bg-fundo transition-all border-bordas flex items-center justify-center"
            type="button"
          >
            <span class="material-symbols-outlined text-xl md:text-2xl text-texto">translate</span>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownHover" class="z-10 hidden rounded-lg shadow md:w-40">
            <ul
              class="py-2 text-sm flex flex-row gap-2 items-center justify-center bg-preencimento border-2 border-bordas rounded-full"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <button
                  class="peer w-8 h-8 md:w-10 md:h-10 bg-preencimento rounded-full border-2 hover:bg-fundo transition-all border-bordas flex items-center justify-center bg-cover bg-center"
                  style="
                    background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg');
                  "
                ></button>
              </li>
              <li>
                <button
                  class="peer w-8 h-8 md:w-10 md:h-10 bg-preencimento rounded-full border-2 hover:bg-fundo transition-all border-bordas flex items-center justify-center bg-cover bg-center"
                  style="
                    background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png');
                  "
                ></button>
              </li>
              <li>
                <button
                  class="peer w-8 h-8 md:w-10 md:h-10 bg-preencimento rounded-full border-2 hover:bg-fundo transition-all border-bordas flex items-center justify-center bg-cover bg-center"
                  style="
                    background-image: url('https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg');
                  "
                ></button>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <button
            id="dropdownHoverButton2"
            data-dropdown-toggle="dropdownHover2"
            data-dropdown-trigger="hover"
            class="w-8 h-8 md:w-12 md:h-12 bg-preencimento rounded-full border-2 hover:bg-fundo transition-all border-bordas flex items-center justify-center"
            type="button"
          >
            <span class="material-symbols-outlined text-xl md:text-2xl text-texto">mail</span>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownHover2" class="z-10 hidden rounded-lg shadow w-40">
            <ul
              class="py-2 text-sm flex flex-row gap-2 items-center justify-center bg-preencimento border-2 border-bordas rounded-full"
              aria-labelledby="dropdownHoverButton"
            >
              <li>
                <a href="mailto:rhuan23g@gmail.com" class="text-texto font-semibold">rhuan23g@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="hidden md:flex items-center gap-3 text-texto font-semibold">
        <a
          class="p-2 hover:bg-cinza-100 hover:text-fundo hover:rounded-full transition-all"
          target="_blank"
          href="https://www.linkedin.com/in/rhuanguilherme23/"
          >Linkedin</a
        >
        <span class="w-0.5 h-5 bg-bordas rotate-12"></span>
        <a
          class="p-2 hover:bg-cinza-100 hover:text-fundo hover:rounded-full transition-all"
          target="_blank"
          href="https://github.com/Rhuan-Guilherme"
          >GitHub</a
        >
        <span class="w-0.5 h-5 bg-bordas rotate-12"></span>
        <a
          class="p-2 hover:bg-cinza-100 hover:text-fundo hover:rounded-full transition-all"
          target="_blank"
          href="https://www.instagram.com/rhuanguilherme23/?hl=pt-br"
          >Instagram</a
        >
        <span class="w-0.5 h-5 bg-bordas rotate-12"></span>
        <a class="p-2 hover:bg-cinza-100 hover:text-fundo hover:rounded-full transition-all" href=""
          >Sobre mim</a
        >
      </div>

      <button
        data-collapse-toggle="navbar-hamburger"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-texto md:hidden"
        aria-controls="navbar-hamburger"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full" id="navbar-hamburger">
        <ul class="flex flex-col font-medium mt-4 rounded-lg bg-bordas p-1">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rhuanguilherme23/"
              class="block py-2 pl-3 pr-4 text-texto rounded hover:bg-fundo"
              aria-current="page"
              >Linkedin</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/Rhuan-Guilherme"
              class="block py-2 pl-3 pr-4 text-texto rounded hover:bg-fundo"
              >GitHub</a
            >
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/rhuanguilherme23/?hl=pt-br"
              class="block py-2 pl-3 pr-4 text-texto rounded hover:bg-fundo"
              >Instagram</a
            >
          </li>
          <li>
            <a href="#" class="block py-2 pl-3 pr-4 text-texto rounded hover:bg-fundo">Sobre mim</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
