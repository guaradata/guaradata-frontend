<template>
  <div class="card fixed-top">
    <Menubar :model="items">
      <template #start>
        <NuxtLink to="/">
          <img class="w-16 p-1 mr-4 ml-4" src="~/assets/img/logos/guaradata-logo.png">
        </NuxtLink>
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <i v-if="hasSubmenu"
            :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]" />
        </a>
      </template>
      <template #end>
        <div class="flex align-items-center gap-1">
          <Button label="Contato" severity="success" class="mr-4" />
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
    icon: 'pi pi-home'
  },
  {
    label: 'Sobre',
    icon: 'pi pi-check-circle'
  },
  {
    label: 'Blog',
    icon: 'pi pi-book'
  },
  {
    label: 'Projetos',
    icon: 'pi pi-box',
    items: [
      {
        label: 'Engenharia de Dados',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Ciência de dados',
        icon: 'pi pi-server'
      },
      {
        label: 'Frontend',
        icon: 'pi pi-pencil'
      },
      {
        separator: true
      },
      {
        label: 'Outros',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette',
            badge: 2
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette',
            badge: 3
          }
        ]
      }
    ]
  }
])
</script>
