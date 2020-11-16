<template>
  <div class="NoteComponent row shadow m-2 p-1" v-if="noteProps.bugId == activeBug.id">
    <div class="col-10">
      <div class="d-flex">
        <img :src="noteProps.creatorImg" class="rounded-circle mr-4" height="40" alt="">
        <p class=" my-auto">
          {{ noteProps.content }}
        </p>
      </div>
    </div>
    <div class="col-2 d-flex justify-content-end">
      <button v-if="!activeBug.closed" type="button" class="btn" data-toggle="modal" :data-target="'#modal'+noteProps.id">
        <i class="far fa-edit"></i>
      </button>
      <button class="btn text-dark" @click="deleteNote(noteProps.id)" v-if="!activeBug.closed">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>

    <div class="modal fade"
         :id="'modal'+noteProps.id"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Edit
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="editNote(noteProps.id)">
              <input type="text" class="form-control my-2" :placeholder="noteProps.content" v-model="state.newNote.content">
              <button class="btn btn-block btn-dark" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { notesService } from '../services/NotesService'
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'NoteComponent',
  props: ['noteProps'],
  setup() {
    const state = reactive({
      newNote: {

      }
    })
    return {
      state,
      activeBug: computed(() => AppState.activeBug),

      deleteNote(id) {
        notesService.deleteNote(id)
      },
      editNote(id) {
        notesService.editNote(id, state.newNote)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
