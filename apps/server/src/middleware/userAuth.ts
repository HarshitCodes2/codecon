import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

export const userAuth: (
  req: Request,
  res: Response,
  next: NextFunction
) => void = (req: Request, res: Response, next: NextFunction) => {
  // console.log(req.headers);

  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.status(401).json({
      message: "Auth Header Missing",
    });
    return;
  }

  const isValidUser: JwtPayload = jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as JwtPayload;

  if (!isValidUser) {
    res.status(401).json({
      message: "Invalid Authorization Token",
    });
    return;
  }

  req.userId = isValidUser.userId;

  next();
};
