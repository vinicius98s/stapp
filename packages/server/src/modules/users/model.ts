import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface UserSchema extends Document {
  email: string;
  name: string;
  password: string;
  comparePassword(password: string): Promise<boolean>;
}

const User = new Schema(
  {
    email: {
      type: String,
      required: true,
      createIndexes: { unique: true },
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

User.pre<UserSchema>('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    this.password = await bcrypt.hash(this.password, 8);
    return next();
  } catch (err) {
    next(err);
  }
});

User.methods.comparePassword = function (password: string): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export default model<UserSchema>('User', User);
