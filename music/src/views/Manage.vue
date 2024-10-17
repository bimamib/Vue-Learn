<template>
  <!-- Main Content -->
  <section class="container mx-auto mt-6">
    <div class="md:grid md:grid-cols-3 md:gap-4">
      <div class="col-span-1">
        <div
          class="bg-white rounded-xl border border-gray-200 relative flex flex-col shadow"
        >
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">Upload</span>
            <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
          </div>
          <div class="p-6">
            <!-- Upload Dropbox -->
            <div
              class="flex items-center justify-center w-full px-10 py-10 rounded-lg text-center cursor-pointer border-2 border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-green-400 hover:border-green-400 hover:border-solid"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <h5>Drop your files here</h5>
              </div>
            </div>
            <hr class="my-6" />
            <!-- Progess Bars -->
            <div class="mb-4">
              <!-- File Name -->
              <div class="font-bold text-sm">Just another song.mp3</div>
              <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                <!-- Inner Progress Bar -->
                <div
                  class="transition-all progress-bar bg-blue-400"
                  style="width: 75%"
                ></div>
              </div>
            </div>
            <div class="mb-4">
              <div class="font-bold text-sm">Just another song.mp3</div>
              <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                <div
                  class="transition-all progress-bar bg-blue-400"
                  style="width: 35%"
                ></div>
              </div>
            </div>
            <div class="mb-4">
              <div class="font-bold text-sm">Just another song.mp3</div>
              <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
                <div
                  class="transition-all progress-bar bg-blue-400"
                  style="width: 55%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <div
          class="bg-white rounded-xl border border-gray-200 relative flex flex-col shadow"
        >
          <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
            <span class="card-title">My Songs</span>
            <i
              class="fa fa-compact-disc float-right text-green-400 text-2xl"
            ></i>
          </div>
          <div class="p-6">
            <!-- Composition Items -->
            <div class="border border-gray-200 p-3 mb-4 rounded-lg">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button
                  class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                >
                  <i class="fa fa-times"></i>
                </button>
                <button
                  class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                >
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
              <div>
                <form>
                  <div class="mb-3">
                    <label class="inline-block mb-2">Song Title</label>
                    <input
                      type="text"
                      class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:outline-blue-500 rounded-lg"
                      placeholder="Enter Song Title"
                    />
                  </div>
                  <div class="mb-3">
                    <label class="inline-block mb-2">Genre</label>
                    <input
                      type="text"
                      class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:outline-blue-500 rounded-lg"
                      placeholder="Enter Genre"
                    />
                  </div>
                  <button
                    type="submit"
                    class="py-1.5 px-3 rounded text-white bg-green-600"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    class="py-1.5 px-3 rounded text-white bg-gray-600"
                  >
                    Go Back
                  </button>
                </form>
              </div>
            </div>
            <div class="border border-gray-200 p-3 mb-4 rounded-lg">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button
                  class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                >
                  <i class="fa fa-times"></i>
                </button>
                <button
                  class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                >
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="border border-gray-200 p-3 mb-4 rounded-lg">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button
                  class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                >
                  <i class="fa fa-times"></i>
                </button>
                <button
                  class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                >
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="border border-gray-200 p-3 mb-4 rounded-lg">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button
                  class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                >
                  <i class="fa fa-times"></i>
                </button>
                <button
                  class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                >
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
            <div class="border border-gray-200 p-3 mb-4 rounded-lg">
              <div>
                <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                <button
                  class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                >
                  <i class="fa fa-times"></i>
                </button>
                <button
                  class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                >
                  <i class="fa fa-pencil-alt"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import useUserStore from '@/stores/user'

export default {
  name: 'manage',
  beforeRouteEnter(to, from, next) {
    const store = useUserStore()

    if (store.userLoggedIn) {
      next()
    } else {
      next({ name: 'home' })
    }
  },
}
</script>
