import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'
import BaseController from '../utils/BaseController'

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllNotes)
      .get('/:noteId', this.getOneNote)
      .post('', this.createNote)
      .put('/:noteId', this.editNote)
      .delete('/:noteId', this.deleteNote)
  }

  async getAllNotes(req, res, next) {
    try {
      res.send(await notesService.getAllNotes(req.query))
    } catch (error) {
      next(error)
    }
  }

  async getOneNote(req, res, next) {
    try {
      res.send(await notesService.getOneNote(req.params.noteId))
    } catch (error) {
      next(error)
    }
  }

  async createNote(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      req.body.creatorEmail = req.userInfo.email
      req.body.creatorImg = req.userInfo.picture
      res.send(await notesService.createNote(req.body))
    } catch (error) {
      next(error)
    }
  }

  async editNote(req, res, next) {
    try {
      res.send(await notesService.editNote(req.params.noteId, req.body))
    } catch (error) {
      next(error)
    }
  }

  async deleteNote(req, res, next) {
    try {
      res.send(await notesService.deleteNote(req.params.noteId))
    } catch (error) {
      next(error)
    }
  }
}
