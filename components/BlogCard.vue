<template>
  <NuxtLink to="/blog" class="flex justify-center items-center">
    <Card style="overflow: hidden" class="card m-2">
      <template #header>
        <img alt="user header" src="https://primefaces.org/cdn/primevue/images/usercard.png">
      </template>
      <template #title>
        Blog content
      </template>
      <template #subtitle>
        Blog content subtitle
      </template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
          deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
          neque
          quas!
        </p>
      </template>
      <template #footer>
        <div class="flex justify-center items-center">
          <Button severity="null" icon="pi pi-arrow-up-right" label="Visitar o blog" class="btn-go-blog m-1" rounded>
            <span class="font-bold flex justify-center items-center">
              Ler conteúdo
              <i class="icon pi pi-spin pi-cog ml-2" style="font-size: 1rem" />
            </span>
          </Button>
        </div>
      </template>
    </Card>
  </NuxtLink>
</template>

<script setup>
</script>
<style lang="scss" scoped>
.card {
  width: 25em;
}

.btn-go-blog {
  border: solid 2px;
}

.btn-go-blog:hover {
  background-color: white;
  color: black;
}

@media (max-width: 465px) {
  .card {
    width: 20em;
  }
}
</style>
