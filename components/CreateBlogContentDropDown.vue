<template>
  <div class="flex justify-center">
    <Dropdown v-model="selectedCountry" :options="countries" filter option-label="name"
      placeholder="Selecione a categoria" class="w-full">
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex align-items-center">
          <img :alt="slotProps.value.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`mr-2 flag flag-${slotProps.value.code.toLowerCase()}`" style="width: 18px">
          <div>{{ slotProps.value.name }}</div>
        </div>
        <span v-else>
          {{ slotProps.placeholder }}
        </span>
      </template>
      <template #option="slotProps">
        <div class="flex align-items-center">
          <img :alt="slotProps.option.label" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`mr-2 flag flag-${slotProps.option.code.toLowerCase()}`" style="width: 18px">
          <div>{{ slotProps.option.name }}</div>
        </div>
      </template>
    </Dropdown>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedCountry = ref()
const countries = ref([
  { name: 'Aprendizado de máquina', code: 'AM' },
  { name: 'Estatística', code: 'Estat' },
  { name: 'Engenharia de dados', code: 'ED' }

])
</script>
