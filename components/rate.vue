<script setup lang="ts">
  import { ref } from "vue";
  import { Icon } from "@iconify/vue";

  const showRate = ref(false);
  const hoveredIndex = ref<number>(-1);

  // Detect browser type
  const isFirefox = () => {
    console.log("userAgent", navigator.userAgent);
    return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  };

  const rating = (index: number) => {
    if (isFirefox()) {
      window.open(
        "https://addons.mozilla.org/en-US/firefox/addon/%E1%8B%B0%E1%89%A3%E1%88%8D%E1%89%85-debalq/",
        "_blank"
      );
    } else {
      // Default to Chrome store
      window.open(
        "https://chromewebstore.google.com/detail/%E1%8B%B0%E1%89%A3%E1%88%8D%E1%89%85-debalq/dapeihdfmfopmmaggleddellioaecnbm/reviews?hl=en-US",
        "_blank"
      );
    }

    hoveredIndex.value = index;
    showRate.value = false;
  };
  onMounted(() => {
    console.log("usrerAgent", navigator.userAgent);
  });
</script>
<template>
  <section class="w-full">
    <div
      @click="showRate = true"
      class="flex cursor-pointer group w-full gap-x-2 justify-center items-center"
    >
      <span
        class="text-sm group-hover:text-blue-900 text-blue-600 underline underline-offset-2"
        >Rate us</span
      >
      <Icon icon="noto:red-heart" class="size-4 group-hover:scale-110"></Icon>
    </div>
    <div
      v-if="showRate"
      class="flex relative justify-center items-center gap-x-1 mt-2"
    >
      <div
        v-for="i in 5"
        :key="i"
        @mouseover="hoveredIndex = i"
        @mouseleave="hoveredIndex = -1"
        @click="rating(i)"
      >
        <Icon
          icon="mingcute:star-fill"
          :class="{
            'text-orange-500': i <= hoveredIndex,
            'text-yellow-400': i > hoveredIndex,
          }"
          :inline="true"
          class="size-6 text-gray-200 cursor-pointer"
        />
      </div>
      <span class="text-sm absolute invisible"> thanks for your Rating! </span>
    </div>
  </section>
</template>
