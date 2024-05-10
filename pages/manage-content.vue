<template>
  <div class="flex mt-4">
    <div class="firstSection">
      <SideBarMenu v-if="$route.path.includes('/manage-content')" />
    </div>
    <div class="secondSection">
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.firstSection {
  background-color: #ffff;
  height: auto;
  max-height: 450px;
  width: 20%;
  padding: 15px 15px 15px 15px;
  overflow: hidden;
  margin: 2% 2% 2% 2%;
  border-radius: 25px;
  border: 2px solid #e6e6e6;

  @media (max-width: 1060px) {
    width: 100%;
    margin: 20px 0px;
  }
}

.secondSection {
  background-color: #fff;
  height: auto;
  width: 80%;
  margin: 2% 2% 2% 2%;
  border-radius: 3%;
  padding: 15px 15px 15px 15px;
  overflow: hidden;
  margin: 2% 0% 2% 2%;

  @media (max-width: 1060px) {
    height: auto;
    background-position: top;
    width: 100%;
  }
}
</style>
