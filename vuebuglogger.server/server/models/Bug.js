import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Bug = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    closed: { type: Boolean, required: true, default: false },
    creatorId: { type: String, ref: 'Profile', required: true },
    creatorEmail: { type: String, ref: 'Profile', required: true },
    creatorImg: { type: String, ref: 'Profile', required: true }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Bug.virtual('creator', {
  localField: 'creatorId',
  ref: 'Profile',
  foreignField: '_id',
  justOne: true
})

export default Bug
