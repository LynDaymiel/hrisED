<script setup>
import Header from "../components/TheWelcomeHeader.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const goTo = (path) => router.push(path);
</script>

<template>
  <div class="home-view">
    <section>
      <div class="container px-6 py-8 mx-auto text-gray-800 lg:text-3xl">
        <Header />

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8">
          <!-- FIRST BUTTON -->
          <button type="button" class="tile" @click="goTo('/dashboard')">
            <svg
              class="w-24 h-24"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 256 256"
              xml:space="preserve"
              aria-hidden="true"
            >
              <g
                style="
                  stroke: none;
                  stroke-width: 0;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: none;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <!-- circle: light lavender -->
                <circle
                  cx="45"
                  cy="45"
                  r="45"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(221, 214, 254);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform="matrix(1 0 0 1 0 0)"
                />
                <path
                  d="M 72.371 33.419 L 58.928 19.976 c -0.724 -0.724 -1.687 -1.123 -2.711 -1.123 H 20.337 c -2.114 0 -3.834 1.72 -3.834 3.833 v 32.546 v 14.128 c 4.358 5.092 10.053 9 16.545 11.182 c 3.809 1.034 7.815 1.59 11.952 1.59 c 4.137 0 8.143 -0.556 11.952 -1.59 c 6.49 -2.182 12.185 -6.088 16.542 -11.178 V 36.129 C 73.494 35.106 73.095 34.144 72.371 33.419 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(255, 255, 255);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform="matrix(1 0 0 1 0 0)"
                  stroke-linecap="round"
                />
                <path
                  d="M 72.371 33.419 L 58.928 19.976 c -0.569 -0.57 -1.289 -0.929 -2.068 -1.06 v 12.966 c 0 1.988 1.618 3.605 3.605 3.605 h 12.966 C 73.3 34.708 72.941 33.988 72.371 33.419 z"
                  style="
                    stroke: none;
                    stroke-width: 1;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: rgb(226, 226, 226);
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform="matrix(1 0 0 1 0 0)"
                  stroke-linecap="round"
                />

                <!-- details: deep purple -->
                <path
                  d="M 25.921 50.849 H 38.03 c 1.076 0 1.948 -0.872 1.948 -1.948 v -2.72 c 0 -3.69 -2.502 -6.789 -5.899 -7.714 c 1.377 -0.75 2.323 -2.193 2.323 -3.872 v -2.582 c 0 -2.444 -1.982 -4.426 -4.426 -4.426 s -4.426 1.982 -4.426 4.426 v 2.582 c 0 1.679 0.946 3.122 2.323 3.872 c -3.397 0.925 -5.899 4.023 -5.899 7.714 v 2.72 C 23.974 49.977 24.846 50.849 25.921 50.849 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                  transform="matrix(1 0 0 1 0 0)"
                  stroke-linecap="round"
                />
                <path
                  d="M 47.575 51.053 h 18.451 c 0.553 0 1 -0.447 1 -1 s -0.447 -1 -1 -1 H 47.575 c -0.553 0 -1 0.447 -1 1 S 47.022 51.053 47.575 51.053 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                  transform="matrix(1 0 0 1 0 0)"
                  stroke-linecap="round"
                />
                <path
                  d="M 66.026 67.62 H 33.551 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 h 32.475 c 0.553 0 1 -0.447 1 -1 S 66.579 67.62 66.026 67.62 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                  transform="matrix(1 0 0 1 0 0)"
                  stroke-linecap="round"
                />
                <path
                  d="M 26.684 67.62 h -1.697 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 h 1.697 c 0.552 0 1 -0.447 1 -1 S 27.236 67.62 26.684 67.62 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                  transform="matrix(1 0 0 1 0 0)"
                  stroke-linecap="round"
                />
                <path
                  d="M 66.026 59.191 H 33.551 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 h 32.475 c 0.553 0 1 -0.447 1 -1 S 66.579 59.191 66.026 59.191 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                  transform="matrix(1 0 0 1 0 0)"
                  stroke-linecap="round"
                />
                <path
                  d="M 26.684 59.191 h -1.697 c -0.552 0 -1 0.447 -1 1 s 0.448 1 1 1 h 1.697 c 0.552 0 1 -0.447 1 -1 S 27.236 59.191 26.684 59.191 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                  transform="matrix(1 0 0 1 0 0)"
                  stroke-linecap="round"
                />
                <path
                  d="M 47.575 42.624 h 9.18 c 0.553 0 1 -0.448 1 -1 s -0.447 -1 -1 -1 h -9.18 c -0.553 0 -1 0.448 -1 1 S 47.022 42.624 47.575 42.624 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                  transform="matrix(1 0 0 1 0 0)"
                  stroke-linecap="round"
                />
              </g>
            </svg>

            <p class="text-xl font-medium text-gray-900">Profile Management</p>
            <p class="text-sm font-medium text-gray-700 text-center">
              View and update your personal profile.
            </p>
          </button>

          <!-- SECOND BUTTON -->
          <button type="button" class="tile" @click="goTo('/request')">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              class="w-24 h-24"
              viewBox="0 0 256 256"
              xml:space="preserve"
            >
              <g
                style="
                  stroke: none;
                  stroke-width: 0;
                  stroke-dasharray: none;
                  stroke-linecap: butt;
                  stroke-linejoin: miter;
                  stroke-miterlimit: 10;
                  fill: none;
                  fill-rule: nonzero;
                  opacity: 1;
                "
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <!-- base panel -->
                <rect
                  x="11.2"
                  y="2.44"
                  width="67.61"
                  height="46.11"
                  style="fill: rgb(243, 232, 255); opacity: 1"
                />

                <!-- blue -> purple -->
                <rect
                  x="20.68"
                  y="12.71"
                  width="23.98"
                  height="16.48"
                  style="fill: rgb(168, 85, 247); opacity: 1"
                />

                <!-- blue -> purple -->
                <polygon
                  points="63.77,79.39 54.67,79.48 49.75,87.56 49.17,68.81"
                  style="fill: rgb(168, 85, 247); opacity: 1"
                />

                <!-- green -> lavender purple -->
                <path
                  d="M 86.255 48.548 H 3.745 C 2.229 48.548 1 49.777 1 51.293 V 73.58 c 0 1.516 1.229 2.745 2.745 2.745 h 45.658 l -0.229 -7.519 l 10.366 7.519 h 26.716 c 1.516 0 2.745 -1.229 2.745 -2.745 V 51.293 C 89 49.777 87.771 48.548 86.255 48.548 z"
                  style="fill: rgb(221, 214, 254); opacity: 1"
                />

                <!-- blacks -> deep purple -->
                <path
                  d="M 41.375 63.437 h -4.807 c -0.552 0 -1 -0.447 -1 -1 v -6.982 c 0 -0.553 0.448 -1 1 -1 h 4.807 c 2.023 0 3.67 1.646 3.67 3.67 v 1.643 C 45.045 61.79 43.398 63.437 41.375 63.437 z M 37.568 61.437 h 3.807 c 0.921 0 1.67 -0.749 1.67 -1.67 v -1.643 c 0 -0.921 -0.749 -1.67 -1.67 -1.67 h -3.807 V 61.437 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 41.375 70.419 h -4.807 c -0.552 0 -1 -0.447 -1 -1 v -6.982 c 0 -0.553 0.448 -1 1 -1 h 4.807 c 2.023 0 3.67 1.646 3.67 3.67 v 1.643 C 45.045 68.772 43.398 70.419 41.375 70.419 z M 37.568 68.419 h 3.807 c 0.921 0 1.67 -0.749 1.67 -1.67 v -1.643 c 0 -0.921 -0.749 -1.67 -1.67 -1.67 h -3.807 V 68.419 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 67.18 70.419 c -0.553 0 -1 -0.447 -1 -1 V 55.454 c 0 -0.553 0.447 -1 1 -1 s 1 0.447 1 1 v 13.965 C 68.18 69.972 67.732 70.419 67.18 70.419 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 60.855 70.419 c -0.553 0 -1 -0.447 -1 -1 V 58.557 l -3.211 4.464 c -0.188 0.261 -0.49 0.416 -0.812 0.416 l 0 0 c -0.322 0 -0.624 -0.155 -0.812 -0.416 l -3.21 -4.463 v 5.74 c 0 0.553 -0.447 1 -1 1 s -1 -0.447 -1 -1 v -8.844 c 0 -0.435 0.28 -0.818 0.693 -0.952 c 0.41 -0.13 0.864 0.016 1.118 0.368 l 4.21 5.854 l 4.211 -5.854 c 0.254 -0.353 0.709 -0.498 1.118 -0.368 c 0.413 0.134 0.693 0.518 0.693 0.952 v 13.965 C 61.855 69.972 61.408 70.419 60.855 70.419 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 81.209 56.454 H 72.4 c -0.553 0 -1 -0.447 -1 -1 s 0.447 -1 1 -1 h 8.809 c 0.553 0 1 0.447 1 1 S 81.762 56.454 81.209 56.454 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 76.805 70.419 c -0.553 0 -1 -0.447 -1 -1 V 55.454 c 0 -0.553 0.447 -1 1 -1 s 1 0.447 1 1 v 13.965 C 77.805 69.972 77.357 70.419 76.805 70.419 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 27.606 70.419 H 24.96 c -2.211 0 -4.011 -1.799 -4.011 -4.011 V 55.454 c 0 -0.553 0.448 -1 1 -1 s 1 0.447 1 1 v 10.954 c 0 1.108 0.902 2.011 2.011 2.011 h 2.646 c 1.109 0 2.011 -0.902 2.011 -2.011 V 55.454 c 0 -0.553 0.448 -1 1 -1 s 1 0.447 1 1 v 10.954 C 31.617 68.62 29.817 70.419 27.606 70.419 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 12.907 70.419 h -1.295 c -2.107 0 -3.821 -1.666 -3.821 -3.713 c 0 -0.553 0.448 -1 1 -1 s 1 0.447 1 1 c 0 0.944 0.817 1.713 1.821 1.713 h 1.295 c 1.086 0 1.971 -0.833 1.971 -1.857 v -1.269 c 0 -1.023 -0.884 -1.856 -1.971 -1.856 h -1.146 c -2.189 0 -3.971 -1.73 -3.971 -3.856 v -1.269 c 0 -2.127 1.781 -3.857 3.971 -3.857 h 1.295 c 2.107 0 3.821 1.666 3.821 3.713 c 0 0.553 -0.448 1 -1 1 s -1 -0.447 -1 -1 c 0 -0.944 -0.817 -1.713 -1.821 -1.713 h -1.295 c -1.086 0 -1.971 0.833 -1.971 1.857 v 1.269 c 0 1.023 0.884 1.856 1.971 1.856 h 1.146 c 2.189 0 3.971 1.73 3.971 3.856 v 1.269 C 16.878 68.688 15.097 70.419 12.907 70.419 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />

                <path
                  d="M 78.803 49.548 H 11.197 c -0.552 0 -1 -0.447 -1 -1 V 2.438 c 0 -0.552 0.448 -1 1 -1 h 67.606 c 0.553 0 1 0.448 1 1 v 46.11 C 79.803 49.101 79.355 49.548 78.803 49.548 z M 12.197 47.548 h 65.606 V 3.438 H 12.197 V 47.548 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 44.66 30.193 H 20.685 c -0.552 0 -1 -0.448 -1 -1 V 12.711 c 0 -0.552 0.448 -1 1 -1 H 44.66 c 0.552 0 1 0.448 1 1 v 16.482 C 45.66 29.746 45.212 30.193 44.66 30.193 z M 21.685 28.193 H 43.66 V 13.711 H 21.685 V 28.193 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 69.315 13.711 h -15.12 c -0.553 0 -1 -0.448 -1 -1 s 0.447 -1 1 -1 h 15.12 c 0.553 0 1 0.448 1 1 S 69.868 13.711 69.315 13.711 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 69.315 21.952 h -15.12 c -0.553 0 -1 -0.448 -1 -1 s 0.447 -1 1 -1 h 15.12 c 0.553 0 1 0.448 1 1 S 69.868 21.952 69.315 21.952 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 69.315 39.275 H 20.685 c -0.552 0 -1 -0.448 -1 -1 s 0.448 -1 1 -1 h 48.631 c 0.553 0 1 0.448 1 1 S 69.868 39.275 69.315 39.275 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 61.369 30.193 h -7.174 c -0.553 0 -1 -0.448 -1 -1 s 0.447 -1 1 -1 h 7.174 c 0.553 0 1 0.448 1 1 S 61.922 30.193 61.369 30.193 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 49.746 88.562 c -0.085 0 -0.171 -0.011 -0.256 -0.033 c -0.428 -0.113 -0.73 -0.494 -0.744 -0.937 l -0.572 -18.756 c -0.011 -0.381 0.195 -0.735 0.532 -0.914 c 0.336 -0.18 0.746 -0.149 1.055 0.074 l 14.593 10.584 c 0.35 0.254 0.497 0.702 0.366 1.113 c -0.132 0.411 -0.512 0.692 -0.943 0.696 l -8.541 0.082 l -4.635 7.61 C 50.416 88.386 50.089 88.562 49.746 88.562 z M 50.235 70.812 l 0.407 13.356 l 3.173 -5.21 c 0.18 -0.295 0.499 -0.477 0.845 -0.479 l 6.064 -0.059 L 50.235 70.812 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
                <path
                  d="M 86.255 77.325 H 59.539 c -0.211 0 -0.416 -0.066 -0.587 -0.19 l -8.717 -6.322 l 0.168 5.482 c 0.008 0.271 -0.094 0.532 -0.282 0.727 s -0.447 0.304 -0.718 0.304 H 3.745 C 1.68 77.325 0 75.646 0 73.58 V 51.293 c 0 -2.065 1.68 -3.745 3.745 -3.745 h 82.51 c 2.065 0 3.745 1.68 3.745 3.745 V 73.58 C 90 75.646 88.32 77.325 86.255 77.325 z M 59.863 75.325 h 26.392 c 0.962 0 1.745 -0.783 1.745 -1.745 V 51.293 c 0 -0.962 -0.783 -1.745 -1.745 -1.745 H 3.745 C 2.783 49.548 2 50.331 2 51.293 V 73.58 c 0 0.962 0.783 1.745 1.745 1.745 h 44.627 l -0.198 -6.488 c -0.011 -0.381 0.195 -0.735 0.532 -0.914 c 0.336 -0.18 0.746 -0.149 1.055 0.074 L 59.863 75.325 z"
                  style="fill: rgb(126, 34, 206); opacity: 1"
                />
              </g>
            </svg>

            <p class="text-xl font-medium text-gray-900">Submit a request</p>
            <p class="text-sm font-medium text-gray-700 text-center">
              Service Record, Leave Credit balance, etc
            </p>
          </button>

          <!-- THIRD BUTTON -->
          <button
            type="button"
            class="tile"
            @click="goTo('/under-construction')"
          >
            <p class="text-xl font-medium text-gray-900">Under construction</p>
            <p class="text-sm font-medium text-gray-700 text-center">
              THIRD button
            </p>
          </button>

          <!-- FOURTH BUTTON -->
          <button
            type="button"
            class="tile"
            @click="goTo('/under-construction')"
          >
            <p class="text-xl font-medium text-gray-900">Under Construction</p>
            <p class="text-sm font-medium text-gray-700 text-center">
              FOURTH button
            </p>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  background: oklch(100% 0.00011 271.152);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* darker tiles */
.tile {
  min-height: 16rem;
  border-radius: 0.75rem;
  background: rgb(233, 213, 255); /* purple-200 */
  border: 1px solid rgba(126, 34, 206, 0.18);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.5rem;
  cursor: pointer;
  transition:
    background 150ms ease,
    transform 150ms ease,
    border-color 150ms ease;
}

.tile:hover {
  background: oklch(96.9% 0.016 293.756);
  border-color: rgba(126, 34, 206, 0.3);
  transform: translateY(-2px);
}

.tile:focus-visible {
  outline: none;
  box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.4);
}
</style>
