<template>
  <q-layout view="hhh Lpr lFf" class="lite-shell">
    <q-header bordered elevated class="lite-header">
      <div class="lite-toolbar lite-toolbar--spread">
        <router-link :to="homeRoute" class="lite-brand-hit" title="トップへ戻る">
          <strong class="lite-brand">TORCH // NAV GRID</strong>
        </router-link>
        <router-link :to="homeRoute" class="lite-nav-btn" title="リンク一覧へ戻る">トップへ</router-link>
      </div>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ROUTE_HOME } from 'src/router/routeNames';

const homeRoute = { name: ROUTE_HOME } as const;
</script>
