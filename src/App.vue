<template>
  <Suspense>
    <router-view></router-view>

    <!-- Promiseが解決されるまでfallbackコンテンツを表示 -->
    <template #fallback>Loading...</template>
  </Suspense>
</template>
