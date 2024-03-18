<template>
  <div class="card top-0 w-full">
    <Menubar :model="items">
      <template #start>
        <NuxtLink to="/">
          <div class="brand mb-0 inline-block flex items-center justify-center p-0">
            <span><img class="w-14 p-0.5" src="~/assets/img/logos/guaradata-logo-2.png"></span>
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
        <div class="flex align-items-center gap-1">
          <NuxtLink to="/contact">
            <Button label="Contato" class="btn mr-4" />
          </NuxtLink>
        </div>
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
    icon: 'pi pi-check-circle',
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
        separator: true
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

.btn {
  background-color: $contact-color;
  border: none;
  color: black;
}
</style>
