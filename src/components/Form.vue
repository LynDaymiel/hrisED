<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (path) => router.push(path);
</script>
<template>
  <div class="pt-6">
    <section
      class="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800"
    >
      <h2
        class="text-2xl font-semibold text-gray-700 capitalize dark:text-white"
      >
        Personal Information
      </h2>

      <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label
              class="text-xl font-medium text-gray-700 dark:text-gray-200"
              for="lastname"
              >Last Name</label
            >
            <input
              id="lastname"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              class="text-xl font-medium text-gray-700 dark:text-gray-200"
              for="firstname"
              >First Name</label
            >
            <input
              id="firstname"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              class="text-xl font-medium text-gray-700 dark:text-gray-200"
              for="middlename"
              >Middle Name</label
            >
            <input
              id="middlename"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label for="NameExtension">
              <span class="text-xl font-medium text-gray-700">
                Name Extension
              </span>

              <select
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="">Please select</option>
                <option value="JR">Jr.</option>
                <option value="SR">Sr.</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
              </select>
            </label>
          </div>

          <div>
            <label
              class="text-xl font-medium text-gray-700 font-medium dark:text-gray-200"
              for="dateofbirth"
              >Date of Birth</label
            >
            <input
              type="date"
              id="dateofbirth"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label
              class="text-xl font-medium text-gray-700 dark:text-gray-200"
              for="placeofbirth"
              >Place of Birth</label
            >
            <input
              id="placeofbirth"
              type="text"
              class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label class="text-xl font-medium text-gray-700 dark:text-gray-200">
              Sex at Birth
            </label>
            <div class="flex gap-6 mt-2">
              <div class="flex items-center">
                <input
                  type="radio"
                  id="male"
                  name="sex_at_birth"
                  value="male"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  for="male"
                  class="ms-2 text-2xl text-gray-700 dark:text-gray-200 cursor-pointer"
                >
                  Male
                </label>
              </div>
              <div class="flex items-center">
                <input
                  type="radio"
                  id="female"
                  name="sex_at_birth"
                  value="female"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                />
                <label
                  for="female"
                  class="ms-2 text-2xl font-large text-gray-700 dark:text-gray-200 cursor-pointer"
                >
                  Female
                </label>
              </div>
            </div>
          </div>

          <div>
            <label for="CivilStatus">
              <span class="text-sm font-medium text-gray-700">
                Civil Status
              </span>

              <select
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option value="">Please select</option>
                <option value="JR">Jr.</option>
                <option value="SR">Sr.</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
                <option value="V">V</option>
                <option value="VI">VI</option>
                <option value="VII">VII</option>
                <option value="VIII">VIII</option>
                <option value="IX">IX</option>
              </select>
            </label>
          </div>

          <!-- EMAIL ADDESSS <div>
					<label class="text-gray-700 dark:text-gray-200" for="emailAddress"
						>Email Address</label
					>
					<input
						id="emailAddress"
						type="email"
						class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					/>
				</div> -->

          <!-- password 
                 <div>
					<label class="text-gray-700 dark:text-gray-200" for="password"
						>Password</label
					>
					<input
						id="password"
						type="password"
						class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					/>
				</div>

				<div>
					<label
						class="text-gray-700 dark:text-gray-200"
						for="passwordConfirmation"
						>Password Confirmation</label
					>
					<input
						id="passwordConfirmation"
						type="password"
						class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
					/>
				</div> -->

          <!-- <div>
						<label class="text-gray-700 dark:text-gray-200" for="username"
							>Username</label
						>
						<input
							id="username"
							type="text"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
						/>
					</div>

					<div>
						<label class="text-gray-700 dark:text-gray-200" for="emailAddress"
							>Email Address</label
						>
						<input
							id="emailAddress"
							type="email"
							class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
						/>
					</div> -->
        </div>

        <div class="flex justify-end mt-6">
          <button
            class="mr-8 px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-gray-600"
          >
            Save
          </button>
          <button
            @click="goTo('/PDS')"
            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Review
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<style scoped></style>
