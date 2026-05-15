<template>
  <q-page class="lite-page">
    <p class="sf-sector-pulse sf-mono">SECTOR ONLINE</p>
    <h2>Yas KUKU</h2>
    <div>
        <button @click="test">TEST</button>
    </div>
  </q-page>
</template>
<script setup lang="ts">
    const test = () => {
        alert('hello')
    }
</script>