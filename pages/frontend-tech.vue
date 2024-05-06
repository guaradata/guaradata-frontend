<template>
  <div class="tech-about mt-12">
    <div class="first-section text-center">
      <h1 class="font-bold text-6xl m-5 font-brand">
        Guara<span class="font-brand-highlight">data</span>
        Front-end
      </h1>
      <p class="font-bold text-lg pl-12 pr-12">
        O Blog Guaradata foi cuidadosamente desenvolvido utilizando as mais avançadas tecnologias front-end
        disponíveis. Sua estrutura foi cuidadosamente concebida para oferecer uma experiência de usuário excepcional,
        combinando elegância e funcionalidade. Desde sua interface intuitiva até sua velocidade de carregamento
        otimizada, cada aspecto foi refinado para garantir que os visitantes desfrutem de uma navegação suave e
        envolvente. Com uma estética moderna e uma arquitetura robusta, o Blog Guaradata representa o compromisso com a
        excelência técnica e a inovação na apresentação de conteúdo online.
      </p>
    </div>
    <div class="second-section w-full flex justify-center">
      <div class="img p-5">
        <NuxtLink to="https://nuxt.com/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original-wordmark.svg">
        </NuxtLink>
      </div>
      <div class="img p-5">
        <NuxtLink to="https://vuejs.org/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original-wordmark.svg">
        </NuxtLink>
      </div>
      <div class="img p-5">
        <NuxtLink to="https://www.typescriptlang.org/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg">
        </NuxtLink>
      </div>
      <div class="img p-5">
        <NuxtLink to="https://tailwindcss.com/">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-plain-wordmark.svg">
        </NuxtLink>
      </div>
    </div>
    <div class="second-section w-full flex justify-center">
      <div class="img p-5">
        <NuxtLink to="https://sass-lang.com/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg">
        </NuxtLink>
      </div>
      <div class="img p-5">
        <NuxtLink to="https://eslint.org/">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original-wordmark.svg">
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
img {
  width: 300px;
  padding: 15px;
  border: 5px solid #7A2A0A;
  border-radius: 15%;
}

img:hover {
  border: 5px solid #000000;
  background-color: rgba(192, 192, 192, 0.431);
  cursor: pointer;
}

.cards-blog-home {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
}

@media (max-width: 1000px) {
  .second-section {
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }
}
</style>
