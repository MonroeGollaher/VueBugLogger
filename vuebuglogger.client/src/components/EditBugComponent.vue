<template>
  <div class="editBugComponent">
    <button class="btn mr-1" v-if="!activeBug.closed" data-toggle="modal" :data-target="'#edit'+activeBug.id">
      <i class="fas fa-edit"></i>
    </button>

    <!-- Modal -->
    <div class="modal fade"
         :id="'edit'+activeBug.id"
         tabindex="-1"
         role="dialog"
         aria-labelledby="modelTitleId"
         aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Edit Bug
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group" @submit.prevent="editBugContents(activeBug.id)">
              <input type="text" class="form-control my-2" :placeholder="activeBug.title" v-model="state.newBug.title">
              <input type="text" class="form-control my-2" :placeholder="activeBug.content" v-model="state.newBug.content">
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
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
import { bugsService } from '../services/BugsService'
export default {
  name: 'EditBugComponent',
  setup() {
    const state = reactive({
      newBug: {

      }
    })
    return {
      state,
      activeBug: computed(() => AppState.activeBug),
      editBugContents(id, newBug) {
        bugsService.editBugContents(id, state.newBug)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
