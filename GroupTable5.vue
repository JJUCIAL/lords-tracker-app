<template>
  <div class="q-pa-md">
    <!-- Search Bar -->
    <q-input
      filled
      v-model="searchQuery"
      label="Search Player by Username..."
      @input="debouncedSearch"
      class="q-mb-md"
    />

    <!-- Virtual Scroller Table -->
    <q-table
      title="Lords of RNG Members"
      :rows="filteredRows"
      :columns="columns"
      row-key="id"
      virtual-scroll
      :virtual-scroll-item-size="48"
      :row-class="getRowClass"
      loading="loading"
    >
      <template v-slot:top>
        <img style="height: 50px; width: 50px" src="icons/witch64.png" />
        <header class="header-fancy">Test</header>
        <template>
          <svg class="icon">
            <use xlink:href="assets/icons/SVG/witch.svg"></use>
          </svg>
        </template>

        <q-space />

        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />
      </template>

      <!-- Type Column with an Image -->
      <template v-slot:body-cell-type="props">
        <q-td :props="props">
          <img
            :src="typeImages[props.row.type]"
            :alt="props.row.type"
            width="28"
            height="28"
          />
        </q-td>
      </template>
    </q-table>

    <!-- Dialog for Player Not Found -->
    <q-dialog v-model="playerNotFoundDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Player Not Found</div>
        </q-card-section>
        <q-card-section>
          Sorry, no player matching the search criteria was found.
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import debounce from "lodash/debounce";
import { WOMClient } from "@wise-old-man/utils";
import { formatDistance } from "date-fns";

export default {
  setup() {
    const groupData = ref([]); // Raw group data
    const tableData = ref([]); // Enriched table data
    const searchQuery = ref(""); // Search query
    const highlightedId = ref(null); // Track highlighted row
    const playerNotFoundDialog = ref(false); // Dialog visibility
    const loading = ref(false); // Loading state
    const typeImages = {
      regular: "src/assets/maxed.png",
      ironman: "src/assets/ironman.png",
      ultimate: "src/assets/uim.png",
      hardcore: "src/assets/hcim.png",
    };

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
      loading.value = true;
      const client = new WOMClient({ apiKey: process.env.VUE_APP_WOM_API_KEY });

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
      } finally {
        loading.value = false;
      }
    };

    const getRowClass = (row) =>
      highlightedId.value === row.id ? "highlighted-row" : "";

    const highlightRow = (id) => {
      highlightedId.value = id;
      setTimeout(() => {
        highlightedId.value = null;
      }, 2000);
    };

    const debouncedSearch = debounce(() => {
      if (!searchQuery.value.trim()) {
        return; // Stop if search query is empty
      }

      const match = tableData.value.find((row) =>
        row.username.toLowerCase().includes(searchQuery.value.toLowerCase())
      );

      if (match) {
        const index = tableData.value.findIndex((row) => row.id === match.id);
        if (index !== -1) {
          const [foundPlayer] = tableData.value.splice(index, 1);
          tableData.value.unshift(foundPlayer); // Move to the top
          highlightRow(foundPlayer.id);
        }
      } else {
        playerNotFoundDialog.value = true; // Show dialog if no match
      }
    }, 300);

    const filteredRows = computed(() => {
      if (!searchQuery.value.trim()) return tableData.value;
      return tableData.value.filter((row) =>
        row.username.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    onMounted(fetchGroupData);

    return {
      columns,
      filteredRows,
      searchQuery,
      highlightedId,
      getRowClass,
      debouncedSearch,
      playerNotFoundDialog,
      loading,
      typeImages,
    };
  },
};
</script>

<style lang="sass">
/* Highlighted row animation */
.highlighted-row
  background-color: rgba(255, 255, 0, 0.2)
  animation: highlight-fade 2s ease-in-out

/*header
.header-fancy
  font-family: fantasy
  font-size: 25px
  font-style: bold


/*conditional rendering styles*/
.table-exp-100m


/* Smooth fade animation */
@keyframes highlight-fade
  0%
    background-color: rgba(255, 255, 0, 0.5)

  100%
    background-color: rgba(255, 255, 0, 0.2)
</style>
