import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugsService'

export class BugsController extends BaseController {
  constructor() {
    super('/bugs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllBugs)
      .get('/:id', this.showActiveBug)
      .post('', this.createBug)
  }

  async getAllBugs(req, res, next) {
    try {
      res.send(await bugsService.getAllBugs())
    } catch (error) {
      next(error)
    }
  }

  async createBug(req, res, next) {
    try {
      res.send(await bugsService.createBug(req.body))
    } catch (error) {
      next(error)
    }
  }

  async showActiveBug(req, res, next) {
    try {
      res.send(await bugsService.showActiveBug(req.body))
    } catch (error) {
      next(error)
    }
  }
}
