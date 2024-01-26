"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { TrashIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/app/_components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "~/app/_components/ui/form";
import { Input } from "~/app/_components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "~/app/_components/ui/select";
import SortableList from "~/app/_components/ui/sortable-list";
import { Textarea } from "~/app/_components/ui/textarea";
import { useToast } from "~/app/_components/ui/use-toast";
import { cn } from "~/lib/utils";
import { api } from "~/trpc/react";
import { type RouterOutputs } from "~/trpc/shared";
import { useEffect } from "react";

const customerFormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	address: z.string(),
	phone: z.string(),
	createdAt: z.date(),
    updatedAt: z.date(),
});

type CustomerFormValues = z.infer<typeof customerFormSchema>;

const defaultValues: Partial<CustomerFormValues> = {};

type CustomerFormProps =
	| {
			update?: false;
	  }
	| { update: true; data: RouterOutputs["customer"]["getById"] };
export const CustomerForm = (props: CustomerFormProps) => {
	const { toast } = useToast();
	const router = useRouter();

	const mutate = api.customer.create.useMutation({
		onSuccess: () => {
			toast({
				title: "Success",
				description: "Product added successfully",
			});
			router.push("/customers");
		},
		onError: (err) => {
			console.log(err);
			toast({
				title: "Failed",
				description: "Something is wrong. Please Contact Admin!",
				variant: "destructive",
			});
		},
	});

	const form = useForm<CustomerFormValues>({
		resolver: zodResolver(customerFormSchema),
		defaultValues,
		mode: "onSubmit",
	});

	useEffect(() => {
		if (props.update && props.data) {
			const {
				name,
				address,
				phone,
				createdAt,
				updatedAt
			} = props.data;
			form.setValue("name", name);
			form.setValue("address", address);
			form.setValue("address", phone);
			form.setValue("createdAt", createdAt);
			form.setValue("updatedAt", updatedAt);
		}
	}, []);
	async function onSubmit(data: CustomerFormValues) {
		const {
			name,
			address,
			phone,
			createdAt,
			updatedAt
		} = data;
		mutate.mutate({
			name,
			address,
			phone,
			createdAt,
			updatedAt
		});
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<div className="flex flex-col space-y-8">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Customer Name</FormLabel>
								<FormControl>
									<Input
										placeholder="your name"
										{...field}
									/>
								</FormControl>
								<FormDescription>
									This is your public display name. It can be
									your real name or a pseudonym.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="address"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Address</FormLabel>
								<FormControl>
									<Textarea {...field} />
								</FormControl>
								<FormDescription>
									Describe your product here.
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div>
					</div>
					<div>
						
					</div>
				</div>
				<Button type="submit">Save Product</Button>
			</form>
		</Form>
	);
};
