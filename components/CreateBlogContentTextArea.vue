<template>
  <div class="text-area-container">
    <textarea v-model="textArea" class="text-area" placeholder="Digite o resumo do texto" />
  </div>
</template>

<script setup>
const props = defineProps({
  textArea: {
    type: String,
    required: true
  }
})

const emits = defineEmits(['update:textArea'])
const textArea = ref(props.textArea)

watch(() => textArea.value, () => {
  emits('update:textArea', textArea.value)
})
</script>
<style lang="scss" scoped>
.text-area-container {
  width: 100%;
  height: 200px;
  border: 1px solid black;
  position: relative;
  border-radius: 5px;
}

.text-area {
  width: 100%;
  height: 100%;
  resize: none;
  padding: 10px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 5px;
}

.text-area::placeholder {
  padding-left: 3px;
  color: #999;
  font-style: italic;
  opacity: 1;
}
</style>
