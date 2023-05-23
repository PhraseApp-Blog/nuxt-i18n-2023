<template>
  <div>
    <h1>{{ $t("numbers.title") }}</h1>

    <ul class="list-inside list-disc text-lg">
      <li>{{ $t("numbers.currency", { number: $n(23.99, "currency") }) }}</li>
      <li>{{ $t("numbers.decimal", { number: $n(0.42, "decimal") }) }}</li>
      <li>{{ $t("numbers.percent", { number: $n(0.8999, "percent") }) }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
