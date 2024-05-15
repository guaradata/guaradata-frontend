<template>
  <div class="card">
    <Stepper linear orientation="horizontal">
      <StepperPanel>
        <template #header="{ index, active }">
          <span
            :class="['rounded-lg p-3 border-2 w-10rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
            <i class="pi pi-cog" :class="active ? 'pi-spin' : ''" style="font-size: 1.5rem" />
          </span>
        </template>
        <template #content="{ nextCallback }">
          <h1 class="text-black text-xl p-5 font-bold">
            Preencha as informações iniciais
          </h1>
          <div class="flex flex-col justify-content-center">
            <div class="border-4 border-dashed p-5">
              <p class="pt-3 m-1 font-bold text-lg">
                Título do texto:
              </p>
              <input id="title" v-model="titleInput" type="text" placeholder="Digite o título do texto"
                class="w-full border-2 p-2 m-1">
              <p class="pt-3 m-1 font-bold text-lg">
                Resumo do texto:
              </p>
              <CreateBlogContentTextArea :text-area="contentSummaryInput" class="w-full border-2 p-2 m-1"
                @update:text-area="updateTextArea" />
              <p class="pt-3 m-1 font-bold text-lg">
                Gategoria do texto:
              </p>
              <CreateBlogContentDropDown :selected-country="contentCategory" class="w-full m-1"
                @update:selected-country="updateContentCategory" />
            </div>
          </div>
          <div class="flex py-4">
            <Button label="Próximo" class="btn-stepper m-1" rounded @click="validateForm(nextCallback)" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel>
        <template #header="{ index, active }">
          <span
            :class="['rounded-lg p-3 border-2 w-10rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
            <i class="pi pi-star" :class="active ? 'pi-spin' : ''" style="font-size: 1.5rem" />
          </span>
        </template>
        <template #content="{ prevCallback, nextCallback }">
          <h1 class="text-black text-xl p-5 font-bold">
            Escreva seu conteúdo
          </h1>
          <div class="flex flex-col">
            <div class="border-4 border-dashed p-5">
              <QuillEditor :editor-content="initialContent" :read-only="false" @update:editor-content="updateContent" />
              <div class="flex py-4">
                <Button label="Mostrar conteúdo" class="btn-stepper m-1" rounded
                  :style="{ 'display': showContent ? 'none' : 'block' }" @click="switchShowContent" />
                <Button label="Ocultar conteúdo" class="btn-stepper m-1" rounded
                  :style="{ 'display': showContent ? 'block' : 'none' }" @click="switchShowContent" />
              </div>
              {{ JSON.stringify(initialContent) }}
              <QuillContent :style="{ display: showContent ? 'block' : 'none' }" :editor-content="initialContent"
                id-content="1" />
            </div>
          </div>
          <div class="flex py-4">
            <Button label="Voltar" severity="secondary" class="btn-stepper m-1" rounded @click="prevCallback" />
            <Button label="Próximo" severity="secondary" class="btn-stepper m-1" rounded @click="nextCallback" />
          </div>
        </template>
      </StepperPanel>
      <StepperPanel>
        <template #header="{ index, active }">
          <span
            :class="['rounded-lg p-3 border-2 w-10rem h-3rem inline-flex align-items-center justify-content-center', { 'bg-primary border-primary': index <= active, 'surface-border': index > active }]">
            <i class="pi pi-sync" :class="active ? 'pi-spin' : ''" style="font-size: 1.5rem" />
          </span>
        </template>
        <template #content="{ prevCallback }">
          <h1 class="text-black text-xl p-5 font-bold">
            Revise o conteúdo
          </h1>
          <div class="flex flex-col">
            <div class="border-4 border-dashed p-5">
              <QuillContent :editor-content="initialContent" id-content="2" @update:editor-content="updateContent" />
            </div>
          </div>
          <div class="flex py-4">
            <Button label="Voltar" severity="secondary" class="btn-stepper m-1" rounded @click="prevCallback" />
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

const updateTextArea = (newContent) => {
  contentSummaryInput.value = newContent
}

const updateContentCategory = (newContent) => {
  contentCategory.value = newContent.name
}

const validateForm = (nextCallback) => {
  console.log(titleInput.value)
  console.log(contentSummaryInput.value)
  console.log(contentCategory.value)
  nextCallback()
}

const initialContent = ref('')
const showContent = ref(false)

const updateContent = (newContent) => {
  initialContent.value = newContent
}

const switchShowContent = () => {
  showContent.value = !showContent.value
}

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
  border-radius: 5px;
}

input::placeholder {
  padding-left: 3px;
  color: #999;
  font-style: italic;
  opacity: 1;
}

#content-summary {
  height: 150px;
}

#content-summary::placeholder {
  margin: 0px;
}
</style>
