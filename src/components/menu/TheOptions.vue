<template>
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
                ><img class="w-full" src="../img/brazil.svg" alt="Bandeira do Brasil"></button>
              </li>
              <li>
                <button
                  class="peer w-8 h-8 md:w-10 md:h-10 bg-preencimento rounded-full border-2 hover:bg-fundo transition-all border-bordas flex items-center justify-center bg-cover bg-center"
                ><img class="w-full" src="../img/united states.svg" alt="Bandeira do Estados Unidos"></button>
              </li>
              <li>
                <button
                  class="peer w-8 h-8 md:w-10 md:h-10 bg-preencimento rounded-full border-2 hover:bg-fundo transition-all border-bordas flex items-center justify-center bg-cover bg-center"
                ><img class="w-full" src="../img/spain.svg" alt="Bandeira da Espanha"></button>
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
</template>