<template>
  <div class="bg-gray-50">
    <div class="wrapper py-36">
        <article>
          <nuxt-content :document="article" />
        </article>
        <p class="prose uppercase text-widest font-light pt-24 py-0">Read on</p>
        <hr class="mb-4">
        <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 pt-12">
          <div class="btn-green">
            <nuxt-link to="non-human-samples">Non-Human Samples</nuxt-link>
          </div>
          <div class="btn-red">
            <nuxt-link to="/non-human-samples"
              >Policies regarding Non-Human Samples</nuxt-link
            >
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, error }) {
    const article = await $content("methods-of-research").fetch();

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