<template>
  <div class="home container-fluid">
    <div class="jumbotron jumbotron-fluid">
      <div class="container text-center">
        <h1 class="display-4">
          buglogger <i class="fas fa-bug"></i>
        </h1>
      </div>
    </div>
    <div class="row mt-5" v-if="profile.id">
      <div class="col-4 offset-2 d-flex">
        <button class="btn btn-primary rounded shadow" data-toggle="collapse" data-target="#contentId">
          Log a bug
        </button>
      </div>
      <div class="col-4 d-flex justify-content-end">
        <button class="btn btn-dark rounded shadow" @click="order('all')">
          <i class="fas fa-sync"></i>
        </button>
        <button class="btn btn-success rounded mx-1 shadow" @click="order('active')">
          Active
        </button>
        <button class="btn btn-danger rounded shadow" @click="order('closed')">
          Closed
        </button>
      </div>
    </div>
    <div class="row my-3 collapse" id="contentId">
      <div class="col-8 offset-2 mt-2">
        <CreateBugComponent />
      </div>
    </div>
    <div class="row mt-3" v-if="profile.id">
      <div class="col-8 offset-2">
        <div class="row rounded shadow py-3">
          <div class="col-1 d-flex">
            <h6 class="my-auto">
              Status
            </h6>
          </div>
          <div class="col-4 d-flex">
            <h6 class="my-auto">
              Title
            </h6>
          </div>
          <div class="col-3 d-flex">
            <h6 class="my-auto">
              Reported By
            </h6>
          </div>
          <div class="col-2 d-flex justify-content-end">
            <h6 class="my-auto">
              Created
            </h6>
          </div>
          <div class="col-2 d-flex justify-content-end">
            <h6 class="my-auto">
              Modified
            </h6>
          </div>
        </div>
        <BugComponent v-for="bug in bugs" :key="bug.id" :bug-props="bug" />
      </div>
    </div>
  </div>
</template>

<script>
import CreateBugComponent from '../components/createBugComponent'
import BugComponent from '../components/bugComponent'
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    return {
      bugs: computed(() => AppState.bugs),
      profile: computed(() => AppState.profile),
      sort: computed(() => AppState.sort),
      order(status) {
        AppState.sort.order = status
      }

    }
  },
  components: { CreateBugComponent, BugComponent }
}
</script>

<style scoped lang="scss">

</style>
