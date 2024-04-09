<template>
  <div class="card top-0 w-full">
    <Menubar :model="items" class="menu">
      <template #start>
        <NuxtLink to="/">
          <div class="brand inline-block flex items-center justify-center p-0">
            <span><img class="w-14" src="~/assets/img/logos/guaradata-logo-1.svg"></span>
            <!-- <h1 class="font-brand text-white font-bold text-2xl mt-0 p-0">
              guaradata
            </h1> -->
            <!-- <h2 class="bg-white p-0.5 rounded text-black font-bold text-xl font-brand mt-0">
              guara<span class="font-brand-highlight">data</span>
            </h2> -->
          </div>
        </NuxtLink>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <NuxtLink v-ripple :to="item.route" class="flex align-items-center" v-bind="props.action">
          <span class="font-bold" :class="item.icon" />
          <span class="ml-2 font-bold text-xl">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <i v-if="hasSubmenu"
            :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]" />
        </NuxtLink>
      </template>
      <template #end>
        <Button severity="danger" icon="pi pi-arrow-up-right" label="Visitar o blog" class="btn-contact m-2" rounded>
          <span class="font-bold">
            <NuxtLink to="/contact" class="flex justify-center items-center">
              Contato
            </NuxtLink>
          </span>
        </Button>
      </template>
    </Menubar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Sobre',
    icon: 'pi pi-flag',
    route: '/about'
  },
  {
    label: 'Blog',
    icon: 'pi pi-book',
    route: '/blog'
  },
  {
    label: 'Projetos',
    icon: 'pi pi-box',
    items: [
      {
        label: 'Engenharia de Dados',
        icon: 'pi pi-cog',
        route: '/data-engineering'
      },
      {
        label: 'Ciência de dados',
        icon: 'pi pi-chart-bar',
        route: '/data-science'
      },
      {
        label: 'Outros',
        icon: 'pi pi-bolt',
        items: [
          {
            label: 'Frontend',
            icon: 'pi pi-palette',
            route: '/frontend'
          },
          {
            label: 'Backend',
            icon: 'pi pi-server',
            route: '/backend'
          }
        ]
      }
    ]
  }
])
</script>

<style lang="scss" scoped>
.brand {
  padding: 5px;
}

.btn-contact {
  background-color: $contact-color;
  border: none;
  color: black;
}

.btn-contact:hover {
  background-color: white;
  color: black;
}
</style>
