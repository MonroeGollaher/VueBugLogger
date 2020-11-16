import { dbContext } from '../db/DbContext'

class NotesService {
  async deleteNote(noteId) {
    return await dbContext.Notes.findByIdAndDelete(noteId)
  }

  async getNotesByBug(bugId) {
    return await dbContext.Notes.find({ bugId: bugId })
  }

  async getAllNotes(query = {}) {
    return await dbContext.Notes.find(query)
  }

  async getOneNote(noteId) {
    return await dbContext.Notes.findById(noteId)
  }

  async createNote(body) {
    return await dbContext.Notes.create(body)
  }

  async editNote(id, body) {
    return await dbContext.Notes.findByIdAndUpdate(id, body)
  }
}

export const notesService = new NotesService()
