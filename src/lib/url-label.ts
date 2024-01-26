export type LabelType = { label: string; description?: string; url: string };
const CustomerLabel: LabelType[] = [
	{
		label: "Add New Customer",
		url: "/customers/add",
		description: "This is how customer see your product",
	},
	{
		label: "Customers",
		url: "/customers",
		description: "View all your customers here",
	},
	{
		label: "Update Customers",
		url: "/customers/update",
		description: "View all your customers here",
	},


	
]
const ProductsLabel: LabelType[] = [
	{
		label: "Products",
		url: "/products",
		description: "Manage your products with funny way",
	},
	{
		label: "Add New Product",
		url: "/products/add",
		description: "This is how customer see your product",
	},
	
	{
		label: "Update Product",
		url: "/products/update*",
		description: "This is how customer see your product",
	},
];
const PathLabel: LabelType[] = [
	{
		label: "Home",
		url: "/",
		description: "Summary of the data you have",
	},
	{
		label: "Settings",
		url: "/",
	},
	...ProductsLabel,
	...CustomerLabel
];
export default PathLabel;
