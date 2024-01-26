import { z } from "zod";

export const CustomerTableSchema = z.object({
	id: z.string(),
	name: z.string(),
	phone: z.string(),
	address: z.string()
});
export type CustomerTableProps = z.infer<typeof CustomerTableSchema> & {
	onDelete: (id: string) => void;
};
