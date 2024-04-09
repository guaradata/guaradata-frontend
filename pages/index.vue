<template>
  <div class="w-full home-section">
    <div class="first-section">
      <div class="typed-image-section flex items-stretch">
        <div class="typed-text-section w-full pl-48 mt-32">
          <TypedText />
          <div class="text-center">
            <h1 class="text-important font-bold text-2xl mt-5 p-3 rounded inline-block">
              Ajudamos você a criar soluções na área de dados
            </h1>
          </div>
          <div class="flex justify-center mt-2">
            <Button icon="pi pi-arrow-up-right" label="Visitar o blog" class="btn-blog m-1" rounded>
              <span class="font-bold">
                <NuxtLink to="/blog" class="flex justify-center items-center">
                  Visitar o blog
                  <i class="pi pi-arrow-up-right ml-2" style="font-size: 1rem" />
                </NuxtLink>
              </span>
            </Button>
            <Button icon="pi pi-arrow-up-right" label="Visitar o blog" class="btn-blog m-1" rounded>
              <span class="font-bold">
                <NuxtLink to="/contact" class="flex justify-center items-center">
                  Entre em contato
                  <i class="pi pi-envelope ml-2" style="font-size: 1rem" />
                </NuxtLink>
              </span>
            </Button>
          </div>
        </div>
        <div class="img-container">
          <img src="../assets/img/logos/guaradata-logo-3.svg" alt="">
        </div>
      </div>
    </div>
    <div class="second-section bg-gray-400 p-5">
      <div class="cards-blog-home">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.img-container {
  position: relative;
  width: 50%;
  height: 550px;
  overflow: hidden;
}

img {
  height: 55vh;
  width: auto;
  position: absolute;
  right: 0;
  transform: translateY(25%);
}

.first-section {
  background-image: linear-gradient(to right, rgb(255, 255, 255), #DB7E2C 65%, $global-background);
  height: 550px;
}

.btn-blog {
  background-color: $btn-blog;
  border: none;
  color: white;
}

.btn-blog:hover {
  background-color: white;
  color: black;
}

.cards-blog-home {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
}

@media (max-width: 1500px) {
  .typed-text-section {
    padding-left: 150px;
  }

  img {
    transform: translateY(20%);
  }
}

@media (max-width: 1200px) {
  .typed-text-section {
    padding-left: 100px;
  }

  img {
    transform: translateY(25%);
  }
}

@media (max-width: 1015px) {
  .typed-text-section {
    padding-left: 85px;
  }

  img {
    transform: translateY(30%);
  }

  .img-container {
    width: 35%;
  }
}

@media (max-width: 900px) {
  .first-section {
    background-image: linear-gradient(to right, rgb(255, 255, 255), #DB7E2C 65%, $global-background-soft);
  }

  img {
    transform: translateY(65%) translateX(40%);
  }

  .typed-text-section {
    width: 100%;
    padding-left: 0px;
    margin-top: 150px;
    text-align: center;
  }

  .img-container img {
    max-width: 100%;
    height: auto;
  }
}

@media (max-width: 685px) {

  .typed-image-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-container {
    display: none;
  }
}
</style>
