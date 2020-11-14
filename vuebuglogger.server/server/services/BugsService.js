import { dbContext } from '../db/DbContext'
import { logger } from '../utils/Logger'

class BugsService {
  async getAllBugs() {
    try {
      return await dbContext.Bugs.find().populate('creator')
    } catch (error) {
      logger.error(error)
    }
  }

  async createBug(body) {
    try {
      return await dbContext.Bugs.create(body)
    } catch (error) {
      logger.error(error)
    }
  }

  async showActiveBug(id) {
    try {
      await dbContext.Bugs.findById(id)
    } catch (error) {
      logger.error(error)
    }
  }

  // async editBug() {
  //   try {

  //   } catch (error) {
  //     logger.error(error)
  //   }
  // }

  // async closeBug() {
  //   try {

  //   } catch (error) {
  //     logger.error(error)
  //   }
  // }
}
export const bugsService = new BugsService()
