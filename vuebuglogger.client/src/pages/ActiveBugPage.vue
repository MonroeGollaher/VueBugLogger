<template>
  <div class="activeBugPage container-fluid">
    <div class="row my-5 align-content-center" v-if="activeBug.id">
      <div class="col-12 d-flex justify-content-center">
        <div class="d-flex shadow p-2">
          <h1 class="my-auto">
            Active Bug Details
          </h1>
        </div>
      </div>
    </div>
    <div class="row justify-content-center rounded">
      <div class="col-6 bg-light p-2 shadow rounded">
        <div class="row">
          <div class="col-12 d-flex justify-content-between">
            <div class="d-flex">
              <i :class="{'text-danger': activeBug.closed}" class="fa fa-circle fa-2x text-success" aria-hidden="true"></i>
              <h3 class="my-auto pl-4 pb-4">
                {{ activeBug.title }}
              </h3>
            </div>
            <div class="d-flex">
              <editBugComponent />
              <button class="btn" v-if="!activeBug.closed" @click="editBug(activeBug.id, activeBug)">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="row text-left">
          <div class="col-12 ">
            <p>
              {{ activeBug.content }}
            </p>
            <p class="mr-5">
              Submitted by:<img :src="activeBug.creatorImg" class="rounded-circle" height="25" alt="">{{ activeBug.creatorEmail }}
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-10 offset-1">
            <div class="row justify-content-start">
              <div class="col-12">
                <h3>Notes</h3>
              </div>
            </div>
            <noteComponent v-for="note in notes" :key="note.id" :note-props="note" />
          </div>
        </div>
        <div class="row">
        </div>
      </div>
    </div>
    <newNoteComponent v-if="!activeBug.closed" />
  </div>
</template>

<script>
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NoteComponent from '../components/NoteComponent'
import NewNoteComponent from '../components/newNoteComponent'
import EditBugComponent from '../components/EditBugComponent'
export default {
  name: 'ActiveBugPage',
  setup() {
    const route = useRoute()
    onMounted(() => {
      bugsService.showActiveBug(route.params.bugId)
    })

    return {
      activeBug: computed(() => AppState.activeBug),
      notes: computed(() => AppState.notes),
      editBug(id, bug) {
        bugsService.editBug(id, bug)
      }

    }
  },
  components: { NoteComponent, NewNoteComponent, EditBugComponent }
}
</script>

<style lang="scss" scoped>

</style>
