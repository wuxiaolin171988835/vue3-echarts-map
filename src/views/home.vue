<template>
  <Map :items="items"></Map>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Map from "../components/Map.vue";
import { getMapData } from "../api/index";
const items = ref([]);
onMounted(async () => {
  const res = await getMapData();
  items.value = res.data;
});
</script>

<style lang="scss" scoped></style>
