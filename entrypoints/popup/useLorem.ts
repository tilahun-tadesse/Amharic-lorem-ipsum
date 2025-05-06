// src/composables/useLorem.ts
import { ref } from "vue";
import amharicLoremIpsumJson from "@/assets/amharic.json";

export function useLorem() {
  const generatedText = ref<string[]>([]);
  const clasicJson = amharicLoremIpsumJson.calsic;
  const marketingJson = amharicLoremIpsumJson.marketing;
  const ictJson = amharicLoremIpsumJson.ict;
  const scienceJson = amharicLoremIpsumJson.science;

    const calsicLorem = (amount: number, option: string) => {
        console.log("option", option);
        if (option == "paragraphs") {
            const maxStartIndex = clasicJson.paragraphs.length - amount;
            const randomIndex = Math.floor(Math.random() * maxStartIndex);

            if (amount > 0) {
                let paragraphs = clasicJson.paragraphs.slice(randomIndex, randomIndex + amount);
                generatedText.value = paragraphs.map((text, index) => (index > 0 ? "\n\n" : "") + text);
            } else {
                generatedText.value = [clasicJson.paragraphs[randomIndex]];
            }
        }
        else if (option == "sentences") {
            const maxStartIndex = clasicJson.phrases.length - amount;
            const randomIndex = Math.floor(Math.random() * maxStartIndex);
            if (amount > 0) {
                let sentences = clasicJson.phrases.slice(randomIndex, randomIndex + amount);
                generatedText.value = sentences.map((text, index) => (index > 0 ? "\n\n" : "") + text);
            } else {
                generatedText.value = [clasicJson.phrases[randomIndex]];
            }
        }
        else if (option == "words") {
            const maxStartIndex = clasicJson.words.length - amount;
            const randomIndex = Math.floor(Math.random() * maxStartIndex);
            if (amount > 0) {
                let words = clasicJson.words.slice(randomIndex, randomIndex + amount);
                generatedText.value = words.map((text, index) => (index > 0 ? "\n\n" : "") + text);
            } else {
                generatedText.value = [clasicJson.words[randomIndex]];
            }
        }
  };

  const marketingText = (amount: number,option:string) => {
    if (option == "paragraphs") {
        const maxStartIndex = marketingJson.paragraphs.length - amount;
        const randomIndex = Math.floor(Math.random() * maxStartIndex);
        if (amount > 0) {
            let paragraphs = marketingJson.paragraphs.slice(randomIndex, randomIndex + amount);
            generatedText.value = paragraphs.map((text, index) => (index > 0 ? "\n\n" : "") + text);
        } else {
            generatedText.value = [marketingJson.paragraphs[randomIndex]];
        }
    }
    else if (option == "sentences") {
        const maxStartIndex = marketingJson.phrases.length - amount;
        const randomIndex = Math.floor(Math.random() * maxStartIndex);
        if (amount > 0) {
            let sentences = marketingJson.phrases.slice(randomIndex, randomIndex + amount);
            generatedText.value = sentences.map((text, index) => (index > 0 ? "\n\n" : "") + text);
        } else {
            generatedText.value = [marketingJson.phrases[randomIndex]];
        }
    }
    else if (option == "words") {
        const maxStartIndex = marketingJson.words.length - amount;
        const randomIndex = Math.floor(Math.random() * maxStartIndex);
        if (amount > 0) {
            let words = marketingJson.words.slice(randomIndex, randomIndex + amount);
            generatedText.value = words.map((text, index) => (index > 0 ? "\n\n" : "") + text);
        } else {
            generatedText.value = [marketingJson.words[randomIndex]];
        }
    }
  };

  const ictText = (amount: number,option:string) => {
    if (option == "paragraphs") {
        const maxStartIndex = ictJson.paragraphs.length - amount;
        const randomIndex = Math.floor(Math.random() * maxStartIndex);
        if (amount > 0) {
            let paragraphs = ictJson.paragraphs.slice(randomIndex, randomIndex + amount);
            generatedText.value = paragraphs.map((text, index) => (index > 0 ? "\n\n" : "") + text);
        } else {
            generatedText.value = [ictJson.paragraphs[randomIndex]];
        }
    }
    else if (option == "sentences") {
        const maxStartIndex = ictJson.phrases.length - amount;
        const randomIndex = Math.floor(Math.random() * maxStartIndex);
        if (amount > 0) {
            let sentences = ictJson.phrases.slice(randomIndex, randomIndex + amount);
            generatedText.value = sentences.map((text, index) => (index > 0 ? "\n\n" : "") + text);
        } else {
            generatedText.value = [ictJson.phrases[randomIndex]];
        }
    }
    else if (option == "words") {
        const maxStartIndex = ictJson.words.length - amount;
        const randomIndex = Math.floor(Math.random() * maxStartIndex);
        if (amount > 0) {
            let words = ictJson.words.slice(randomIndex, randomIndex + amount);
            generatedText.value = words.map((text, index) => (index > 0 ? "\n\n" : "") + text);
        } else {
            generatedText.value = [ictJson.words[randomIndex]];
        }
    }
  };

  const scienceText = (amount: number,option:string) => {
    if (option == "paragraphs") {
        const maxStartIndex = scienceJson.paragraphs.length - amount;
        const randomIndex = Math.floor(Math.random() * maxStartIndex);
        if (amount > 0) {
            let paragraphs = scienceJson.paragraphs.slice(randomIndex, randomIndex + amount);
            generatedText.value = paragraphs.map((text, index) => (index > 0 ? "\n\n" : "") + text);
        } else {
            generatedText.value = [scienceJson.paragraphs[randomIndex]];
        }
    }
    else if (option == "sentences") {
        const maxStartIndex = scienceJson.phrases.length - amount;
        const randomIndex = Math.floor(Math.random() * maxStartIndex);
        if (amount > 0) {
            let sentences = scienceJson.phrases.slice(randomIndex, randomIndex + amount);
            generatedText.value = sentences.map((text, index) => (index > 0 ? "\n\n" : "") + text);
        } else {
            generatedText.value = [scienceJson.phrases[randomIndex]];
        }
    }
    else if (option == "words") {
        const maxStartIndex = scienceJson.words.length - amount;
        const randomIndex = Math.floor(Math.random() * maxStartIndex);
        if (amount > 0) {
            let words = scienceJson.words.slice(randomIndex, randomIndex + amount);
            generatedText.value = words.map((text, index) => (index > 0 ? "\n\n" : "") + text);
        } else {
            generatedText.value = [scienceJson.words[randomIndex]];
        }
    }
      
  };

  const generateText = (type: string, amount: number, option: string) => {
    switch (type) {
      case "classic":
        calsicLorem(amount, option);
        break;
      case "marketing":
        marketingText(amount,option);
        break;
      case "ict":
        ictText(amount,option);
        break;
      case "science":
        scienceText(amount,option);
        break;
      default:
        generatedText.value = [];
    }
  };

  return {
    generatedText,
    generateText,
  };
}
