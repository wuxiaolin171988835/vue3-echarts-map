<template>
  <div
    style="
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <Suspense>
      <template #default>
        <Map></Map>
      </template>
      <template #fallback> Loading... </template>
    </Suspense>
  </div>
</template>

<script lang="ts" setup>
import Map from "../components/Map.vue";
</script>

<style lang="scss" scoped></style>
