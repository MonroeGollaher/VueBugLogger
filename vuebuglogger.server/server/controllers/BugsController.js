import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'
import { bugsService } from '../services/BugsService'
import { notesService } from '../services/NotesService'

export class BugsController extends BaseController {
  constructor() {
    super('/bugs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllBugs)
      .get('/:bugId', this.showActiveBug)
      .post('', this.createBug)
      .put('/:bugId', this.editBug)
      .get('/:bugId/notes', this.getBugNotes)
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

  async editBug(req, res, next) {
    try {
      res.send(await bugsService.editBug(req.params.bugId, req.body))
    } catch (error) {
      next(error)
    }
  }

  async getBugNotes(req, res, next) {
    try {
      res.send(await notesService.getBugNotes(req.params.bugId))
    } catch (error) {
      next(error)
    }
  }
}
