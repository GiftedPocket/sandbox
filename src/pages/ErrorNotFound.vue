<template>
  <div class="sf-404 fullscreen flex flex-center text-center sf-404-wrap">
    <div class="sf-404-inner">
      <p class="sf-404-chip sf-mono">ERR // COORD_NOT_FOUND</p>
      <div class="sf-404-code">404</div>
      <p class="sf-404-msg">転送座標はこのセクターには存在しません。</p>

      <router-link class="lite-nav-btn lite-404-home" :to="{ name: ROUTE_HOME }">トップセクターへ戻る</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ROUTE_HOME } from 'src/router/routeNames';
</script>

<style scoped>
.sf-404-wrap {
  background:
    radial-gradient(ellipse at 50% 20%, rgba(255, 0, 200, 0.12), transparent 55%),
    radial-gradient(ellipse at 20% 80%, rgba(93, 255, 252, 0.1), transparent 45%),
    var(--sf-void, #030509);
  color: var(--sf-text);
}

.sf-404-inner {
  padding: 24px 18px;
  max-width: 420px;
}

.sf-404-chip {
  font-size: 11px;
  letter-spacing: 0.22em;
  color: var(--sf-magenta);
  margin: 0 0 6px;
  text-transform: uppercase;
}

.sf-404-code {
  font-family: Orbitron, sans-serif;
  font-size: clamp(4rem, 15vw, 7rem);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.06em;
  color: transparent;
  background: linear-gradient(120deg, var(--sf-cyan), var(--sf-magenta));
  background-clip: text;
  -webkit-background-clip: text;
  filter: drop-shadow(0 0 24px color-mix(in srgb, var(--sf-cyan) 65%, transparent));
}

.sf-404-msg {
  margin: 12px 0 26px;
  color: var(--sf-muted);
  font-size: 14px;
  line-height: 1.5;
}

.lite-404-home {
  display: inline-flex;
  justify-content: center;
  text-decoration: none;
}
</style>
