import { Model, Schema, model } from "mongoose";

const userSchema = new Schema({
    username: { type: String, require: true },
    email: { type: String, require: true },
    workRole: { type: String, require: true },
    gender: { type: String, require: true },
    isActive: { type: Boolean, default: true }
}, {
    timestamps: true,
    versionKey: false
});

export const UserModel = model('USER_MODEL', userSchema, 'users');

