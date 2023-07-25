import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import nodemailer from "nodemailer"

export const createHash = async (password) => {
    return await bcrypt.hash(password, 10);
}

export const isValidPassword = async (user, password) => {
    return await bcrypt.compare(password, user.password)
}

export const generateToken = async (user) => {
    return jwt.sign({ user: { ...user, password: undefined } }, process.env.PRIVATE_KEY, { expiresIn: '1m' })
}

export const generateTransport = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        auth: {
            user: 'sebaactis@gmail.com',
            pass: process.env.PASS_KEY
        }
    })
}