import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class NotesService {
  async getNotes() {
    try {
      const res = await api.get('api/notes')
      AppState.notes = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async deleteNote(id) {
    try {
      await api.delete('api/notes/' + id)
      this.getNotes()
    } catch (error) {
      logger.error(error)
    }
  }

  async createNote(id, newNote) {
    try {
      newNote.bugId = id
      const res = await api.post('api/notes/', newNote)
      AppState.notes = res.data
      this.getNotes()
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }

  async editNote(id, newNote) {
    try {
      await api.put('api/notes/' + id, newNote)
      this.getNotes()
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const notesService = new NotesService()
