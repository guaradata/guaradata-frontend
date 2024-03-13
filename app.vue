<template>
  <div id="app" class="w-full">
    <!--Menu-->
    <div class="w-full">
      <NavBar />
    </div>
    <!--Body-->
    <div class="wrapper w-full px-6">
      <NuxtPage />
    </div>
    <!--Footer-->
    <div class="footer w-full">
      <GlobalFooter />
    </div>
  </div>
</template>
<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container-fluid {
  margin-top: 110px;
  margin-bottom: 20px;
}

.wrapper {
  flex: 1;
}

.footer {
  margin-top: auto;
}
</style>
