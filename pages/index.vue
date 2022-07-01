<template>
  <div>
    <div class="wrapper">
      <h1 class="text-red-800">Shipping Policies in the Indian region</h1>
      <img
        src="https://images.unsplash.com/photo-1619392553201-3d9ab3169271?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2670&q=80"
        class="py-8"
      />
      <p class="text-xl">
        This is a comprehensive overview of the shipping policies in India. The
        kinds of samples in the purview of this policy analysis include
        Genetically Modified Organisms (GMOs), microorganisms, nucleic acids,
        proteins and cultures, human samples and Living Modified Organisms
        (LMOs). We have compared and analysed Import, Export and Domestic
        shipping policies.
        <br /><br />
        Our methodology included a systematic and critical review of the history
        of shipping policies both within and outside the Indian region over a
        span of three decades that formed the foundation for our understanding
        of regulatory bodies as well as facilitate comparison of shipping
        policies. Finally we also analysed the supply chain model of vaccines to
        get a birds eye view of policy relaxations given ensuring their rapid
        movement which guided our recommendations to facilitate better
        implementation.
      </p>
      <h2 class="text-red-800">Key Insights</h2>
      <div class="py-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <button class="btn-red">
          <nuxt-link to="/non-human-samples">Start reading</nuxt-link>
        </button>
        <button class="btn-red">
          <nuxt-link to="/policy-history">Policy History</nuxt-link>
        </button>
        <button class="btn-red">
          <nuxt-link to="/way-forward">Our proposal</nuxt-link>
        </button>
      </div>
      <h2 class="text-red-800">Useful Links</h2>
      <div class="text-base font-sans text-bold text-red-800 lg:text-lg">
        <div class="py-4" v-for="item in linkList" :key="item.index">
          <a target="_blank" :href="item.link">
            - <span class="underline">{{ item.text }}</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkList: [
        {
          link: "https://dbtindia.gov.in/",
          text: "Department of Biotechnology, India",
        },
        {
          link: "https://www.icmr.gov.in/",
          text: "Indian Council of Medical Research",
        },
        {
          link: "https://www.aphis.usda.gov/brs/fedregister/coordinated_framework.pdf",
          text: "Coordinated Framework for the Regulation of Biotechnology",
        },
        {
          link: "https://ibkp.dbtindia.gov.in/DBT_Content_Test/CMS/Guidelines/20181115121526033_Rules-for-the-manufacture-use-import-export-and-storage-1989.pdf",
          text: "Rules for the Manufacture, Use, Import, Export and Storage of Hazardous Microorganisms/Genetically Engineered Organisms or Cells",
        },
        {
          link: "https://ibkp.dbtindia.gov.in/DBT_Content_Test/CMS/Guidelines/20181115134719867_Regulations-Guidelines-for-Reocminant-DNA-Research-and-Biocontainment-2017.pdf",
          text: "Regulations and Guidelines for Recombinant DNA Research and Biocontainment",
        },
        {
          link: "https://biosafety.icar.gov.in/recombinant-dna-safety-guidelines-1990-2/",
          text: "Recombinant DNA Safety Guidelines, 1990; Revised Guidelines for Safety in Biotechnology, 1994",
        },
        {
          link: "https://biosafety.icar.gov.in/wp-content/uploads/2015/11/Rev_Guidelines_Research1998.pdf",
          text: "Revised Guidelines for Research in Transgenic plants",
        },
        {
          link: "https://legislative.gov.in/sites/default/files/A1992-22_0.pdf",
          text: "The Foreign Trade (Development & Regulation) Act, 1992 No. 22",
        },
        {
          link: "https://www.indiacode.nic.in/bitstream/123456789/4316/1/ep_act_1986.pdf",
          text: "Environment Protection Act, 1986",
        },
        {
          link: "https://legislative.gov.in/sites/default/files/A1992-22_0.pdf",
          text: "The Foreign Trade (Development & Regulation) Act, 1992",
        },
        {
          link: "https://www.indiacode.nic.in/bitstream/123456789/2046/1/200318.pdf",
          text: "Biological Diversity Act, 2002",
        },
        {
          link: "https://www.cbd.int/doc/legal/cartagena-protocol-en.pdf",
          text: "Cartagena Protocol",
        },
        {
          link: "https://main.icmr.nic.in/content/download-guidelines-transfer-biological-material",
          text: "Guidelines of Transfer of Biological Material",
        },
        {
          link: "https://apps.who.int/iris/bitstream/handle/10665/149288/WHO_HSE_GCR_2015.2_eng.pdf;jsessionid=F22E6ABFD9162CB40719D7CF31C045FE?sequence=1",
          text: "Transport of Infectious Substances",
        },
        {
          link: "https://www.icao.int/safety/dangerousgoods/Pages/default.aspx",
          text: "International Civil Aviation Organisation (ICAO)",
        },
        {
          link: "https://www.bifa.org/media/4544564/bp-3-the-international-maritime-dangerous-goods-imdg-code.pdf",
          text: "International Maritime Organisation (IMO)",
        },
      ],
    };
  },
};
</script>
