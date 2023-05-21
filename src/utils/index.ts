import { Post, PrismaClient, Profile, User } from '@prisma/client'

const prisma = new PrismaClient()

export async function getUserList() {
  await prisma.$connect()
  try {
    const allUsers = await prisma.user.findMany()

    const userKeyList = Object.keys(allUsers[ 0 ]) as (keyof User)[];

    await prisma.$disconnect()

    return { allUsers, userKeyList }

  } catch (err) {
    await prisma.$disconnect()
    throw err;
  }

}

export async function getProfileList() {
  await prisma.$connect()
  try {
    const allProfiles = await prisma.profile.findMany()

    const profileKeyList = Object.keys(allProfiles[ 0 ]) as (keyof Profile)[] || undefined;

    await prisma.$disconnect()

    return { allProfiles, profileKeyList }

  } catch (err) {
    await prisma.$disconnect()
    throw err
  }
}

export async function getPostList() {
  await prisma.$connect()
  try {
    const allPost = await prisma.post.findMany()

    const postKeyList = Object.keys(allPost[ 0 ]) as (keyof Post)[] || undefined;

    await prisma.$disconnect()

    return { allPost, postKeyList }

  } catch (err) {
    await prisma.$disconnect()
    throw err
  }
}