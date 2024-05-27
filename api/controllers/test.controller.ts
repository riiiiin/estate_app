import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { Request, Response } from "express";


dotenv.config()
export const shouldBeLoggedIn = async (req:Request, res:Response) => {
    console.log(req.userId)

    res.status(200).json({ message: "You are Authenticated" })
}

export const shouldBeAdmin = async (req:Request, res:Response) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Not Authenticated!" });

    if (process.env.JWT_SECRET_KEY) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err:any, payload:any) => {
            if (err) return res.status(403).json({ message: "Token is not Valid!" })
            if (!payload.isAdmin) {
                return res.status(403).json({ message: "Not authorized!" })
            }
        });
    } else console.log("envの設定がありません")


    res.status(200).json({ message: "You are Authenticated" })
}