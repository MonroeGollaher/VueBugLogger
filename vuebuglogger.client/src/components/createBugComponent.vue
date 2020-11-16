<template>
  <div class="createBugComponent col-12">
    <form class="form-group border shadow p-2" @submit.prevent="createBug()">
      <input type="text" class="form-control rounded shadow" placeholder="Title" v-model="state.newBug.title">
      <input type="text" class="form-control rounded shadow my-2" placeholder="Description" v-model="state.newBug.content">
      <button class="btn btn-primary btn-block rounded" type="submit">
        Report bug
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { bugsService } from '../services/BugsService'
export default {
  name: 'CreateBugComponent',
  setup() {
    const state = reactive({
      newBug: {

      }
    })
    return {
      state,
      profile: computed(() => AppState.profile),
      createBug(newBug) {
        bugsService.createBug(state.newBug)
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
