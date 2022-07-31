import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    getUsers: async () => {
      try {
        return await prisma.user.findMany();
      } catch (error) {
        throw error;
      }
    },
    getUserById: async (_, args) => {
      try {
        return await prisma.user.findUnique({ where: { id: args.id } });
      } catch (error) {
        throw error;
      }
    },
  },
  Mutation: {
    updateUser: async (_, args) => {
      try {
        const { data, id } = args;

        return await prisma.user.update({ where: { id }, data });
      } catch (error) {
        throw error;
      }
    },
    deleteUser: async (_, args) => {
      try {
        const { id } = args;

        return await prisma.user.delete({ where: { id } });
      } catch (error) {
        throw error;
      }
    },
    createUser: async (_, args) => {
      try {
        const { data } = args;

        return await prisma.user.create({ data });
      } catch (error) {
        throw error;
      }
    },
  },
};
