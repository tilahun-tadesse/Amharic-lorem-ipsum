<script lang="ts" setup>
  import { Icon } from "@iconify/vue";
  import Rate from "@/components/rate.vue";
  const props = defineProps({
    amharicLoremIpsum: {
      type: Object,
      required: true,
    },
    generatedTextProps: {
      type: [String, Array],
      required: true,
    },
  });
  const _amharicLoremIpsum = props.amharicLoremIpsum;
  const copied = ref(false);
  const textArea = ref<HTMLTextAreaElement | null>(null);
  const generatedText = computed(() => {
    return Array.isArray(props.generatedTextProps)
      ? props.generatedTextProps.join(" ")
      : props.generatedTextProps;
  });

  const emit = defineEmits(["generateText", "update:amharicLoremIpsum"]);
  const generateText = () => {
    emit("generateText");
    emit("update:amharicLoremIpsum", _amharicLoremIpsum);
  };
  const copieText = () => {
    navigator.clipboard.writeText(
      Array.isArray(generatedText.value)
        ? generatedText.value.join(" ")
        : generatedText.value
    );
    if (textArea.value) {
      textArea.value.select();
      textArea.value.setSelectionRange(0, 99999);
    }
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  };
</script>
<template>
  <div
    class="flex flex-col justify-start items-start p-3 gap-y-5 h-screen w-full"
  >
    <div class="w-full flex gap-x-3 ring-1 ring-gray-300 rounded-md p-2">
      <select
        v-model="_amharicLoremIpsum.type"
        class="w-full text-[0.9rem] font-medium"
      >
        <option value="classic">Classic Lorem Ipsum</option>
        <option value="marketing">Marketing Text</option>
        <option value="ict">Ict Text</option>
        <option value="science">Science Text</option>
      </select>
    </div>
    <div class="w-full flex gap-x-3">
      <input
        v-model="_amharicLoremIpsum.amount"
        class="w-[70px] ring-1 font-medium ring-gray-300 rounded-md p-2"
        type="number"
        max="10"
      />
      <div class="w-full flex gap-x-3 ring-1 ring-gray-300 rounded-md p-2">
        <select v-model="_amharicLoremIpsum.option" class="w-full font-medium">
          <option value="paragraphs">Paragraph</option>
          <option value="sentences">Sentence</option>
          <option value="words">Word</option>
        </select>
      </div>
    </div>

    <div class="w-full cursor-pointer flex gap-x-3">
      <button
        type="button"
        @click="generateText"
        class="w-full flex items-center justify-center gap-x-3 text-[1rem] bg-green-600 text-white font-semibold rounded-md p-2"
      >
        <Icon icon="streamline:ai-generate-variation-spark"> </Icon>
        Generate Text
      </button>
    </div>
    <div class="w-full flex gap-x-3">
      <textarea
        ref="textArea"
        v-model="generatedText"
        class="w-full h-[200px] ring-1 font-medium ring-gray-300 rounded-md p-2"
      />
    </div>
    <div
      v-if="generatedText.length > 0"
      class="w-full cursor-pointer flex gap-x-3"
    >
      <button
        @click="copieText"
        type="button"
        class="w-full flex items-center justify-center gap-x-3 text-[1rem] ring-1 ring-green-600 text-green-600 font-semibold rounded-md p-2"
      >
        <Icon icon="mingcute:copy-line"> </Icon>
        {{ copied ? "Copied" : "Copy" }}
      </button>
    </div>
    <Rate />
  </div>
</template>
