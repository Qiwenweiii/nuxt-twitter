<template>
  <div class="flex flex-col">
    <!-- What happen -->
    <SidebarRightPreviewCard title="What's happening">
      <SidebarRightPreviewCardItem
        v-for="item in happeningItems"
        :key="item.id"
      >
        <div>
          <h2 class="font-bold text-gray-800 text-md dark:text-white">
            {{ item.title }}
          </h2>
          <p class="text-xs text-gray-400">{{ item.count }}</p>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>

    <!-- Who to follow -->
    <SidebarRightPreviewCard title="Who to follow">
      <SidebarRightPreviewCardItem v-for="item in followItems" :key="item.id">
        <div class="flex justify-between items-center p-2">
          <div class="flex">
            <img
              class="w-10 h-10 rounded-full"
              :src="item.img"
              :alt="item.name"
            />
            <div class="flex flex-col ml-2">
              <h1 class="text-sm font-bold text-gray-900 dark:text-white">
                {{ item.name }}
              </h1>
              <p class="text-xs text-gray-400">{{ item.handle }}</p>
            </div>
          </div>
          <div>
            <button
              class="px-4 py-2 text-xs font-bold rounded-full text-white dark:text-black bg-black dark:bg-white"
            >
              Follow
            </button>
          </div>
        </div>
      </SidebarRightPreviewCardItem>
    </SidebarRightPreviewCard>
  </div>
</template>

<script setup>
const happeningItems = ref([
  { id: 1, title: 'SpaceX', count: '18.8k Tweets' },
  { id: 2, title: 'SpaceX', count: '18.8k Tweets' },
  { id: 3, title: 'SpaceX', count: '18.8k Tweets' },
]);

const followItems = ref([
  {
    id: 1,
    name: 'Joe Biden',
    handle: '@JoeBiden',
    img: 'https://cdn6-banquan.ituchong.com/weili/image/l/918020139693113374.jpeg',
  },
  {
    id: 2,
    name: 'Joe Biden',
    handle: '@JoeBiden',
    img: 'https://cdn6-banquan.ituchong.com/weili/image/l/918020139693113374.jpeg',
  },
  {
    id: 3,
    name: 'Joe Biden',
    handle: '@JoeBiden',
    img: 'https://cdn6-banquan.ituchong.com/weili/image/l/918020139693113374.jpeg',
  },
]);
</script>
