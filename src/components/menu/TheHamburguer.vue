<template>
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
</template>