<script setup lang="ts">
import FooterView from "@/components/FooterView.vue";
import HeaderView from "@/components/HeaderView.vue";
import CardItem from "@/components/CardItem.vue";

import { getRes } from "@/api";
import { Info, JsonData } from "@/api/types";

let cdInfoList: Info[];
try {
  const jsonData: JsonData = await getRes();
  cdInfoList = jsonData.info;
} catch (error) {
  console.error(error);
}
</script>

<template>
  <HeaderView></HeaderView>
  <main class="container mx-auto flex items-center justify-center">
    <section>
      <div class="grid gap-5 sm:grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
        <template v-for="cdInfo in cdInfoList" :key="cdInfo.id">
          <CardItem :cd-info="cdInfo" />
        </template>
      </div>
    </section>
  </main>
  <FooterView></FooterView>
</template>
