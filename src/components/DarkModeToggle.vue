<template>
  <q-btn
    :label="isDarkMode ? 'Light' : 'Dark'"
    :icon="isDarkMode ? 'brightness_5' : 'brightness_4'"
    :color="isDarkMode ? 'positive' : 'negative'"
    round
    stack
    dense
    flat
    size="small"
    @click="toggleDarkMode"
  />
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";

export default {
  name: "DarkModeToggle",
  setup() {
    const $q = useQuasar();
    const isDarkMode = ref($q.dark.isActive);

    const toggleDarkMode = () => {
      $q.dark.toggle(); // This toggles the dark mode
      isDarkMode.value = $q.dark.isActive; // Update local state
    };

    return {
      isDarkMode,
      toggleDarkMode,
    };
  },
};
</script>
