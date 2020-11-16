import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugsService'
import { notesService } from '../services/NotesService'
import BaseController from '../utils/BaseController'

export class BugsController extends BaseController {
  constructor() {
    super('api/bugs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllBugs)
      .get('/:bugId', this.getOneBug)
      .post('', this.createBug)
      .put('/:bugId', this.editBug)
      .get('/:bugId/notes', this.getNotesByBug)
      .delete('/:bugId', this.deleteBug)
  }

  async getAllBugs(req, res, next) {
    try {
      res.send(await bugsService.getAllBugs(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getNotesByBug(req, res, next) {
    try {
      res.send(await notesService.getNotesByBug(req.params.bugId))
    } catch (error) {
      next(error)
    }
  }

  async getOneBug(req, res, next) {
    try {
      res.send(await bugsService.getOneBug(req.params.bugId))
    } catch (error) {
      next(error)
    }
  }

  async createBug(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.creatorEmail = req.userInfo.email
      req.body.creatorImg = req.userInfo.picture

      res.send(await bugsService.createBug(req.body))
    } catch (error) {
      next(error)
    }
  }

  async editBug(req, res, next) {
    try {
      res.send(await bugsService.editBug(req.params.bugId, req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteBug(req, res, next) {
    try {
      res.send(await bugsService.deleteBug(req.params.bugId))
    } catch (error) {
      next(error)
    }
  }
}
