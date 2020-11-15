import { api } from '../services/AxiosService'
import { logger } from '../utils/Logger'
import { AppState } from '../AppState'

class BugsService {
  async getAllBugs() {
    try {
      const res = await api.get('/bugs')
      AppState.bugs = res.data
    } catch (error) {
      logger.error(error)
    }
  }

  async createBug(newBug) {
    try {
      await api.post('/bugs/', newBug)
      this.getAllBugs()
    } catch (error) {
      logger.error(error)
    }
  }

  async showActiveBug(bugId) {
    try {
      const res = await api.get('/bugs/' + bugId)
      AppState.activeBug = res.data
    } catch (error) {
      logger.error(error)
    }
  }
}

export const bugsService = new BugsService()
