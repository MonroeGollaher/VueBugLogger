import { dbContext } from '../db/DbContext'

class BugsService {
  async getAllBugs() {
    return await dbContext.Bugs.find().populate('creator')
  }

  async createBug(body) {
    return await dbContext.Bugs.create(body)
  }

  async showActiveBug(id) {
    await dbContext.Bugs.findById(id)
  }

  async editBug(id, body) {
    return await dbContext.Bugs.findByIdAndUpdate(id, body)
  }
}
export const bugsService = new BugsService()
