import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const customerRouter = createTRPCRouter({
    
    getAllCustomer: protectedProcedure.query(async ({ ctx }) => {
		const { id } = ctx.session.user;
		return await ctx.db.customer.findMany({
			where: {
				id: id,
			},
			orderBy: {
				createdAt: "desc",
			},
		});
	}),

    getById: protectedProcedure.input(z.string()).query(async ({ctx, input})=> {
        const customer = await ctx.db.customer.findUnique({
            where: {
                id: input,
            },
        });
        if(!customer)
            throw new TRPCError({
                code: "BAD_REQUEST",
                message: "Customer Not Found"
            });
            return {
               name: customer.name,
               phone: customer.phone,
               address: customer.address,
               createdAt: customer.createdAt,
               updatedAt: customer.updatedAt,
               id: customer.id 
            }
    }),

    create: protectedProcedure
        .input(
            z.object({
                name: z.string(),
                phone: z.string(),
                address: z.string(),
                createdAt: z.date(),
                updatedAt: z.date(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const customer = await ctx.db.customer.create({
                data: {
                    name: input.name,
                    phone: input.phone,
                    address: input.address,
                    updatedAt: input.updatedAt,
                    createdAt: input.createdAt,
                },
            });
            return customer;
        }),

        deleteById: protectedProcedure
            .input(z.string())
            .mutation(async ({ ctx, input }) => {
                return await ctx.db.customer.delete({
                    where: {

                        id: input,
                    }
                })
            })

})