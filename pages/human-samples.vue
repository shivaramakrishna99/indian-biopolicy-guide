<template>
  <div class="bg-gray-50">
    <div class="wrapper">
      <article>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, error }) {
    const article = await $content("human-samples").fetch();

    if (!article) {
      return error({ statusCode: 404, message: "Article not found" });
    }

    return {
      article,
    };
  },
};
</script>
<style>
</style>