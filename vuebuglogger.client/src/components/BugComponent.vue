<template>
  <div class="bugComponent" v-if="(sort.order == 'closed' && bugProps.closed) || (sort.order == 'active' && !bugProps.closed) || (sort.order == 'all')">
    <router-link :to="{name: 'ActiveBugPage', params: {bugId: bugProps.id}}" class="text-dark no-decoration">
      <div class="row bg-light text-dark rounded p-1 my-1 shadow grow no-decoration">
        <div class="col-1 d-flex">
          <i :class="{'text-danger': bugProps.closed}" class="fa fa-circle fa-2x text-success my-auto" aria-hidden="true"></i>
        </div>
        <div class="col-4 d-flex">
          <p class="text-center my-auto">
            {{ bugProps.title }}
          </p>
        </div>
        <div class="col-3 d-flex">
          <!-- <img :src="bugProps.creatorImg" height="30" class="rounded-circle my-auto" alt=""> -->

          <p class="text-left my-auto pl-3">
            {{ bugProps.creatorEmail.split('@').splice(0,1).join('') }}
          </p>
        </div>
        <div class="col-2 d-flex justify-content-end">
          <h6 class=" small my-auto">
            {{ bugProps.createdAt.split('T').splice(0,1).join('') }}
          </h6>
        </div>
        <div class="col-2 d-flex justify-content-end">
          <h6 class="small my-auto">
            {{ bugProps.updatedAt.split('T').splice(0,1).join('') }}
          </h6>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  name: 'BugComponent',
  props: ['bugProps'],
  setup() {
    return {
      sort: computed(() => AppState.sort)

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
