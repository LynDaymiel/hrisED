<script setup>
	import { ref, onMounted, onUnmounted, computed } from "vue";
	import { Icon } from "@iconify/vue";
	import axios from "axios";
	import { useRouter } from "vue-router";

	const router = useRouter();

	// 1. Reactive Variables
	const email = ref("");
	const password = ref("");
	const errorMessage = ref("");
	const isLoading = ref(false);

	const handleLogin = async () => {
		// Reset UI state
		errorMessage.value = "";
		isLoading.value = true;

		try {
			// 3. Send Request to your new MySQL Server
			const response = await axios.post("http://localhost:5000/api/login", {
				email: email.value,
				password: password.value,
			});

			console.log("✅ Login Success:", response.data);

			// 4. Save User Info (This matches your backend response structure)
			if (response.data.user) {
				localStorage.setItem("userId", response.data.user.id);
				localStorage.setItem("userEmail", response.data.user.email);

				// Optional: Store the whole object
				// localStorage.setItem('user', JSON.stringify(response.data.user));
			}

			// 5. Redirect to Dashboard (Make sure this route exists!)
			router.push("/home");
		} catch (error) {
			console.error("❌ Login Failed:", error);

			// 6. Handle Errors Gracefully
			if (error.response) {
				// Server replied with 401 (Invalid creds) or 500 (Server error)
				errorMessage.value = error.response.data.error || "Login failed.";
			} else if (error.request) {
				// Server is offline or unreachable
				errorMessage.value =
					"Cannot connect to server. Is 'node index.js' running?";
			} else {
				errorMessage.value = "An unexpected error occurred.";
			}
		} finally {
			isLoading.value = false;
		}
	};

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
			<form class="space-y-6" @submit.prevent="handleLogin" method="POST">
				<div>
					<label for="email" class="block text-sm font-medium text-gray-700">
						Email address
					</label>
					<div class="mt-2">
						<input
							v-model="email"
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
							v-model="password"
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
				<div v-if="errorMessage" class="error-alert">
					{{ errorMessage }}
				</div>
				<div>
					<button
						type="submit"
						:disabled="isLoading"
						class="flex w-full justify-center items-center h-11 rounded-lg bg-purple-800 text-white font-semibold hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-200 disabled:bg-purple-400 disabled:cursor-not-allowed disabled:hover:bg-purple-400"
					>
						<span v-if="isLoading">Logging in...</span>
						<span v-else>Login</span>
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

<style scoped>
	/* Clean, Modern CSS */

	.error-alert {
		background-color: #fef2f2;
		border: 1px solid #fecaca;
		color: #991b1b;
		padding: 0.75rem;
		border-radius: 6px;
		font-size: 0.875rem;
		margin-bottom: 1rem;
		text-align: center;
	}
</style>
