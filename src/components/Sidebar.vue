<script setup>
import { ref } from "vue";
import {
  HomeIcon,
  UserGroupIcon,
  TicketIcon,
  Cog6ToothIcon,
  ChevronUpIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";

defineProps({ imageSrc: String });

const accountsOpen = ref(false);
const sidebarOpen = ref(false);
</script>

<template>
  <!-- Mobile hamburger button -->
  <button
    @click="sidebarOpen = true"
    class="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white border border-gray-200"
  >
    <Bars3Icon class="w-6 h-6 text-gray-700" />
  </button>

  <!-- Mobile overlay -->
  <div
    v-if="sidebarOpen"
    @click="sidebarOpen = false"
    class="md:hidden fixed inset-0 z-30 bg-black/50"
  ></div>

  <aside
    :class="sidebarOpen ? 'flex' : 'hidden md:flex'"
    class="flex-col w-64 h-screen fixed left-0 top-0 z-40 px-4 py-8 overflow-y-auto bg-white border-r"
    style="border-right-color: rgba(126, 34, 206, 0.25)"
  >
    <!-- Close button (mobile only) -->
    <button
      @click="sidebarOpen = false"
      class="md:hidden absolute top-4 right-4 p-1 text-gray-500 hover:text-gray-700"
    >
      <XMarkIcon class="w-6 h-6" />
    </button>

    <!-- Logo -->
    <a href="#" class="mx-auto">
      <img class="w-16 sm:w-20 md:w-24 h-auto" :src="imageSrc" alt="" />
    </a>

    <!-- User -->
    <div class="flex flex-col items-center mt-6">
      <img
        class="object-cover w-24 h-24 rounded-full"
        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80"
        alt="avatar"
      />
      <h4 class="mt-3 font-semibold text-gray-900">John Doe</h4>
      <p class="mt-1 text-sm text-gray-600">john@example.com</p>
    </div>

    <!-- Nav -->
    <div class="flex flex-col justify-between flex-1 mt-8">
      <nav class="space-y-1">
        <!-- Item style:
             Neutral default
             Purple on hover
        -->
        <a
          href="#"
          @click="sidebarOpen = false"
          class="group flex items-center px-4 py-2 rounded-lg transition text-gray-800 hover:text-purple-700 hover:bg-purple-50"
        >
          <HomeIcon
            class="w-5 h-5 text-gray-500 group-hover:text-purple-600 transition"
          />
          <span class="ml-4 font-medium">View Employee Profile</span>
        </a>

        <!-- Accounts -->
        <div>
          <button
            type="button"
            @click="accountsOpen = !accountsOpen"
            class="group flex items-center w-full px-4 py-2 rounded-lg transition text-gray-800 hover:text-purple-700 hover:bg-purple-50"
          >
            <UserGroupIcon
              class="w-5 h-5 text-gray-500 group-hover:text-purple-600 transition"
            />
            <span class="ml-4 flex-1 text-left font-medium">Accounts</span>

            <ChevronUpIcon
              :class="!accountsOpen ? 'rotate-180' : ''"
              class="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-transform duration-300"
            />
          </button>

          <div v-if="accountsOpen" class="ml-8 mt-1 space-y-1">
            <a
              href="#"
              @click="sidebarOpen = false"
              class="block px-4 py-2 text-sm rounded-lg transition text-gray-700 hover:text-purple-700 hover:bg-purple-50"
            >
              View Employees
            </a>
            <a
              href="#"
              @click="sidebarOpen = false"
              class="block px-4 py-2 text-sm rounded-lg transition text-gray-700 hover:text-purple-700 hover:bg-purple-50"
            >
              Manage Roles
            </a>
            <a
              href="#"
              @click="sidebarOpen = false"
              class="block px-4 py-2 text-sm rounded-lg transition text-gray-700 hover:text-purple-700 hover:bg-purple-50"
            >
              Permissions
            </a>
          </div>
        </div>

        <a
          href="#"
          @click="sidebarOpen = false"
          class="group flex items-center px-4 py-2 rounded-lg transition text-gray-800 hover:text-purple-700 hover:bg-purple-50"
        >
          <TicketIcon
            class="w-5 h-5 text-gray-500 group-hover:text-purple-600 transition"
          />
          <span class="ml-4 font-medium">Tickets</span>
        </a>

        <a
          href="#"
          @click="sidebarOpen = false"
          class="group flex items-center px-4 py-2 rounded-lg transition text-gray-800 hover:text-purple-700 hover:bg-purple-50"
        >
          <Cog6ToothIcon
            class="w-5 h-5 text-gray-500 group-hover:text-purple-600 transition"
          />
          <span class="ml-4 font-medium">Settings</span>
        </a>
      </nav>
    </div>
  </aside>
</template>
