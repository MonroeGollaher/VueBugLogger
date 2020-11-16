import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Note = new Schema(
  {
    content: { type: String, required: true },
    bugId: { type: String, required: true, ref: 'Bug' },
    creatorId: { type: String, ref: 'Profile', required: true },
    creatorEmail: { type: String, ref: 'Profile', required: true },
    creatorImg: { type: String, ref: 'Profile', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Note.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

export default Note
