<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <DarkModeToggle />
        <q-toolbar-title align="center"
          >Lords of RNG <br />
          <small>Under Construction</small>
        </q-toolbar-title>

        <div>
          Tracker v 2.1 <br />
          <small>by l7</small>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Lords Links </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";
import DarkModeToggle from "src/components/DarkModeToggle.vue";

defineOptions({
  name: "MainLayout",
});

const linksList = [
  {
    title: "Discord",
    caption: "🧙 Lords of RNG 💀",
    icon: "chat",
    link: "https://discord.gg/BFnGFgrKXk",
  },
  {
    title: "Clan Voice Chat",
    caption: "🟢Voice Chat & Streaming🔴",
    icon: "record_voice_over",
    link: "https://discord.gg/FHaQWt4Svp",
  },
  {
    title: "WiseOldMan",
    caption: "📈Tracker API📊  ",
    icon: "code",
    link: "https://wiseoldman.net/groups/6847",
  },
  {
    title: "OSRS Wiki",
    caption: "🔎The Ultimate OSRS Guide🔍",
    icon: "public",
    link: "https://oldschool.runescape.wiki",
  },
  {
    title: "Lords of RNG - Home",
    caption: " ⚔️Our Webpage🛡️",
    icon: "favorite",
    link: "https://lordsofrng.com",
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
