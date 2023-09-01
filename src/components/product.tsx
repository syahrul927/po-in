import { Card, CardContent, CardTitle } from "./ui/card";
import Image from "next/image";
import MoneyFormatter from "./money-formatter";

export interface ProductProps {
    image: string;
    name: string;
    id: string;
    price: number;
    description?: string;
}
const Product: React.FC<ProductProps> = ({ image, name, id, price }) => {
    return (
        <Card className="relative flex min-h-[18rem] min-w-full max-w-full flex-col justify-end rounded-none border-none bg-transparent shadow-none ">
            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="shadow-fill rounded-3xl "
                    style={{ objectFit: "cover" }}
                />
            </div>
            <CardContent className="relative h-full px-4 pb-4 text-left text-black">
                <div className="overflow-hidden rounded-full border-2 border-black bg-neutral-200 px-6 py-2">
                    <CardTitle className="text-sm font-light capitalize">
                        {name}
                    </CardTitle>
                    <p className="font-semibold">
                        <MoneyFormatter value={price} />
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
export default Product;
