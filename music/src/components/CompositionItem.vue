<template>
  <div class="p-3 mb-4 border border-gray-200 rounded-lg">
    <div v-show="!showForm">
      <h4 class="inline-block text-base font-bold">{{ song.modified_name }}</h4>
      <button
        class="float-right px-2 py-1 ml-1 text-sm text-white bg-red-600 rounded"
        @click.prevent="deleteSong"
      >
        <i class="fa fa-times"></i>
      </button>
      <button
        class="float-right px-2 py-1 ml-1 text-sm text-white bg-blue-600 rounded"
        @click.prevent="showForm = !showForm"
      >
        <i class="fa fa-pencil-alt"></i>
      </button>
    </div>
    <div v-show="showForm">
      <div
        class="p-4 mb-4 font-bold text-center text-white"
        v-if="show_alert"
        :class="alert_variant"
      >
        {{ alert_message }}
      </div>
      <vee-form
        :validation-schema="schema"
        :initial-values="song"
        @submit="edit"
      >
        <div class="mb-3">
          <label class="inline-block mb-2">Song Title</label>
          <vee-field
            type="text"
            name="modified_name"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:outline-blue-500 rounded-lg"
            placeholder="Enter Song Title"
            @input="updateUnsavedFlag(true)"
          />
          <ErrorMessage class="text-red-600" name="modified_name" />
        </div>
        <div class="mb-3">
          <label class="inline-block mb-2">Genre</label>
          <vee-field
            type="text"
            name="genre"
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:outline-blue-500 rounded-lg"
            placeholder="Enter Genre"
            @input="updateUnsavedFlag(true)"
          />
          <ErrorMessage class="text-red-600" name="genre" />
        </div>
        <button
          type="submit"
          class="py-1.5 px-3 rounded text-white bg-green-600"
          :disabled="in_submission"
        >
          Submit
        </button>
        <button
          type="button"
          class="py-1.5 px-3 rounded text-white bg-gray-600"
          :disabled="in_submission"
          @click.prevent="showForm = false"
        >
          Go Back
        </button>
      </vee-form>
    </div>
  </div>
</template>

<script>
import { songsCollection, storage } from '@/includes/firebase'

export default {
  name: 'CompositionItem',
  props: {
    song: {
      type: Object,
      required: true,
    },
    updateSong: {
      type: Function,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    removeSong: {
      type: Function,
      required: true,
    },
    updateUnsavedFlag: {
      type: Function,
    },
  },
  data() {
    return {
      showForm: false,
      schema: {
        modified_name: 'required',
        genre: 'alpha_spaces',
      },
      in_submission: false,
      show_alert: false,
      alert_variant:
        'mt-2 bg-blue-100 border border-blue-200 text-sm text-blue-800 rounded-lg',
      alert_message: 'Please wait! Updating song info.',
    }
  },
  methods: {
    async edit(values) {
      this.in_submission = true
      this.show_alert = true
      this.alert_variant =
        'mt-2 bg-blue-100 border border-blue-200 text-sm text-blue-800 rounded-lg'
      this.alert_message = 'Please wait! Updating song info.'

      try {
        await songsCollection.doc(this.song.docID).update(values)
      } catch (error) {
        this.in_submission = false
        this.alert_variant =
          'mt-2 bg-red-100 border border-red-200 text-sm text-red-800 rounded-lg'
        this.alert_message = 'Something went wrong! Try again later'
        return
      }

      this.updateSong(this.index, values)
      this.updateUnsavedFlag(false)

      this.in_submission = false
      this.alert_variant =
        'mt-2 bg-teal-100 border border-teal-200 text-sm text-teal-800 rounded-lg p-4'
      this.alert_message = 'Success!'
    },
    async deleteSong() {
      const storageRef = storage.ref()
      const songRef = storageRef.child(`songs/${this.song.original_name}`)

      await songRef.delete()

      await songsCollection.doc(this.song.docID).delete()

      this.removeSong(this.index)
    },
  },
}
</script>
