"use client";
import { DataTable } from "~/app/_components/table/data-table";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "~/app/_components/ui/card";
import { api } from "~/trpc/react";
import { columnsPost } from "./components/table/column-customer";
import { useToast } from "~/app/_components/ui/use-toast";
import { DataTableToolbarCustomer } from "./components/table/data-table-toolbar";

export default function CustomerPage() {
	const { data, refetch } = api.customer.getAllCustomer.useQuery();
	const { toast } = useToast();
	const { mutate: onDelete } = api.customer.deleteById.useMutation({
		onSuccess: () => {
			toast({
				title: "Success deleted product",
			});
			void refetch();
		},
	});

	return (
		<div className="flex flex-col space-y-4">
			<Card>
				<CardHeader className="flex ">
					<CardTitle>List Customer</CardTitle>
					<p className="text-muted-foreground text-sm">
						Here&apos;s a list all of your customer!
					</p>
				</CardHeader>
				<CardContent>
					<DataTable
						columns={columnsPost}
						toolbar={DataTableToolbarCustomer}
						data={
							data
								? data.map(({ id, name, phone, address}) => ({
										id,
										name,
										phone,
										address,
										onDelete,
									}))
								: []
						}
					/>
				</CardContent>
			</Card>
		</div>
	);
}

