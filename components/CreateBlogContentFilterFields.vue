<template>
  <div class="flex justify-center">
    <MultiSelect v-model="selectTags" :options="tagsToSelect" filter option-label="name" placeholder="Selecione as tags"
      :max-selected-labels="3" class="w-full" />
  </div>
</template>

<script setup>
const selectTags = ref();
const tagsToSelect = ref([
  { name: 'Aprendizado de máquina', code: 'ML' },
  { name: 'Ciência de dados', code: 'DS' },
  { name: 'Engenharia de dados', code: 'DE' },
  { name: 'ETL', code: 'ETL' },
  { name: 'Python', code: 'Python' }
]);
</script>
