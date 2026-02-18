<script setup>
import { ref, computed, watch } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/16/solid";

const props = defineProps({
  p: { type: Object, required: true },
});

/* ---------------------------
   SIDEBAR SECTION NAVIGATION
----------------------------*/
const sections = [
  { key: "personal", label: "Personal Information" },
  { key: "address", label: "Address" },
  { key: "contact", label: "Contact Details" },
  { key: "family", label: "Family Background" },
  { key: "education", label: "Educational Background" },
];

const active = ref("personal");

const go = (key) => (active.value = key);

const navItem = (key) =>
  key === active.value
    ? "bg-indigo-50 text-indigo-700 border-indigo-200"
    : "text-gray-700 border-transparent hover:bg-gray-50";

/* ---------------------------
   REUSABLE INPUT STYLES
----------------------------*/
const inputBase =
  "block w-full rounded-md bg-white/80 px-3 py-2 text-sm text-gray-900 " +
  "outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 " +
  "focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600";

const selectBase =
  "col-start-1 row-start-1 w-full appearance-none rounded-md bg-white/80 " +
  "py-2 pr-8 pl-3 text-sm text-gray-900 outline-1 -outline-offset-1 outline-gray-300 " +
  "focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600";

/* ---------------------------
   SAME AS RESIDENTIAL LOGIC
----------------------------*/
if (props.p.sameAsResidential === undefined) {
  props.p.sameAsResidential = false;
}

const copyResidentialToPermanent = () => {
  Object.assign(props.p.permanent, props.p.residential);
};

watch(
  () => props.p.sameAsResidential,
  (val) => {
    if (val) copyResidentialToPermanent();
  },
);

watch(
  () => ({ ...props.p.residential }),
  () => {
    if (props.p.sameAsResidential) copyResidentialToPermanent();
  },
  { deep: true },
);

const permanentDisabled = computed(() => props.p.sameAsResidential === true);

const currentIndex = computed(() =>
  sections.findIndex((s) => s.key === active.value),
);

const goNext = () => {
  if (currentIndex.value < sections.length - 1) {
    active.value = sections[currentIndex.value + 1].key;
  }
};

const goPrev = () => {
  if (currentIndex.value > 0) {
    active.value = sections[currentIndex.value - 1].key;
  }
};

const isFirst = computed(() => currentIndex.value === 0);
const isLast = computed(() => currentIndex.value === sections.length - 1);
</script>

