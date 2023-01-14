import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createSession(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (user?.password == password) {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}
