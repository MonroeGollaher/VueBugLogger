import { dbContext } from '../db/DbContext'

class NotesService {
  async getAllNotes(query = {}) {
    return await dbContext.Notes.find(query)
  }

  async getOneNote(noteId) {
    return await dbContext.Notes.findById(noteId)
  }

  async createNote(body) {
    return await dbContext.Notes.create(body)
  }

  async editNote(noteId, body) {
    return await dbContext.Notes.findByIdAndUpdate(noteId, body)
  }

  async deleteNote(noteId) {
    return await dbContext.Notes.findByIdAndDelete(noteId)
  }

  async getBugNotes(bugId) {
    return await dbContext.Notes.find({ bugId: bugId })
  }
}

export const notesService = new NotesService()
