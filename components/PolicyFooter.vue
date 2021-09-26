<template>
  <div>
    <div class="bg-red-100">
      <div class="wrapper">
        <p
          class="
            uppercase
            text-widest
            font-black
            pt-12
            py-0
            text-red-800 text-xl
          "
        >
          Table of Contents
        </p>
        <div
          class="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div class="btn-red-small">
            <nuxt-link to="/non-human-samples"
              >Policies for Non-Human Samples</nuxt-link
            >
          </div>
          <div class="btn-red-small">
            <nuxt-link to="/human-samples"
              >Policies for Human Samples</nuxt-link
            >
          </div>
          <div class="btn-red-small">
            <nuxt-link to="/policy-history">Policy History</nuxt-link>
          </div>
          <div class="btn-red-small">
            <nuxt-link to="/india-v-others">Policy Comparisons</nuxt-link>
          </div>
          <div class="btn-red-small">
            <nuxt-link to="/methods-of-research"
              >Research Methodology</nuxt-link
            >
          </div>
          <div class="btn-red-small">
            <nuxt-link to="/covid-policies">Policies during COVID-19</nuxt-link>
          </div>
          <div class="btn-red-small">
            <nuxt-link to="/way-forward">Analysis and Proposal</nuxt-link>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gray-200">
      <div class="wrapper py-24">
        <a href="https://github.com/shivaramakrishna99/indian-biopolicy-guide/blob/master/assets/Indian%20Shipping%20Policies%20for%20Biological%20Samples.pdf" target="_blank"
          ><button
            class="
              font-sans
              self-center
              text-xl text-center
              rounded-xl
              text-red-800
              uppercase
              tracking-widest
              font-light
              transition
              duration-300
              hover:text-red-600
              hover:underline
            "
          >
            Read the PDF
          </button></a>
        <p>
          This content was written by Priyannth R.S., Swetha Nagarajan and Shruti Sridhar during the 2021 After
          iGEM Global Shipping Hackathon. <br /><br />
          Developed by Shivaramakrishna Srinivasan.<br>
          Images taken from <a href="https://unsplash.com">Unsplash</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