<template>
  <div class="grid grid-cols-1 gap-10 lg:grid-cols-12">
    <!-- ================= SIDEBAR ================= -->
    <aside class="lg:col-span-3">
      <div
        class="sticky top-6 rounded-2xl border border-gray-200 bg-white/60 p-4"
      >
        <p class="text-xs font-semibold uppercase tracking-wide text-gray-500">
          Page 1 Sections
        </p>

        <nav class="mt-3 space-y-1">
          <button
            v-for="s in sections"
            :key="s.key"
            type="button"
            class="w-full rounded-xl border px-3 py-2 text-left text-sm font-medium transition"
            :class="navItem(s.key)"
            @click="go(s.key)"
          >
            {{ s.label }}
          </button>
        </nav>
      </div>
    </aside>

    <!-- ================= MAIN CONTENT ================= -->
    <main class="lg:col-span-9 space-y-10">
      <!-- ================= PERSONAL ================= -->
      <section
        v-show="active === 'personal'"
        class="rounded-2xl border border-gray-200 bg-white/60 p-6 sm:p-8"
      >
        <div class="flex items-start justify-between">
          <div>
            <h2 class="text-lg font-semibold text-gray-900">
              Personal Information
            </h2>
            <p class="mt-2 text-sm text-gray-600">
              Fill out the fields exactly as they appear on your official
              records.
            </p>
          </div>
        </div>

        <div class="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
          <!-- SURNAME -->
          <div class="sm:col-span-3">
            <label class="block text-sm font-semibold text-gray-900">
              Surname
            </label>
            <div class="mt-2">
              <input v-model="p.surname" :class="inputBase" />
            </div>
          </div>

          <!-- FIRST NAME -->
          <div class="sm:col-span-3">
            <label class="block text-sm font-semibold text-gray-900">
              2. First Name
            </label>
            <div class="mt-2">
              <input v-model="p.firstName" :class="inputBase" />
            </div>
          </div>

          <!-- MIDDLE -->
          <div class="sm:col-span-4">
            <label class="block text-sm font-semibold text-gray-900">
              Middle Name
            </label>
            <div class="mt-2">
              <input v-model="p.middleName" :class="inputBase" />
            </div>
          </div>

          <!-- EXTENSION -->
          <div class="sm:col-span-2">
            <label class="block text-sm font-semibold text-gray-900">
              Name Extension
            </label>
            <div class="mt-2">
              <input v-model="p.nameExtension" :class="inputBase" />
            </div>
          </div>

          <!-- SEX -->
          <div class="sm:col-span-3">
            <label class="block text-sm font-semibold text-gray-900">
              Sex at Birth
            </label>
            <div class="mt-2 grid grid-cols-1">
              <select v-model="p.sexAtBirth" :class="selectBase">
                <option disabled value="">Select</option>
                <option>MALE</option>
                <option>FEMALE</option>
              </select>
              <ChevronDownIcon
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"
              />
            </div>
          </div>

          <!-- CIVIL -->
          <div class="sm:col-span-3">
            <label class="block text-sm font-semibold text-gray-900">
              Civil Status
            </label>
            <div class="mt-2 grid grid-cols-1">
              <select v-model="p.civilStatus" :class="selectBase">
                <option disabled value="">Select</option>
                <option>Single</option>
                <option>Married</option>
                <option>Widowed</option>
                <option>Separated</option>
                <option>Other</option>
              </select>
              <ChevronDownIcon
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- ================= ADDRESS ================= -->
      <section
        v-show="active === 'address'"
        class="rounded-2xl border border-gray-200 bg-white/60 p-6 sm:p-8"
      >
        <h2 class="text-lg font-semibold text-gray-900">Address</h2>

        <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-6">
          <!-- ================= RESIDENTIAL ================= -->
          <div class="col-span-full flex items-center justify-between">
            <h3 class="text-sm font-semibold text-gray-900">
              Residential Address
            </h3>

            <label
              class="flex items-center gap-2 text-sm font-medium text-gray-700"
            >
              <input
                type="checkbox"
                v-model="p.sameAsResidential"
                class="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              Same as Permanent
            </label>
          </div>

          <!-- Residential Inputs -->
          <div class="sm:col-span-2">
            <input
              v-model="p.residential.houseNo"
              :class="inputBase"
              placeholder="House/Block/Lot No."
            />
          </div>

          <div class="sm:col-span-2">
            <input
              v-model="p.residential.street"
              :class="inputBase"
              placeholder="Street"
            />
          </div>

          <div class="sm:col-span-2">
            <input
              v-model="p.residential.subdivision"
              :class="inputBase"
              placeholder="Subdivision/Village"
            />
          </div>

          <div class="sm:col-span-2">
            <input
              v-model="p.residential.barangay"
              :class="inputBase"
              placeholder="Barangay"
            />
          </div>

          <div class="sm:col-span-2">
            <input
              v-model="p.residential.city"
              :class="inputBase"
              placeholder="City/Municipality"
            />
          </div>

          <div class="sm:col-span-1">
            <input
              v-model="p.residential.province"
              :class="inputBase"
              placeholder="Province"
            />
          </div>

          <div class="sm:col-span-1">
            <input
              v-model="p.residential.zip"
              :class="inputBase"
              placeholder="Zip Code"
            />
          </div>

          <!-- Divider -->
          <div class="col-span-full border-t border-gray-200 pt-4"></div>

          <!-- ================= PERMANENT ================= -->
          <div class="col-span-full flex items-center justify-between">
            <h3 class="text-sm font-semibold text-gray-900">
              Permanent Address
            </h3>

            <span
              v-if="permanentDisabled"
              class="text-xs font-bold text-gray-500"
            >
              Auto-filled from residential
            </span>
          </div>

          <!-- Permanent Inputs -->
          <div class="sm:col-span-2">
            <input
              v-model="p.permanent.houseNo"
              :disabled="permanentDisabled"
              :class="[
                inputBase,
                permanentDisabled && 'bg-gray-100 text-gray-500',
              ]"
              placeholder="House/Block/Lot No."
            />
          </div>

          <div class="sm:col-span-2">
            <input
              v-model="p.permanent.street"
              :disabled="permanentDisabled"
              :class="[
                inputBase,
                permanentDisabled && 'bg-gray-100 text-gray-500',
              ]"
              placeholder="Street"
            />
          </div>

          <div class="sm:col-span-2">
            <input
              v-model="p.permanent.subdivision"
              :disabled="permanentDisabled"
              :class="[
                inputBase,
                permanentDisabled && 'bg-gray-100 text-gray-500',
              ]"
              placeholder="Subdivision/Village"
            />
          </div>

          <div class="sm:col-span-2">
            <input
              v-model="p.permanent.barangay"
              :disabled="permanentDisabled"
              :class="[
                inputBase,
                permanentDisabled && 'bg-gray-100 text-gray-500',
              ]"
              placeholder="Barangay"
            />
          </div>

          <div class="sm:col-span-2">
            <input
              v-model="p.permanent.city"
              :disabled="permanentDisabled"
              :class="[
                inputBase,
                permanentDisabled && 'bg-gray-100 text-gray-500',
              ]"
              placeholder="City/Municipality"
            />
          </div>

          <div class="sm:col-span-1">
            <input
              v-model="p.permanent.province"
              :disabled="permanentDisabled"
              :class="[
                inputBase,
                permanentDisabled && 'bg-gray-100 text-gray-500',
              ]"
              placeholder="Province"
            />
          </div>

          <div class="sm:col-span-1">
            <input
              v-model="p.permanent.zip"
              :disabled="permanentDisabled"
              :class="[
                inputBase,
                permanentDisabled && 'bg-gray-100 text-gray-500',
              ]"
              placeholder="Zip Code"
            />
          </div>
        </div>
      </section>

      <!-- ================= CONTACT ================= -->
      <section
        v-show="active === 'contact'"
        class="rounded-2xl border border-gray-200 bg-white/60 p-6 sm:p-8"
      >
        <h2 class="text-lg font-semibold text-gray-900">Contact Details</h2>

        <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-6">
          <div class="sm:col-span-2">
            <input
              v-model="p.telephone"
              :class="inputBase"
              placeholder="Telephone No."
            />
          </div>

          <div class="sm:col-span-2">
            <input
              v-model="p.mobile"
              :class="inputBase"
              placeholder="Mobile No."
            />
          </div>

          <div class="sm:col-span-2">
            <input
              v-model="p.email"
              :class="inputBase"
              placeholder="E-mail Address"
            />
          </div>
        </div>
      </section>

      <!-- FAMILY -->
      <section
        v-show="active === 'family'"
        class="rounded-2xl border border-gray-200 bg-white/60 p-6 sm:p-8"
      >
        <h2 class="text-lg font-semibold text-gray-900">Family Background</h2>
      </section>

      <!-- EDUCATION -->
      <section
        v-show="active === 'education'"
        class="rounded-2xl border border-gray-200 bg-white/60 p-6 sm:p-8"
      >
        <h2 class="text-lg font-semibold text-gray-900">
          Educational Background
        </h2>
      </section>
      <!-- ================= SECTION NAVIGATION ================= -->
      <!-- ================= SECTION NAVIGATION ================= -->
      <div
        class="flex items-center justify-between pt-6 border-t border-gray-200"
      >
        <!-- Previous -->
        <button
          type="button"
          :disabled="isFirst"
          @click="goPrev"
          class="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>

        <div class="text-xs text-gray-500">
          Section {{ currentIndex + 1 }} of {{ sections.length }}
        </div>

        <!-- Next -->
        <button
          type="button"
          :disabled="isLast"
          @click="goNext"
          class="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </main>
  </div>
</template>
