<template>
  <q-page class="relative flex flex-center">
    <GroupTable6 />
  </q-page>
</template>

<script setup>
import GroupTable from "src/components/GroupTable.vue"; // dont touch, only duplicate
import GroupTable6 from "app/GroupTable6.vue"; //best clone for test
import GroupTable5 from "app/GroupTable5.vue"; //absolute best
import GroupTable4 from "app/GroupTable4.vue"; //dont touch, current best table
defineOptions({
  name: "IndexPage",
});
</script>
