<template>
  <div class="newNoteComponent row justify-content-center">
    <div class="col-6">
      <div class="pt-2">
        <button type="button" class="btn btn-warning text-light mt-3" data-toggle="modal" data-target="#modelId">
          Add note<i class="fas fa-sticky-note fa-lg ml-3"></i>
        </button>
      </div>
    </div>

    <div class="modal fade"
         id="modelId"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Add New Note
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <form class="form-group" @submit.prevent="createNote(activeBug.id)">
                    <input type="text" class="form-control my-2" placeholder="Content" v-model="state.newNote.content">
                    <button class="btn btn-block btn-dark" type="submit">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { notesService } from '../services/NotesService'
import { AppState } from '../AppState'
export default {
  name: 'NewNoteComponent',
  setup() {
    const state = reactive({
      newNote: {

      }
    })

    return {
      state,
      activeBug: computed(() => AppState.activeBug),
      createNote(bugId, newNote) {
        notesService.createNote(bugId, state.newNote)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
