import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BugsService {
  async getBugs() {
    try {
      const res = await api.get('api/bugs')
      AppState.bugs = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async showActiveBug(id) {
    try {
      const res = await api.get('api/bugs/' + id)
      AppState.activeBug = res.data
      logger.log(AppState.activeBug)
    } catch (error) {
      logger.error(error)
    }
  }

  async createBug(newBug) {
    try {
      await api.post('api/bugs/', newBug)

      this.getBugs()
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editBug(id, newBug) {
    try {
      newBug.closed = !newBug.closed
      // await api.put('api/bugs/' + id, newBug)
      await api.delete('api/bugs/' + id)
      this.getBugs()
      this.showActiveBug(id)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editBugContents(id, newBug) {
    try {
      await api.put('api/bugs/' + id, newBug)
      this.getBugs()
      this.showActiveBug(id)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const bugsService = new BugsService()
