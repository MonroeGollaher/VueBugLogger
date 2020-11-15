<template>
  <div class="home flex-grow-1 d-flex flex-column">
    <div class="jumbotron jumbotron-fluid text-center">
      <div class="container">
        <h1 class="display-4">
          bugLogger
        </h1>
        <p class="lead">
        </p>
      </div>
    </div>
    <div class="row d-flex text-start justify-content-center mb-4">
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
        Log Bug <i class="fas fa-bug ml-2"></i>
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Report a bug
              </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form @submit.prevent="createBug()">
                <div class="col-8 offset-2 my-2">
                  <input type="text" placeholder="Reported By..." class="form-control">
                </div>
                <div class="col-8 offset-2 my-2">
                  <input type="text" placeholder="Title" class="form-control" v-model="state.newBug.title">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Example textarea</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="state.newBug.description"></textarea>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" class="btn btn-primary">
                    Report
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex text-start justify-content-center">
      <div class="col-2 card shadow">
        <h5>Title:</h5>
      </div>
      <div class="col-2 card shadow">
        <h5>Reported By:</h5>
      </div>
      <div class="col-2 card shadow">
        <h5>Status:</h5>
      </div>
      <div class="col-2 card shadow">
        <h5>Date:</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { bugsService } from '../services/BugsService'
import { profileService } from '../services/ProfileService'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      newBug: {

      }
    })
    onMounted(async() => {
      await profileService.getProfile()
      await bugsService.getAllBugs()
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      bugs: computed(() => AppState.bugs),
      createBug() {
        bugsService.createBug(state.newBug)
      }
    }
  }
}
</script>

<style scoped lang="scss">

</style>
