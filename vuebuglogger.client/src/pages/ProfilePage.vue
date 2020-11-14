<template>
  <div class="about text-center container-fluid">
    <div class="row justify-content-center p-3">
      <div class="card radius20 col-3 shadow">
        <h1 class="p-4">
          Welcome {{ profile.name }}
        </h1>
        <div class="p-3">
          <img class="rounded" :src="profile.picture" alt="" />
          <p class="p-2">
            {{ profile.email }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Profile',
  setup() {
    return {
      profile: computed(() => AppState.profile)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
