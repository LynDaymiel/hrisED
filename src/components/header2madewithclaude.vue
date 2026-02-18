<script setup>
	import { computed, ref } from "vue";

	// Pages with their own substeps
	const pages = [
		{
			label: "PDS Page 1",
			steps: [
				{ label: "Personal Information" },
				{ label: "Address" },
				{ label: "Payment" },
			],
		},
		{
			label: "PDS Page 2",
			steps: [
				{ label: "Family Background" },
				{ label: "Educational Background" },
				{ label: "Civil Service Eligibility" },
			],
		},
		{
			label: "PDS Page 3",
			steps: [
				{ label: "Work Experience" },
				{ label: "Voluntary Work" },
				{ label: "Learning & Development" },
			],
		},
		{
			label: "PDS Page 4",
			steps: [
				{ label: "Other Information" },
				{ label: "Questions" },
				{ label: "References" },
			],
		},
	];

	const currentPage = ref(0);
	const currentStep = ref(0);

	const activeSteps = computed(() => pages[currentPage.value].steps);
	const maxStep = computed(() => activeSteps.value.length - 1);
	const maxPage = computed(() => pages.length - 1);

	const isFirstStep = computed(() => currentStep.value === 0);
	const isLastStep = computed(() => currentStep.value === maxStep.value);
	const isFirstPage = computed(() => currentPage.value === 0);
	const isLastPage = computed(() => currentPage.value === maxPage.value);

	const isAbsoluteFirst = computed(
		() => isFirstPage.value && isFirstStep.value,
	);
	const isAbsoluteLast = computed(() => isLastPage.value && isLastStep.value);

	const stepProgressPct = computed(() =>
		activeSteps.value.length <= 1
			? 100
			: (currentStep.value / (activeSteps.value.length - 1)) * 100,
	);

	const goToPage = (pIdx) => {
		currentPage.value = pIdx;
		currentStep.value = 0;
	};

	const goToStep = (sIdx) => {
		currentStep.value = sIdx;
	};

	const goPrev = () => {
		if (!isFirstStep.value) {
			currentStep.value -= 1;
		} else if (!isFirstPage.value) {
			currentPage.value -= 1;
			currentStep.value = pages[currentPage.value].steps.length - 1;
		}
	};

	const goNext = () => {
		if (!isLastStep.value) {
			currentStep.value += 1;
		} else if (!isLastPage.value) {
			currentPage.value += 1;
			currentStep.value = 0;
		}
	};

	const form = ref({
		surname: "",
		firstName: "",
		middleName: "",
		nameExt: "",
		dateOfBirth: "",
		placeOfBirth: "",
		sexAtBirth: "",
		civilStatus: "",
		heightM: "",
		weightKg: "",
		bloodType: "",
		umid: "",
		pagibig: "",
		philhealth: "",
		psn: "",
		tin: "",
		agencyEmployeeNo: "",
		resHouseNo: "",
		resStreet: "",
		resSubdivision: "",
		resBarangay: "",
		resCity: "",
		resProvince: "",
		resZip: "",
		perHouseNo: "",
		perStreet: "",
		perSubdivision: "",
		perBarangay: "",
		perCity: "",
		perProvince: "",
		perZip: "",
		telephone: "",
		mobile: "",
		email: "",
	});

	const field =
		"w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 shadow-sm transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100";
	const lbl = "mb-1.5 block text-xs font-semibold text-gray-500";
</script>

