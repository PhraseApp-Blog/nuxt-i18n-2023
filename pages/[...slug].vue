<template>
  <div class="prose prose-lg prose-invert prose-a:text-purple-500">
    <ContentDoc v-slot="{ doc }">
      <h1>{{ doc.title }}</h1>
      <ContentRenderer :value="doc" />
    </ContentDoc>
  </div>
</template>
