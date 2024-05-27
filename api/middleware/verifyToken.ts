import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { Request, Response } from "express";

dotenv.config();

declare global {
	namespace Express {
		interface Request {
			userId: string;
		}
	}
}

export const verifyToken = (req: Request, res: Response, next: any) => {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ message: "Not Authenticated!" })

    jwt.verify(token, process.env.JWT_SECRET_KEY ? process.env.JWT_SECRET_KEY : '', async (err: any, payload: any) => {
        if (err) return res.status(403).json({ message: "Token is not Valid!" })
        console.log(payload)
        req.userId = payload.id

        next()
    })


}