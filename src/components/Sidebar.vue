<script setup>
	defineProps({
		imageSrc: String,
	});
</script>
<template>
	<div
		class="flex h-screen flex-col justify-between border-e border-gray-400 bg-white"
	>
		<div class="w-80 py-6">
			<img class="mx-auto h-36 w-1/2" :src="imageSrc" alt="hrisED" />

			<ul class="mt-6 space-y-1">
				<li>
					<a
						href="#"
						class="block rounded-lg bg-gray-100 px-4 py-2 text-lg font-medium text-gray-700"
					>
						View Personal Information
					</a>
				</li>

				<li>
					<details class="group [&_summary::-webkit-details-marker]:hidden">
						<summary
							class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
						>
							<span class="text-lg font-medium"
								>Update Personal Information</span
							>

							<span
								class="shrink-0 transition duration-300 group-open:-rotate-180"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="size-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clip-rule="evenodd"
									></path>
								</svg>
							</span>
						</summary>

						<ul class="mt-2 space-y-1 px-4">
							<li>
								<!-- ✅ give this a NAMED group: group/pds1 -->
								<details
									class="group/pds1 [&_summary::-webkit-details-marker]:hidden"
								>
									<summary
										class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
									>
										<span>PDS Page 1 - Personal Information</span>

										<!-- ✅ rotate only when THIS details is open -->
										<span
											class="shrink-0 transition duration-300 group-open/pds1:-rotate-180"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="size-4"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
													clip-rule="evenodd"
												></path>
											</svg>
										</span>
									</summary>

									<ul class="mt-2 space-y-1 pl-4">
										<li>
											<a
												href="#pds1-basic"
												class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
											>
												Family Background
											</a>
										</li>
										<li>
											<a
												href="#pds1-address"
												class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
											>
												Educational Background
											</a>
										</li>
									</ul>
								</details>
							</li>

							<li>
								<!-- ✅ give this a NAMED group: group/pds2 -->
								<details
									class="group/pds2 [&_summary::-webkit-details-marker]:hidden"
								>
									<summary
										class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
									>
										<span>PDS Page 2 - Civil Service Eligibility</span>

										<!-- ✅ rotate only when THIS details is open -->
										<span
											class="shrink-0 transition duration-300 group-open/pds1:-rotate-180"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="size-4"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
													clip-rule="evenodd"
												></path>
											</svg>
										</span>
									</summary>

									<ul class="mt-2 space-y-1 pl-4">
										<li>
											<a
												href="#pds1-basic"
												class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
											>
												Family Background
											</a>
										</li>
										<li>
											<a
												href="#pds1-address"
												class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
											>
												Educational Background
											</a>
										</li>
									</ul>
								</details>
							</li>

							<li>
								<a
									href="#pds3"
									class="block rounded-lg px-4 py-2 text-md font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									PDS Page 3 - Voluntary Work, Learning and Development
									(L&amp;D) Interventions/Trainings
								</a>
							</li>
						</ul>
					</details>
				</li>

				<li>
					<details class="group [&amp;_summary::-webkit-details-marker]:hidden">
						<summary
							class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
						>
							<span class="text-lg font-medium"> Account </span>

							<span
								class="shrink-0 transition duration-300 group-open:-rotate-180"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="size-5"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
										clip-rule="evenodd"
									></path>
								</svg>
							</span>
						</summary>

						<ul class="mt-2 space-y-1 px-4">
							<li>
								<a
									href="#"
									class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									Details
								</a>
							</li>

							<li>
								<a
									href="#"
									class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									Security
								</a>
							</li>

							<li>
								<a
									href="#"
									class="w-full rounded-lg px-4 py-2 [text-align:_inherit] text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
								>
									Logout
								</a>
							</li>
						</ul>
					</details>
				</li>
			</ul>
		</div>

		<div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
			<a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
				<img
					alt=""
					src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
					class="size-10 rounded-full object-cover"
				/>

				<div>
					<p class="text-xs">
						<strong class="block font-medium">Eric Frusciante</strong>

						<span> eric@frusciante.com </span>
					</p>
				</div>
			</a>
		</div>
	</div>
</template>
