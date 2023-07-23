<script lang="ts" setup>
import { Info } from "@/api/types";

interface Props {
  cdInfo: Info;
}

defineProps<Props>();
</script>

<template>
  <div class="card card-side h-64 w-[488px] bg-base-300 px-5 shadow-xl">
    <div class="card-body px-0" :class="cdInfo.limited ? '' : 'justify-end'">
      <h2 class="card-title h-1/3 justify-center text-base">{{ cdInfo.title }}</h2>
      <div class="mt-5">
        <p>{{ cdInfo.artist }}</p>
        <p>{{ cdInfo.releaseDate }}</p>
        <p>{{ cdInfo.recordNumbers.join(", ") }}</p>
      </div>
      <div class="mt-5 flex justify-center gap-6">
        <div v-if="cdInfo.downloadSiteList.length > 0" class="dropdown dropdown-hover">
          <label tabindex="0" class="download-site btn w-52">ダウンロードサイト</label>
          <ul class="menu dropdown-content rounded-box z-[1] w-auto bg-base-100 p-2 shadow">
            <template v-for="storeSite in cdInfo.downloadSiteList" :key="storeSite">
              <li>
                <a :href="storeSite.url" target="_blank">{{ storeSite.name }} </a>
              </li>
            </template>
          </ul>
        </div>
        <div v-if="cdInfo.purchaseSiteList.length > 0" class="dropdown-hover dropdown">
          <label tabindex="0" class="purchase-site btn w-52">購入サイト</label>
          <ul class="menu dropdown-content rounded-box z-[1] w-auto bg-base-100 p-2 shadow">
            <template v-for="storeSite in cdInfo.purchaseSiteList" :key="storeSite">
              <li>
                <a :href="storeSite.url" target="_blank">{{ storeSite.name }} </a>
              </li>
            </template>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
:root {
  --color-1: #fff68d
  --color-2: #853998
  --color-3: #fa8333
  --color-4: #ff699e
  --color-5: #af011c
  --color-6: #384d98
  --color-7: #008e74
  --color-8: #23120c
}

.btn.download-site {
  background-color: #01a9e8;
}

.btn.purchase-site {
  background-color: #FF73B8;
}
</style>
