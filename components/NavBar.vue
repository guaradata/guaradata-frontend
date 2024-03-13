<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <img class="w-16 p-1 mr-4 ml-4" src="~/assets/img/logos/guaradata-logo.png">
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex align-items-center" v-bind="props.action">
          <span v-if="item.label !== 'Contato'" :class="item.icon" />
          <span v-if="item.label === 'Contato'" class="p-2"><Button label="Contato" severity="success" /></span>
          <span v-if="item.label !== 'Contato'" class="ml-2">{{ item.label }}</span>
          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
      item.shortcut }}</span>
          <i v-if="hasSubmenu"
            :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]" />
        </a>
      </template>
      <template #end>
        <div class="flex align-items-center gap-1">
          <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
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
    label: 'Blog',
    icon: 'pi pi-book'
  },
  {
    label: 'Projetos',
    icon: 'pi pi-box',
    items: [
      {
        label: 'Core',
        icon: 'pi pi-bolt',
        shortcut: '⌘+S'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server',
        shortcut: '⌘+B'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil',
        shortcut: '⌘+U'
      },
      {
        separator: true
      },
      {
        label: 'Templates',
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
  },
  {
    label: 'Sobre',
    icon: 'pi pi-book'
  },
  {
    label: 'Contato',
    icon: 'pi pi-envelope'
  }
])
</script>
