<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { Icon } from "@iconify/vue";

const usernameInput = ref(null);
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

const handleGlobalTab = (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    passwordInput.value.focus();
  }
};

onMounted(() => {
  usernameInput.value?.focus();
  window.addEventListener("keydown", handleGlobalTab);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleGlobalTab);
});
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
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <div class="mt-2">
            <input
              ref="usernameInput"
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

            <div class="text-sm">
              <a
                href="ForgetPassword.vue"
                class="font-semibold text-[#5B3CC4] hover:opacity-90"
              >
                Forgot password?
              </a>
            </div>
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

        <!-- Primary -->
        <div>
          <button
            type="submit"
            class="flex w-full justify-center items-center h-11 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
          >
            Sign in
          </button>
        </div>

        <!-- Secondary -->
        <div>
          <button
            type="button"
            class="flex w-full justify-center items-center h-11 rounded-lg border border-green-600 text-green-700 font-semibold hover:bg-green-50 focus:outline-none focus:ring-4 focus:ring-green-200"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
