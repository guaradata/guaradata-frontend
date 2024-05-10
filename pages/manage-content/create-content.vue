<template>
  <div class="">
    <div class="">
      <QuillEditor :editor-content="initialContent" :read-only="false" @update:editor-content="updateContent" />
    </div>
    <QuillContent class="mt-52" :editor-content="initialContent" />
  </div>
</template>

<script setup>
import 'quill/dist/quill.core.css'
const initialContent = ref('')
const response = ref(null)
const updateContent = (newContent) => {
  initialContent.value = newContent
}
const createContent = () => {
  const tempDiv = document.querySelector('#blogContent')
  if (tempDiv) {
    tempDiv.innerHTML = response.value.content
  }
}

watchEffect(() => {
  if (response.value !== null) {
    createContent()
  }
})

const fetchData = async () => {
  const { data } = await useFetch('http://localhost:5000/blogcontents/663c0330fac3368569efb3ba', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  response.value = { ...data.value }
}
fetchData()

</script>
<style scoped></style>
