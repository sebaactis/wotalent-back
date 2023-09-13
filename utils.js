import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import nodemailer from "nodemailer"
import dotenv from 'dotenv'
dotenv.config();

export const createHash = async (password) => {
    return await bcrypt.hash(password, 10);
}

export const isValidPassword = async (user, password) => {
    return await bcrypt.compare(password, user.password)
}

export const generateToken = async (user) => {
    return jwt.sign({ user: { ...user, password: undefined } }, process.env.PRIVATE_KEY, { expiresIn: '5m' })
}

export const generateTransport = () => {
    return nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: 587,
        secure: false,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })
}