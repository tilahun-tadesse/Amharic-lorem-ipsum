<script lang="ts" setup>
  import userInput from "@/components/userInput.vue";
  import { useLorem } from "./useLorem";
  let amount = ref<number>(3);
  let type = ref<string>("classic");
  let option = ref<string>("paragraphs");
  const amharicLoremIpsum = ref({
    amount,
    type,
    option,
  });

  const { generateText, generatedText } = useLorem();

  const onGenerateText = () => {
    generateText(
      amharicLoremIpsum.value.type,
      amharicLoremIpsum.value.amount,
      amharicLoremIpsum.value.option
    );
  };
</script>

<template>
  <section
    class="flex flex-col justify-start items-start p-3 h-screen w-[400px]"
  >
    <p
      class="text-lg flex w-full justify-between items-center gap-x-2 font-semibold"
    >
      <span>ደባልቅ </span>
      <span class="text-sm text-green-600">Amharic Lorem Ipsum </span>
    </p>

    <userInput
      v-model:amharic-lorem-ipsum="amharicLoremIpsum"
      :generated-text-props="generatedText"
      @generateText="
        () => {
          onGenerateText();
        }
      "
    />
  </section>
</template>

<style scoped></style>
