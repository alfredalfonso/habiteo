import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function loginUser(req: Request, res: Response) {
  try {
    const response = await prisma.user.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export async function getUserById(req: Request, res: Response) {
  try {
    const response = await prisma.user.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
}

export async function createUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: password,
      },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({ msg: error.message });
  }
}

export async function updateUser(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const user = await prisma.user.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

export async function deleteUser(req: Request, res: Response) {
  try {
    const user = await prisma.user.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}
