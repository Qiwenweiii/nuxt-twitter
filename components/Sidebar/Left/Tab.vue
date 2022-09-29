<template>
  <div
    class="flex items-center p-3 w-min rounded-full hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white transition duration-300"
  >
    <div class="w-6 h-6 text-dark">
      <slot name="icon" />
    </div>
    <div class="ml-2 text-xl hidden xl:block" :class="textClasses">
      <slot name="name" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});

const textClasses = computed(() =>
  props.active ? 'font-semibold' : 'font-normal'
);
</script>
