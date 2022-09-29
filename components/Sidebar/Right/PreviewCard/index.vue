<template>
  <div
    class="m-2 border bg-gray-50 dark:bg-dim-700 rounded-2xl border-white-200 dark:border-gray-700 overflow-hidden"
  >
    <h1
      class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white dark:border-gray-700"
    >
      {{ props.title }}
    </h1>
    <slot />

    <div
      class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300 transition"
    >
      Show more
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
