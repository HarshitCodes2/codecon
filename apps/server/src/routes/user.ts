import { Router } from "express";
import { UserSignInSchema, UserSignUpSchema } from "../types";
import client from "@repo/db/client";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userRouter = Router();

userRouter.post("/signup", async (req, res) => {
  const parsedData = UserSignUpSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.status(400).json({
      message: "Input Validation Error",
      error: parsedData.error.issues[0].message,
    });
    return;
  }

  const hashedPwd = crypto
    .scryptSync(parsedData.data.password, process.env.SALT!, 32)
    .toString("hex");
  // console.log("hashedPwd : " + hashedPwd);

  try {
    const user = await client.user.create({
      data: {
        name: parsedData.data.name,
        email: parsedData.data.email,
        password: hashedPwd,
      },
    });

    if (!user) {
      res.status(409).json({
        message: "Email already in use",
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECRET!
    );

    res.status(200).json({
      token: token,
    });
    return;
  } catch (e) {
    res.status(409).json({
      message: "Email already in use",
    });
  }
});

userRouter.post("/signin", async (req, res) => {
  const parsedData = UserSignInSchema.safeParse(req.body);

  if (!parsedData.success) {
    res.status(400).json({
      message: "Input Validation Error",
      error: parsedData.error.issues[0].message,
    });
    return;
  }

  const user = await client.user.findFirst({
    where: {
      email: parsedData.data.email,
    },
  });

  if (!user) {
    res.status(401).json({
      message: "Email not found",
    });
    return;
  }

  const hashedPwd = crypto
    .scryptSync(parsedData.data.password, process.env.SALT!, 32)
    .toString("hex");

  try {
    const isValidPwd = crypto.timingSafeEqual(
      Buffer.from(user.password, "hex"),
      Buffer.from(hashedPwd, "hex")
    );

    if (!isValidPwd) {
      res.status(401).json({
        message: "Wrong Password",
      });
      return;
    }

    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECRET!
    );

    res.status(200).json({
      token: token,
    });
    return;
  } catch (e) {
    res.status(409).json({
      message: "Invalid Password",
    });
    return;
  }
});

export default userRouter;
