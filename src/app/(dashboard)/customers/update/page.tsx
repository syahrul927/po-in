import { redirect } from "next/navigation";
import { type PageType } from "~/types/page-type";
import { CustomerForm } from "../components/customer-form";
import { api } from "~/trpc/server";

export default async function UpdateCustomerPage({ searchParams }: PageType) {
	const id = searchParams.id;
	if (!id || id instanceof Array) {
		redirect("/products");
	}
	const data = await api.customer.getById.query(id);
	return (
		<div className="flex flex-col h-full max-w-xl">
			<CustomerForm update={true} data={data} />
		</div>
	);
}
