<script lang="ts" setup>
  import userInput from "@/components/userInput.vue";
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
  import { useLorem } from "./useLorem";
  import { englishLorem } from "./englishLorem";
  let amount = ref<number>(3);
  let type = ref<string>("classic");
  let option = ref<string>("paragraphs");
  const isHovered = ref<boolean>(false);
  const LoremIpsum = ref({
    amount,
    type,
    option,
  });

  const { generateText, generatedText } = useLorem();
  const {
    generateText: englishGenerateText,
    generatedText: englishGeneratedText,
  } = englishLorem();
  const onGenerateText = () => {
    if (selectedTab.value == 0) {
      generateText(
        LoremIpsum.value.type,
        LoremIpsum.value.amount,
        LoremIpsum.value.option
      );
    } else {
      englishGenerateText(
        LoremIpsum.value.type,
        LoremIpsum.value.amount,
        LoremIpsum.value.option
      );
    }
  };
  const selectedTab = ref(0);

  function changeTab(index: number) {
    selectedTab.value = index;
  }
  watch(selectedTab, () => {
    generatedText.value = [];
    englishGeneratedText.value = [];
  });
</script>

<template>
  <section
    class="flex flex-col justify-start items-start p-3 h-screen w-[420px]"
    :class="
      englishGeneratedText.length > 0 || generatedText.length > 0
        ? 'min-h-[590px]'
        : 'min-h-[510px]'
    "
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Your existing content -->
    <div
      class="text-lg flex w-full justify-between items-center gap-x-2 font-semibold"
    >
      <span v-if="selectedTab == 1">Debalq</span>
      <span v-else>ደባልቅ </span>
      <div class="flex justify-center items-center text-yellow-600 gap-x-3">
        <TabGroup :selectedIndex="selectedTab" @change="changeTab">
          <TabList
            class="flex text-sm justify-center items-center gap-x-8 focus:outline-none"
            :class="[selectedTab === 0 ? 'text-green-600' : 'text-yellow-600']"
          >
            <Tab
              class="focus:outline-none cursor-pointer group relative"
              :class="
                selectedTab === 0
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-yellow-600'
              "
            >
              Amharic
              <!-- <span class="absolute invisible group-hover:visible top-0 left-4">
                amharic lorem ipsum
              </span> -->
            </Tab>
            <Tab
              class="focus:outline-none cursor-pointer"
              :class="
                selectedTab === 1
                  ? 'text-green-600 border-b-2 border-green-600'
                  : 'text-yellow-600'
              "
            >
              English
            </Tab>
          </TabList>
          <TabPanels></TabPanels>
        </TabGroup>
      </div>
      <span v-if="selectedTab == 1" class="text-sm text-yellow-600"
        >English Lorem Ipsum</span
      >
      <span v-else class="text-sm text-green-600">Amharic Lorem Ipsum</span>
    </div>

    <userInput
      v-model:amharic-lorem-ipsum="LoremIpsum"
      :generated-text-props="
        selectedTab == 1 ? englishGeneratedText : generatedText
      "
      @generateText="
        () => {
          onGenerateText();
        }
      "
    />
  </section>
</template>
