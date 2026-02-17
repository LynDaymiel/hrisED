<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";

const router = useRouter();

const email = ref("");
const password = ref("");

const Register = async () => {
  try {
    const response = await fetch("http://localhost:3333/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    // If backend returned HTML or error, this prevents the JSON crash
    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch {
      console.error("Non-JSON response:", text);
      alert("Server did not return JSON. Check your API URL/port.");
      return;
    }

    if (data.success) {
      localStorage.setItem("token", data.token);
      router.push("/");
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
    alert("Network error. Is your server running on port 3333?");
  }
};

const emailInput = ref(null);
const passwordInput = ref(null);
const isPasswordvisible = ref(false);

function potato(event) {
  isPasswordvisible.value = !isPasswordvisible.value;
  passwordInput.value.type = isPasswordvisible.value ? "text" : "password";
}

const iconName = computed(() => {
  return isPasswordvisible.value ? "mdi:eye-outline" : "mdi:eye-off";
});

defineProps({
  imageSrc: String,
  imageSrc2: String,
});

onMounted(() => {
  emailInput.value?.focus();
});
onUnmounted(() => {});
</script>

<template>
  <div
    class="bg-white border border-gray-200 rounded-2xl shadow-lg shadow-black/5 w-11/12 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xl p-8 sm:p-10"
  >
    <div class="sm:mx-auto sm:w-full">
      <!-- Logos -->
      <div class="flex items-center justify-center gap-10">
        <!-- src="../assets/logos/shriners.png" -->
        <img
          class="mx-auto h-56 w-1/2"
          :src="imageSrc"
          alt="DepEd Dapitan City Division"
        />
        <img class="mx-auto h-46 w-1/2" :src="imageSrc2" alt="hrisED" />
      </div>

      <!-- Titles -->
      <div class="mt-6 text-center">
        <div class="text-lg font-semibold text-gray-600">
          DepEd Dapitan City Division
        </div>
        <div
          class="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#5B3CC4]"
        >
          Human Resource Information System
        </div>
      </div>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full">
      <form class="space-y-6" @submit.prevent="Register" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div class="mt-2">
            <input
              v-model="email"
              placeholder="yourfirstname.yourlastname@deped.gov.ph"
              ref="emailInput"
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              required
              class="block w-full h-11 rounded-lg bg-white px-3 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-[#5B3CC4] focus:ring-4 focus:ring-[#5B3CC4]/20"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
          </div>

          <div class="relative">
            <Icon
              :icon="iconName"
              width="24"
              height="24"
              class="absolute top-[50%] right-3 translate-y-[-50%] pointer-events-auto text-gray-500"
              @click="potato()"
            />
            <input
              v-model="password"
              placeholder="*********"
              ref="passwordInput"
              type="password"
              name="password"
              id="password"
              autocomplete="current-password"
              required
              class="block w-full h-11 rounded-lg bg-white px-3 pr-10 text-base text-gray-900 border border-gray-300 placeholder:text-gray-400 focus:outline-none focus:border-[#5B3CC4] focus:ring-4 focus:ring-[#5B3CC4]/20"
            />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
          </div>
        </div>

        <!-- Primary -->

        <!-- Secondary -->
        <div>
          <button
            type="submit"
            class="flex w-full justify-center items-center h-11 rounded-lg border border-green-600 text-green-700 font-semibold hover:bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
