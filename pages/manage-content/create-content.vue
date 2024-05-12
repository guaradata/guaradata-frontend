<template>
  <div class="card">
    <Stepper orientation="vertical">
      <StepperPanel>
        <template #content="{ nextCallback }">
          <h1 class="text-black text-xl p-5 font-bold">
            Preencha as informações iniciais
          </h1>
          <div class="flex flex-col">
            <div class="border-2 border-dashed p-5">
              <p>Título do texto:</p>
              <input id="title" v-model="titleInput" type="text" placeholder="Digite o título do texto"
                class="w-full border-2 p-2 m-1">
              <input v-model="contentSummaryInput" type="contentSummary" placeholder="Digite o resumo do texto"
                class="w-full border-2 p-2 m-1">
              <CreateBlogContentDropDown :selected-country="contentCategory" class="w-full m-1"
                @update:selected-country="updateContentCategory" />
            </div>
          </div>
          <div class="flex py-4">
            <Button label="Próximo" class="btn-stepper" rounded @click="validateForm(nextCallback)" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel>
        <template #content="{ prevCallback }">
          <h1 class="text-black text-xl p-5 font-bold">
            Escreva seu conteúdo
          </h1>
          <div class="flex flex-col">
            <div class="border-2 border-dashed p-5">
              <QuillEditor :editor-content="initialContent" :read-only="false" @update:editor-content="updateContent" />
            </div>
            <QuillContent v-if="showContent" :editor-content="initialContent" />
          </div>
          <div class="flex py-4">
            <Button label="Mostrar conteúdo" class="btn-stepper" rounded @click="switchShowContent" />
          </div>
          <div class="flex py-4">
            <Button label="Back" severity="secondary" class="btn-stepper" rounded @click="prevCallback" />
          </div>
        </template>
      </StepperPanel>
    </Stepper>
  </div>
</template>

<script setup>
import Stepper from 'primevue/stepper'
import StepperPanel from 'primevue/stepperpanel'

const titleInput = ref('')
const contentSummaryInput = ref('')
const contentCategory = ref('')

const updateContentCategory = (newContent) => {
  contentCategory.value = newContent.name
}

const validateForm = (nextCallback) => {
  console.log(titleInput.value)
  console.log(contentSummaryInput.value)
  console.log(contentCategory.value)
  nextCallback()
}

const response = ref(null)
const initialContent = ref('')
const showContent = ref(false)

const updateContent = (newContent) => {
  initialContent.value = newContent
}

const createContent = () => {
  const tempDiv = document.querySelector('#blogContent')
  if (tempDiv) {
    tempDiv.innerHTML = response.value.content
  }
}

const switchShowContent = () => {
  showContent.value = !showContent.value
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

<style lang="scss" scoped>
.header {
  color: black;
}

.btn-stepper {
  background-color: $btn-blog;
  border: none;
  color: white;
}

input {
  padding-left: 15px;
}

input::placeholder {
  padding-left: 3px;
  color: #999;
  font-style: italic;
  opacity: 1;
}
</style>
