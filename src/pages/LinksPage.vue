<template>
  <q-page class="lite-page">
    <h2>NAV MATRIX</h2>
    <p class="lite-muted sf-readable-block">
      <span class="sf-mono">ROUTE_NAV</span>
      //
      <strong>リンク一覧</strong>
      — Vue Router で <code>meta.navLink</code> を付けたルートだけホログラフィック転送されます。
    </p>

    <ul v-if="navCandidates.length" class="lite-link-list">
      <li v-for="c in navCandidates" :key="c.routeName">
        <router-link class="lite-link-hit" :to="{ name: c.routeName }">
          <span class="lite-link-label">{{ c.label }}</span>
          <code class="lite-link-name">{{ c.routeName }}</code>
        </router-link>
      </li>
    </ul>

    <p v-else class="lite-muted sf-readable-block">
      // SIGNAL LOST<br>
      <code>src/router/routes.ts</code> で <code>meta.navLink</code> と <code>meta.navLabel</code> を定義するとこのセクターが開通します。
    </p>
  </q-page>
</template>

<script setup lang="ts">
import { useNavLinkCandidates } from 'src/composables/useNavLinkCandidates';

const navCandidates = useNavLinkCandidates();
</script>

<style scoped>
.sf-readable-block {
  letter-spacing: 0.02em;
  line-height: 1.6;
}
</style>