<template>
	<div
		class="min-h-screen bg-[#F3F4F6]"
		style="
			font-family: &quot;Inter&quot;, &quot;Helvetica Neue&quot;, sans-serif;
		"
	>
		<div class="mx-auto w-full max-w-7xl px-6 py-8">
			<!-- ── Header ── -->
			<div
				class="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
			>
				<div>
					<p
						class="text-[10px] font-bold uppercase tracking-widest text-gray-400"
					>
						Republic of the Philippines · Civil Service Commission
					</p>
					<h1 class="mt-0.5 text-2xl font-bold text-gray-800">
						Personal Data Sheet
					</h1>
				</div>
				<span
					class="self-start rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-gray-500 shadow-sm ring-1 ring-gray-200 sm:self-auto"
				>
					CS Form No. 212 · Revised 2017
				</span>
			</div>

			<!-- ── Page tabs ── -->
			<div class="mb-4 flex flex-wrap gap-2">
				<button
					v-for="(p, pIdx) in pages"
					:key="pIdx"
					type="button"
					@click="goToPage(pIdx)"
					class="rounded-full px-4 py-1.5 text-sm font-semibold transition-all"
					:class="
						pIdx === currentPage
							? 'bg-gray-800 text-white shadow-sm'
							: pIdx < currentPage
								? 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200 hover:bg-emerald-100'
								: 'bg-white text-gray-500 ring-1 ring-gray-200 hover:bg-gray-50'
					"
				>
					{{ p.label }}
				</button>
			</div>

			<!-- ── Substep bar ── -->
			<div class="mb-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
				<div
					class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
				>
					<!-- Substep pills -->
					<div class="flex flex-wrap gap-2">
						<button
							v-for="(s, sIdx) in activeSteps"
							:key="sIdx"
							type="button"
							@click="goToStep(sIdx)"
							class="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold transition-all"
							:class="
								sIdx === currentStep
									? 'bg-blue-500 text-white shadow-sm'
									: sIdx < currentStep
										? 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200 hover:bg-emerald-100'
										: 'bg-gray-100 text-gray-500 hover:bg-gray-200'
							"
						>
							<span
								class="grid h-5 w-5 place-items-center rounded-full text-[10px] font-bold"
								:class="
									sIdx === currentStep
										? 'bg-white/25 text-white'
										: sIdx < currentStep
											? 'bg-emerald-500 text-white'
											: 'bg-white text-gray-400 ring-1 ring-gray-200'
								"
							>
								<span v-if="sIdx < currentStep">✓</span>
								<span v-else>{{ sIdx + 1 }}</span>
							</span>
							{{ s.label }}
						</button>
					</div>

					<!-- Prev / Next -->
					<div class="flex shrink-0 gap-2">
						<button
							type="button"
							@click="goPrev"
							:disabled="isAbsoluteFirst"
							class="rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-gray-600 shadow-sm transition hover:bg-gray-50 disabled:opacity-40"
						>
							← Back
						</button>
						<button
							type="button"
							@click="goNext"
							:disabled="isAbsoluteLast"
							class="rounded-full bg-blue-500 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 disabled:opacity-40"
						>
							Continue →
						</button>
					</div>
				</div>

				<!-- Progress bar -->
				<div class="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
					<div
						class="h-full rounded-full bg-blue-400 transition-all duration-500"
						:style="{ width: `${stepProgressPct}%` }"
					/>
				</div>
			</div>

			<!-- ── Body ── -->
			<div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
				<!-- ── Main form (wider) ── -->
				<div class="space-y-5 lg:col-span-9">
					<!-- ══ PAGE 1 ══ -->
					<template v-if="currentPage === 0">
						<!-- Step 1 — Personal Information -->
						<template v-if="currentStep === 0">
							<!-- Name -->
							<div
								class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
							>
								<p class="mb-1 text-sm font-bold text-gray-700">Full Name</p>
								<p class="mb-5 text-xs text-gray-400">
									Use official spelling as it appears on government-issued ID
								</p>
								<div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
									<div
										v-for="[key, label, ph] in [
											['surname', 'Surname', 'DELA CRUZ'],
											['firstName', 'First Name', 'JUAN'],
											['middleName', 'Middle Name', 'SANTOS'],
											['nameExt', 'Ext.', 'JR.'],
										]"
										:key="key"
									>
										<label :class="lbl">{{ label }}</label>
										<input
											v-model="form[key]"
											:placeholder="ph"
											:class="field"
										/>
									</div>
								</div>
							</div>

							<!-- Birth & Status -->
							<div
								class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
							>
								<p class="mb-1 text-sm font-bold text-gray-700">
									Birth & Civil Status
								</p>
								<p class="mb-5 text-xs text-gray-400">Basic personal details</p>
								<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
									<div>
										<label :class="lbl">Date of Birth</label>
										<input
											v-model="form.dateOfBirth"
											type="date"
											:class="field"
										/>
										<p class="mt-1.5 text-[11px] text-gray-400">
											Will be formatted as dd/mm/yyyy for printing
										</p>
									</div>
									<div>
										<label :class="lbl">Place of Birth</label>
										<input
											v-model="form.placeOfBirth"
											placeholder="City/Municipality, Province"
											:class="field"
										/>
									</div>
									<div>
										<label :class="lbl">Sex at Birth</label>
										<select v-model="form.sexAtBirth" :class="field">
											<option value="">Select</option>
											<option>Male</option>
											<option>Female</option>
										</select>
									</div>
									<div>
										<label :class="lbl">Civil Status</label>
										<select v-model="form.civilStatus" :class="field">
											<option value="">Select</option>
											<option>Single</option>
											<option>Married</option>
											<option>Widowed</option>
											<option>Separated</option>
											<option>Others</option>
										</select>
									</div>
								</div>
							</div>

							<!-- Physical -->
							<div
								class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
							>
								<p class="mb-1 text-sm font-bold text-gray-700">
									Physical Details
								</p>
								<p class="mb-5 text-xs text-gray-400">
									Measurements and blood type
								</p>
								<div class="grid grid-cols-3 gap-4">
									<div
										v-for="[key, label, ph] in [
											['heightM', 'Height (m)', '1.65'],
											['weightKg', 'Weight (kg)', '58'],
											['bloodType', 'Blood Type', 'O+'],
										]"
										:key="key"
									>
										<label :class="lbl">{{ label }}</label>
										<input
											v-model="form[key]"
											:placeholder="ph"
											:class="field"
										/>
									</div>
								</div>
							</div>

							<!-- Government IDs -->
							<div
								class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
							>
								<p class="mb-1 text-sm font-bold text-gray-700">
									Government IDs
								</p>
								<p class="mb-5 text-xs text-gray-400">
									Provide valid and active ID numbers
								</p>
								<div
									class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
								>
									<div
										v-for="[key, label] in [
											['umid', 'UMID ID No.'],
											['pagibig', 'Pag-IBIG ID No.'],
											['philhealth', 'PhilHealth No.'],
											['psn', 'PhilSys No. (PSN)'],
											['tin', 'TIN No.'],
											['agencyEmployeeNo', 'Agency Employee No.'],
										]"
										:key="key"
									>
										<label :class="lbl">{{ label }}</label>
										<input v-model="form[key]" :class="field" />
									</div>
								</div>
							</div>

							<!-- Contact -->
							<div
								class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
							>
								<p class="mb-1 text-sm font-bold text-gray-700">
									Contact Details
								</p>
								<p class="mb-5 text-xs text-gray-400">
									Active and reachable contact information
								</p>
								<div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
									<div>
										<label :class="lbl">Telephone No.</label>
										<input
											v-model="form.telephone"
											inputmode="tel"
											:class="field"
										/>
									</div>
									<div>
										<label :class="lbl">Mobile No.</label>
										<input
											v-model="form.mobile"
											inputmode="tel"
											placeholder="09xxxxxxxxx"
											:class="field"
										/>
									</div>
									<div>
										<label :class="lbl">Email Address</label>
										<input
											v-model="form.email"
											type="email"
											placeholder="name@example.com"
											:class="field"
										/>
									</div>
								</div>
							</div>
						</template>

						<!-- Step 2 — Address -->
						<template v-else-if="currentStep === 1">
							<div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
								<div
									v-for="[prefix, title, sub] in [
										[
											'res',
											'Residential Address',
											'Current place of residence',
										],
										['per', 'Permanent Address', 'Permanent home address'],
									]"
									:key="prefix"
									class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100"
								>
									<p class="mb-1 text-sm font-bold text-gray-700">
										{{ title }}
									</p>
									<p class="mb-5 text-xs text-gray-400">{{ sub }}</p>
									<div class="grid grid-cols-2 gap-4">
										<div
											v-for="[suffix, label] in [
												['HouseNo', 'House / Lot No.'],
												['Street', 'Street'],
												['Subdivision', 'Subdivision'],
												['Barangay', 'Barangay'],
												['City', 'City / Municipality'],
												['Province', 'Province'],
											]"
											:key="suffix"
										>
											<label :class="lbl">{{ label }}</label>
											<input v-model="form[prefix + suffix]" :class="field" />
										</div>
										<div class="col-span-2">
											<label :class="lbl">ZIP Code</label>
											<input v-model="form[prefix + 'Zip']" :class="field" />
										</div>
									</div>
								</div>
							</div>
						</template>

						<!-- Step 3 — Payment (placeholder) -->
						<template v-else>
							<div
								class="rounded-2xl bg-white p-16 text-center shadow-sm ring-1 ring-gray-100"
							>
								<p class="text-3xl">💳</p>
								<p class="mt-3 text-base font-bold text-gray-700">Payment</p>
								<p class="mt-1 text-sm text-gray-400">
									Add payment fields here.
								</p>
							</div>
						</template>
					</template>

					<!-- ══ PAGE 2 — placeholders ══ -->
					<template v-else-if="currentPage === 1">
						<div
							class="rounded-2xl bg-white p-16 text-center shadow-sm ring-1 ring-gray-100"
						>
							<p class="text-3xl">👨‍👩‍👧</p>
							<p class="mt-3 text-base font-bold text-gray-700">
								{{ activeSteps[currentStep].label }}
							</p>
							<p class="mt-1 text-sm text-gray-400">
								PDS Page 2 — add fields for this step here.
							</p>
						</div>
					</template>

					<!-- ══ PAGE 3 — placeholders ══ -->
					<template v-else-if="currentPage === 2">
						<div
							class="rounded-2xl bg-white p-16 text-center shadow-sm ring-1 ring-gray-100"
						>
							<p class="text-3xl">💼</p>
							<p class="mt-3 text-base font-bold text-gray-700">
								{{ activeSteps[currentStep].label }}
							</p>
							<p class="mt-1 text-sm text-gray-400">
								PDS Page 3 — add fields for this step here.
							</p>
						</div>
					</template>

					<!-- ══ PAGE 4 — placeholders ══ -->
					<template v-else>
						<div
							class="rounded-2xl bg-white p-16 text-center shadow-sm ring-1 ring-gray-100"
						>
							<p class="text-3xl">📋</p>
							<p class="mt-3 text-base font-bold text-gray-700">
								{{ activeSteps[currentStep].label }}
							</p>
							<p class="mt-1 text-sm text-gray-400">
								PDS Page 4 — add fields for this step here.
							</p>
						</div>
					</template>
				</div>

				<!-- ── Sidebar (narrower) ── -->
				<aside class="space-y-4 lg:col-span-3">
					<!-- Guidance -->
					<div class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
						<p class="mb-1 text-sm font-bold text-gray-700">Guidance</p>
						<p class="mb-4 text-xs text-gray-400">Tips for this section</p>
						<p class="text-xs leading-relaxed text-gray-500">
							Ensure all entries match your official records. Inaccurate
							information may delay processing.
						</p>
						<div class="mt-4 rounded-xl bg-blue-50 p-4">
							<p
								class="mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-500"
							>
								Quick Tips
							</p>
							<ul class="space-y-2">
								<li
									v-for="tip in [
										'Use complete and consistent names',
										'Valid and active IDs only',
										'Keep contact info updated',
										'Match all official documents',
									]"
									:key="tip"
									class="flex items-start gap-2 text-xs text-gray-500"
								>
									<span class="mt-px font-bold text-blue-400">›</span>
									{{ tip }}
								</li>
							</ul>
						</div>
					</div>

					<!-- Page overview -->
					<div class="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100">
						<p
							class="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400"
						>
							All Sections
						</p>
						<div class="space-y-3">
							<div v-for="(p, pIdx) in pages" :key="pIdx">
								<!-- Page heading -->
								<button
									type="button"
									@click="goToPage(pIdx)"
									class="flex w-full items-center gap-2 text-left"
								>
									<span
										class="grid h-5 w-5 shrink-0 place-items-center rounded-full text-[9px] font-bold"
										:class="
											pIdx === currentPage
												? 'bg-gray-800 text-white'
												: pIdx < currentPage
													? 'bg-emerald-500 text-white'
													: 'bg-gray-100 text-gray-400'
										"
									>
										<span v-if="pIdx < currentPage">✓</span>
										<span v-else>{{ pIdx + 1 }}</span>
									</span>
									<span
										class="text-xs font-bold"
										:class="
											pIdx === currentPage
												? 'text-gray-800'
												: pIdx < currentPage
													? 'text-emerald-600'
													: 'text-gray-400'
										"
										>{{ p.label }}</span
									>
								</button>

								<!-- Substep list -->
								<div class="ml-7 mt-1 space-y-1">
									<button
										v-for="(s, sIdx) in p.steps"
										:key="sIdx"
										type="button"
										@click="
											goToPage(pIdx);
											goToStep(sIdx);
										"
										class="flex w-full items-center gap-2 rounded-lg px-2 py-1 text-left text-xs transition"
										:class="
											pIdx === currentPage && sIdx === currentStep
												? 'bg-blue-50 font-semibold text-blue-600'
												: 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
										"
									>
										<span
											class="h-1.5 w-1.5 shrink-0 rounded-full"
											:class="
												pIdx === currentPage && sIdx === currentStep
													? 'bg-blue-400'
													: pIdx < currentPage ||
														  (pIdx === currentPage && sIdx < currentStep)
														? 'bg-emerald-400'
														: 'bg-gray-200'
											"
										/>
										{{ s.label }}
									</button>
								</div>
							</div>
						</div>
					</div>

					<!-- Back / Next -->
					<div class="flex gap-2">
						<button
							type="button"
							@click="goPrev"
							:disabled="isAbsoluteFirst"
							class="w-1/2 rounded-xl border border-gray-200 bg-white py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition hover:bg-gray-50 disabled:opacity-40"
						>
							← Back
						</button>
						<button
							type="button"
							@click="goNext"
							:disabled="isAbsoluteLast"
							class="w-1/2 rounded-xl bg-blue-500 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 disabled:opacity-40"
						>
							Next →
						</button>
					</div>
				</aside>
			</div>
		</div>
	</div>
</template>
