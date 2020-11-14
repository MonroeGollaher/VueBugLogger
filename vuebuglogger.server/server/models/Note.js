import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const Note = new Schema({
  content: { type: String, required: true },
  bugId: { type: ObjectId, ref: 'Bug' },
  creatorId: { type: String, ref: 'Profile', required: true } // The provided name for who made the note
}, { timestamps: true, toJSON: { virtuals: true } })

Note.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})
export default Note
