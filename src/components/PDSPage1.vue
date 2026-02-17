<script setup>
const p = {
  surname: "DELA CRUZZZZ",
  firstName: "ERNALYN",
  middleName: "RUiz",
  nameExt: "Jr.",
  sexAtBirth: "Male",
};

const printPage = () => window.print();
const nameStyle = (top) => ({
  left: "1.65in",
  top: `${top}in`,
  width: "4in",
});
</script>
<template>
  <div class="no-print actions">
    <button
      @click="printPage"
      class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-700 rounded-md hover:bg-bl-600 focus:outline-none focus:bg-gray-600"
    >
      Print
    </button>
  </div>

  <div class="page">
    <img class="bg" src="../assets/pds/page1final.png" alt="PDS Page 1" />
    <!-- Example overlay text -->
    <div class="field" :style="nameStyle(1.7)">{{ p.surname }}</div>
    <div class="field" :style="nameStyle(1.9)">{{ p.firstName }}</div>
    <div class="field" :style="nameStyle(2.15)">{{ p.middleName }}</div>
    <div
      class="field"
      style="left: 6.25in; top: 1.95in; width: 1.2in; text-align: center"
    >
      {{ p.nameExt }}
    </div>
    <div class="checkmark" style="left: 1.7in; top: 3.04in">
      {{ p.sexAtBirth === "Male" ? "✓" : "" }}
    </div>

    <!-- FEMALE -->
    <div class="checkmark" style="left: 2.85in; top: 3.04in">
      {{ p.sexAtBirth === "Female" ? "✓" : "" }}
    </div>
  </div>
</template>

<style scoped>
.page {
  width: 8.5in;
  height: 13in;
  position: relative;
}

/* overlay text */
.field {
  position: absolute;
  font-size: 10pt;
  font-family:
    Arial Narrow,
    Helvetica,
    sans-serif;
  text-transform: uppercase;
}

/* important for long bond printing */
@page {
  size: 8.5in 13in;
  margin: 0;
}

.no-print {
  display: block;
}
@media print {
  .no-print {
    display: none !important;
  }
}

.checkmark {
  position: absolute;
  font-size: 9pt;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
