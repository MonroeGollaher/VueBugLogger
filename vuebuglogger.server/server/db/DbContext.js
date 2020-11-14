import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import ProfileSchema from '../models/Profile'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Profile = mongoose.model('Profile', ProfileSchema);
  Notes = mongoose.model('Note', ProfileSchema);
  Bugs = mongoose.model('Bug', ProfileSchema);
}

export const dbContext = new DbContext()
