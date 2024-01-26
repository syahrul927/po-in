import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { z } from "zod";

export const customerRouter = createTRPCRouter({
    
    getAllCustomer: protectedProcedure.query(async ({ ctx }) => {
		const { id } = ctx.session.user;
		return await ctx.db.customer.findMany({
			where: {
				createdById: id,
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
               id: customer.id 
            }
    }),

    create: protectedProcedure
        .input(
            z.object({
                name: z.string(),
                phone: z.string(),
                address: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const customer = await ctx.db.customer.create({
                data: {
                    name: input.name,
                    phone: input.phone,
                    address: input.address,
                    createdById: ctx.session.user.id
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