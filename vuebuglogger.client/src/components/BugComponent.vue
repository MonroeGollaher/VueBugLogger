<template>
  <div class="bug-component">
    <div class="bugComponent row p-3" @click="showActiveBug">
      <h6 class="col-3 text-left">
        {{ bugProp.title }}
      </h6>
      <h6 class="col-3 text-left">
        {{ bugProp.creator.name }}
      </h6>
      <h6 class="col-3 text-left">
        Date Closed: {{ bugProp.closedDate }}
      </h6>
      <h6 class="col-3 text-left" v-if="bugProp.closed == false">
        Status: Open
      </h6>
      <h6 class="col-3 text-left" v-else-if="bugProp.closed == true">
        Status: Closed
      </h6>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { bugsService } from '../services/BugsService'
import { useRouter } from 'vue-router'

export default {
  name: 'BugComponent',
  components: {},
  props: {
    bugProp: Object
  },
  setup(props) {
    const router = useRouter()
    const state = reactive({

    })
    return {
      state,
      showActiveBug() {
        router.push({ name: 'ActiveBugPage', params: { bugId: props.bugProp._id } })
        bugsService.showActiveBug(props.bugProp._id)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
