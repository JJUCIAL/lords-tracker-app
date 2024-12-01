<template>
  <div class="q-pa-md">
    <!-- Search Input -->
    <q-input
      v-model="searchQuery"
      placeholder="Search username..."
      filled
      @keyup.enter="searchPlayer"
      class="q-mb-md"
    >
      <template v-slot:append>
        <q-btn label="Search" flat @click="searchPlayer" color="accent" />
      </template>
    </q-input>

    <!-- Player Table -->
    <q-table
      class="my-sticky-dynamic"
      flat
      bordered
      title="Lords of RNG Members"
      :rows="rows"
      :columns="columns"
      :loading="loading"
      row-key="id"
      virtual-scroll
      :virtual-scroll-item-size="48"
      :virtual-scroll-sticky-size-start="48"
      :rows-per-page-options="[0]"
    />

    <!-- Player Not Found Dialog -->
    <q-dialog v-model="playerNotFoundDialog">
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Player Not Found</div>
        </q-card-section>

        <q-card-section> Please enter another name. </q-card-section>

        <q-card-actions align="right" class="bg-primary text-teal">
          <q-btn color="accent" flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import { WOMClient } from "@wise-old-man/utils";
import { formatDistance } from "date-fns";

export default {
  setup() {
    const groupData = ref([]); // Initialize as an empty array
    const tableData = ref([]); // This will hold the enriched merged data
    const loading = ref(false);
    const searchQuery = ref(""); // Bind to QInput
    const previousSearchedId = ref(null); // Track previously searched player's ID
    const highlightedId = ref(null); // Track highlighted row
    const playerNotFoundDialog = ref(false); // Track the visibility of the dialog

    const getRowClass = (row) => {
      return highlightedId.value === row.id ? "highlighted-row" : "";
    };

    const rows = computed(() => tableData.value);

    const columns = ref([
      {
        name: "username",
        required: true,
        label: "Username",
        align: "left",
        field: "username",
        sortable: true,
      },
      { name: "type", label: "Type", align: "left", field: "type" },
      {
        name: "exp",
        label: "Experience",
        align: "right",
        field: "exp",
        sortable: true,
      },
      {
        name: "lastChangedAt",
        label: "Last Change",
        align: "right",
        field: "lastChangedAt",
      },
      {
        name: "achievementName",
        label: "Latest Achievement",
        align: "right",
        field: "achievementName",
        sortable: true,
      },
    ]);

    const fetchGroupData = async () => {
      const client = new WOMClient({
        apiKey: process.env.VUE_APP_WOM_API_KEY,
      });
      try {
        const groupId = 6847; // Example group ID
        const group = await client.groups.getGroupDetails(groupId);
        const achievements = await client.groups.getGroupAchievements(groupId);

        tableData.value = group.memberships.map((membership) => {
          const relatedAchievement = achievements.find(
            (ach) => ach.playerId === membership.player.id
          );
          return {
            id: membership.player.id,
            username: membership.player.username,
            type: membership.player.type,
            exp: membership.player.exp,
            lastChangedAt: formatDistance(
              new Date(membership.player.lastChangedAt),
              new Date(),
              { addSuffix: true }
            ),
            achievementName: relatedAchievement?.name || "None",
          };
        });
      } catch (error) {
        console.error("Failed to fetch group data:", error);
      }
    };

    const searchPlayer = () => {
      const query = searchQuery.value.trim().toLowerCase();

      // Remove previously searched player from the table
      if (previousSearchedId.value) {
        const previousIndex = tableData.value.findIndex(
          (row) => row.id === previousSearchedId.value
        );
        if (previousIndex !== -1) {
          tableData.value.splice(previousIndex, 1);
        }
      }

      if (!query) {
        previousSearchedId.value = null; // Reset previous search
        return; // If input is empty, stop further execution
      }

      const foundPlayerIndex = tableData.value.findIndex((row) =>
        row.username.toLowerCase().includes(query)
      );

      if (foundPlayerIndex !== -1) {
        const [foundPlayer] = tableData.value.splice(foundPlayerIndex, 1); // Remove from array
        tableData.value.unshift(foundPlayer); // Add to the front
        highlightedId.value = foundPlayer.id; // Highlight the row
        previousSearchedId.value = foundPlayer.id; // Track this player as searched

        // Reset highlight after 2 seconds
        setTimeout(() => {
          highlightedId.value = null;
        }, 2000);
      } else {
        console.warn("Player not found!");
        playerNotFoundDialog.value = true; // Show the dialog if player not found
      }
    };

    onMounted(fetchGroupData);

    return {
      columns,
      rows,
      loading,
      searchQuery,
      highlightedId,
      playerNotFoundDialog, // Dialog visibility reference
      searchPlayer,
    };
  },
};
</script>

<style lang="sass">
.my-sticky-dynamic
  /* height or max-height is important */
  height: 410px

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: $primary

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px

  .highlighted-row
    background-color: rgba(255, 255, 0, 0.2) // Light yellow highlight
    transition: background-color 0.5s ease-in-out
</style>
