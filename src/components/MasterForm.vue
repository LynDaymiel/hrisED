<template>
  <form class="bg-transparent" @submit.prevent="submitAll">
    <div class="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
      <!-- HEADER -->
      <div class="mb-8 text-center">
        <h1
          class="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
        >
          PERSONAL DATA SHEET
        </h1>
        <p class="mt-2 text-sm/6 text-gray-600">
          Please complete all required fields accurately.
        </p>
      </div>

      <!-- STEPPER WRAP (gives structure, reduces "empty" feel) -->
      <section
        class="mb-10 rounded-2xl border border-gray-200 bg-white/60 p-4 sm:p-6"
      >
        <div
          class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <!-- Step meta -->
          <div>
            <p
              class="text-xs font-semibold tracking-wider text-gray-500 uppercase"
            >
              Step {{ currentPage + 1 }} of 4
            </p>
            <p class="mt-1 text-base font-semibold text-gray-900">
              {{ stepTitles[currentPage] }}
            </p>
          </div>

          <!-- Actions -->
          <div class="flex items-center justify-end gap-2">
            <button
              type="button"
              class="rounded-md px-3.5 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 disabled:text-gray-400 disabled:hover:bg-transparent"
              :disabled="currentPage === 0"
              @click="prevPage"
            >
              Back
            </button>

            <button
              v-if="currentPage < 3"
              type="button"
              class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              @click="nextPage"
            >
              Next
            </button>

            <button
              v-else
              type="submit"
              class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </div>

        <!-- progress bar -->
        <div class="mt-5 overflow-hidden rounded-full bg-gray-200">
          <div
            class="h-2.5 rounded-full bg-indigo-600 transition-all duration-300"
            :style="{ width: progressWidth }"
          ></div>
        </div>

        <!-- step indicators -->
        <ol
          class="mt-5 grid grid-cols-2 gap-3 text-sm font-medium text-gray-600 sm:grid-cols-4"
        >
          <li
            v-for="(label, idx) in stepLabels"
            :key="label"
            class="group flex items-center gap-2 cursor-pointer select-none rounded-lg px-2 py-1.5 hover:bg-gray-50"
            @click="goToPage(idx)"
          >
            <span
              class="flex size-7 items-center justify-center rounded-full border text-xs font-semibold transition"
              :class="stepDotClass(idx)"
            >
              {{ idx + 1 }}
            </span>

            <span
              class="truncate transition"
              :class="
                idx === currentPage
                  ? 'text-indigo-700'
                  : 'text-gray-600 group-hover:text-gray-900'
              "
              :title="label"
            >
              {{ label }}
            </span>
          </li>
        </ol>
      </section>

      <!-- PAGES -->
      <div class="space-y-14">
        <!-- Page 1 -->
        <PdsPage1 v-show="currentPage === 0" :p="p" />

        <!-- Page 2 -->
        <div v-show="currentPage === 1" class="space-y-14">
          <section
            class="rounded-2xl border border-gray-200 bg-white/60 p-6 sm:p-8"
          >
            <h2 class="text-base/7 font-semibold text-gray-900">PDS Page 2</h2>
            <p class="mt-2 text-sm/6 text-gray-600">
              Add Page 2 fields here (same styling).
            </p>
          </section>
        </div>

        <!-- Page 3 -->
        <div v-show="currentPage === 2" class="space-y-14">
          <section
            class="rounded-2xl border border-gray-200 bg-white/60 p-6 sm:p-8"
          >
            <h2 class="text-base/7 font-semibold text-gray-900">PDS Page 3</h2>
            <p class="mt-2 text-sm/6 text-gray-600">
              Add Page 3 fields here (same styling).
            </p>
          </section>
        </div>

        <!-- Page 4 -->
        <div v-show="currentPage === 3" class="space-y-14">
          <section
            class="rounded-2xl border border-gray-200 bg-white/60 p-6 sm:p-8"
          >
            <h2 class="text-base/7 font-semibold text-gray-900">PDS Page 4</h2>
            <p class="mt-2 text-sm/6 text-gray-600">
              Add Page 4 fields here (same styling).
            </p>
          </section>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import PdsPage1 from "./PDSPages/PdsPage1.vue";

const currentPage = ref(0);

const stepLabels = ["Page 1", "Page 2", "Page 3", "Page 4"];
const stepTitles = [
  "Personal Information",
  "Family Background",
  "Educational Background",
  "Other Information",
];

const progressWidth = computed(() => `${((currentPage.value + 1) / 4) * 100}%`);

const goToPage = (idx) => (currentPage.value = idx);
const nextPage = () => currentPage.value < 3 && (currentPage.value += 1);
const prevPage = () => currentPage.value > 0 && (currentPage.value -= 1);

const stepDotClass = (idx) => {
  if (idx < currentPage.value)
    return "border-indigo-600 bg-indigo-600 text-white";
  if (idx === currentPage.value)
    return "border-indigo-600 bg-indigo-50 text-indigo-700";
  return "border-gray-300 bg-white text-gray-700";
};

const submitAll = () => {
  console.log("Submit payload:", JSON.parse(JSON.stringify(p)));
  // TODO: POST to backend
};

const p = reactive({
  surname: "",
  firstName: "",
  middleName: "",
  nameExtension: "",
  birthDate: "",
  birthPlace: "",
  sexAtBirth: "",
  civilStatus: "",
  heightM: "",
  weightKg: "",
  bloodType: "",
  umid: "",
  pagibig: "",
  philHealth: "",
  psn: "",
  tin: "",
  agencyEmployeeNo: "",
  citizenshipType: "",
  dualCitizenshipCountry: "",
  residential: {
    houseNo: "",
    street: "",
    subdivision: "",
    barangay: "",
    city: "",
    province: "",
    zip: "",
  },
  permanent: {
    houseNo: "",
    street: "",
    subdivision: "",
    barangay: "",
    city: "",
    province: "",
    zip: "",
  },
  telephone: "",
  mobile: "",
  email: "",
});
</script>
