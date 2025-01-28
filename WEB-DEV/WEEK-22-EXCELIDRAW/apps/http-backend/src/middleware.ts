import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/backend-common/config";

export function middleware(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies['token']

    console.log(token);

    if (!token) {
      res.json({
        success: false,
        message: "Failed to get token",
      });
      return;
    }

    const decoded = jwt.verify(token as string, JWT_SECRET);

    if (decoded) {
      // @ts-ignore: TODO: Fix this
      req.userId = decoded.userId;
      next();
    } else {
      res.json({
        success: false,
        message: "Unauthorization",
      });
    }
  } catch (e) {
    console.log(e);
    if (e instanceof Error) console.log(e.message);

    res.status(500).json({ success: false, message: "intenal server error" });
  }
}
