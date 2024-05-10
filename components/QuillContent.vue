<template>
  <div>
    <div id="quillContent" />
  </div>
</template>

<script setup>

const props = defineProps({
  editorContent: {
    type: String,
    required: true
  }
})

const editorContent = ref(props.editorContent)

let quillInstance

onMounted(async () => {
  if (process.client) {
    const Quill = (await import('quill')).default
    quillInstance = new Quill('#quillContent', {
      readOnly: true,
      theme: 'bubble',
      modules: {
        toolbar: null
      }
    })
    quillInstance.setContents(editorContent.value)
  }
})

watch(() => props.editorContent, (newValue) => {
  if (newValue !== editorContent.value) {
    editorContent.value = newValue
    quillInstance.setContents(JSON.parse(editorContent.value))
  }
})
</script>

<style>
#quillContent {
  height: 300px;
}
</style>
