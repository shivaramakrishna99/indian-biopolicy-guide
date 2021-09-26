<template>
  <div class="bg-gray-50">
    <div class="wrapper">
      <h1 class="">Policy History</h1>
      <div class="py-8">
        <div v-for="item in policyList" :key="item.index">
          <div
            class="
              grid grid-cols-1
              sm:grid-cols-6
              bg-red-100
              my-4
              p-8
              rounded-xl
            "
          >
            <div
              class="
                text-6xl
                font-sans
                pr-4
                font-black
                text-red-800
                border-r-2 border-red-800
              "
            >
              {{ item.year }}<br />
              <span class="text-2xl font-sans font-bold text-black">{{
                item.region
              }}</span>
            </div>
            <div class="sm:pl-6 sm:col-span-4">
              <h3 class="text-red-800">{{ item.text }}</h3>
              <h4>
                <span
                  class="
                    bg-black
                    text-white
                    font-bold
                    text-base
                    rounded-md
                    py-1
                    px-2
                  "
                  >Samples</span
                >
                {{ item.materials }}
              </h4>
              <span
                class="
                  bg-red-800
                  text-white
                  uppercase
                  font-black
                  rounded-md
                  p-2
                "
                >{{ item.shipping }}</span
              >
              <div
                v-if="item.limits != ''"
                class="text-black py-4 font-sans text-base"
              >
                <span class="font-bold"> Limitations: </span> {{ item.limits }}
              </div>
              <div class="text-black py-4 font-sans text-base">
                <span class="font-bold"> Governing Bodies: </span>
                {{ item.bodies }}
              </div>
              <div
                v-if="item.notes != ''"
                class="text-black py-4 font-sans text-base"
              >
                <span class="font-bold"> Facts: </span> {{ item.notes }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      policyList: [
        {
          link: "https://www.aphis.usda.gov/brs/fedregister/coordinated_framework.pdf",
          text: "Coordinated Framework for Regulation of Biotechnology (1986)",
          year: 1986,
          materials:
            "Recombinant DNA Derived products including GMOs, Chemically synthesised antigens, Monoclonal Antibodies, Cell Cultures, Organisms and Vectors",
          shipping: "Import, Export and Domestic",
          limits: "",
          bodies: "FDA,FSIS,APHIS,EPA",
          notes: "",
          region: "USA",
        },
        {
          link: "https://ibkp.dbtindia.gov.in/DBT_Content_Test/CMS/Guidelines/20181115121526033_Rules-for-the-manufacture-use-import-export-and-storage-1989.pdf",
          text: "Rules for the Manufacture, Use, Import, Export and Storage of Hazardous Microorganisms/Genetically Engineered Organisms or Cells",
          year: 1989,
          materials:
            "GMOs, microorganisms, nucleic acids, proteins and cultures",
          shipping: "Import, Export and Domestic",
          limits: "Power was concentrated at RCGM",
          bodies: "DBT, RCGM, GEAC",
          notes:
            "Limitations led to revisions in 2015 and 2020, to distribute power to IBSC",
          region: "India",
        },
        {
          link: "https://legislative.gov.in/sites/default/files/A1992-22_0.pdf",
          text: "The Foreign Trade (Development & Regulation) Act (Section 18)",
          year: 1992,
          materials:
            "Genetically Modified Food, Feed, Genetically Modified Organism (GMOs) and Living Modified Organisms (LMOs)",
          shipping: "Import",
          limits: "",
          bodies: "DBT, GEAC, RCGM",
          notes:
            "The import of GMOs/LMOs will be governed by the provisions of the Environment Protection Act, 1986 and Rules 1989",
          region: "India",
        },
        {
          link: "https://main.icmr.nic.in/content/download-guidelines-transfer-biological-material",
          text: "Guidelines of Transfer of Biological Material",
          year: 1997,
          materials: "Human samples",
          shipping: "Import, Export and Domestic",
          limits:
            "The gazette notification that was passed mentions that the nullification is for commercial purposes, but includes research laboratories/institutes in the applicable bodies, leading to lack of clarity. In such cases, nullification may lead to undesirable outcomes due to the lack of proper oversight.",
          bodies: "ICMR, HMSC",
          notes: "",
          region: "India",
        },
        {
          link: "https://www.indiacode.nic.in/bitstream/123456789/2046/1/200318.pdf",
          text: "Biological Diversity Act",
          year: 2002,
          materials: "Human and non-human samples",
          shipping: "Export and Domestic",
          limits: "",
          bodies: "National Biodiversity Authority (NBA)",
          notes:
            "Biological resource(s) occurring in India or knowledge associated thereto for research or for commercial utilisation or for bio-survey and bio-utilisation should not be obtained without prior approval of NBA",
          region: "India",
        },
        {
          link: "https://www.dsmz.de/fileadmin/user_upload/Deposit/EBRCN_information_transport__August_2013.pdf",
          text: "European Biological Resource Centers Network Information Resource",
          year: 2013,
          materials: "Human and non-human samples",
          shipping: "Export, Import and Domestic",
          limits: "",
          bodies: "EBRC",
          notes:
            "Specifies the guidelines for shipping, packaging for different transport modes",
          region: "Members of European Union",
        },
        {
          link: "https://policymanual.nih.gov/3035#E0A463AC",
          text: "Working Safely with Potentially Hazardous Biological Materials",
          year: 2015,
          materials: "Infectious materials",
          shipping: "Import, Export and Domestic",
          limits: "",
          bodies: "CDC, NIH",
          notes: "",
          region: "USA",
        },
        {
          link: "https://apps.who.int/iris/bitstream/handle/10665/149288/WHO_HSE_GCR_2015.2_eng.pdf;jsessionid=F22E6ABFD9162CB40719D7CF31C045FE?sequence=1",
          text: "Transport of Infectious Substances",
          year: 2015,
          materials: "Human and non-human samples",
          shipping: "Import and Export",
          limits: "",
          bodies:
            "WHO and relevant bodies present in each country overseeing biosafety",
          notes:
            "The guideline specifies that all biological samples need to be assigned UN numbers based on their type and follow shipping/packaging regulations based on the UN number",
          region: "Member countries of WHO",
        },
        {
          link: "https://www.dfat.gov.au/publications/minisite/theaustraliagroupnet/site/en/guidelines.html",
          text: "Guidelines for Transfers of Sensitive Chemical and Biological Items",
          year: 2015,
          materials: "Humans and Animal Pathogens, Toxins",
          shipping: "Export",
          limits: "",
          bodies: "Australia Group,BTWC, National Government agencies",
          notes: "India joined the Australia group in 2018",
          region: "Members of the Australia Group",
        },
        {
          link: "https://ibkp.dbtindia.gov.in/DBT_Content_Test/CMS/Guidelines/20181115134719867_Regulations-Guidelines-for-Reocminant-DNA-Research-and-Biocontainment-2017.pdf",
          text: "Regulations and Guidelines for Recombinant DNA Research and Biocontainment",
          year: 2017,
          materials:
            "GMOs, microorganisms, nucleic acid, proteins and cultures",
          shipping: "Import, Export and Domestic",
          limits:
            "The kinds of shipping and their relevant protocols were unclear for biological samples other than plants",
          bodies: "DBT, RDAC, ICAR, NBPGR",
          notes: "",
          region: "India",
        },
      ],
    };
  },
};
</script>
<style>
</style>