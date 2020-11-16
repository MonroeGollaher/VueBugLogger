import { initialize } from '@bcwdev/auth0provider-client'
import { AppState } from '../AppState'
import { audience, clientId, domain } from '../AuthConfig'
import router from '../router'
import { setBearer } from './AxiosService'
import { bugsService } from './BugsService'
import { profileService } from './ProfileService'
import { notesService } from './NotesService'

export const AuthService = initialize({
  domain,
  clientId,
  audience,
  onRedirectCallback: appState => {
    router.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }
})

AuthService.on(AuthService.AUTH_EVENTS.AUTHENTICATED, async function() {
  setBearer(AuthService.bearer)
  await profileService.getProfile()
  AppState.user = AuthService.user
  await bugsService.getBugs()
  await notesService.getNotes()

  // NOTE if there is something you want to do once the user is authenticated, place that here
})
