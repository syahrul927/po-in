"use client";
import { CustomerForm } from "../components/customer-form";

export default function AddCustomerPage() {
	return (
		<div className="flex flex-col h-full max-w-xl">
			<CustomerForm />
		</div>
	);
}
