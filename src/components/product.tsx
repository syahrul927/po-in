import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import MoneyFormatter from "./money-formatter";
import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetFooter,
} from "./ui/sheet";
import { Button } from "./ui/button";

export interface ItemProductProps {
    image: string;
    name: string;
    id: string;
    price: number;
    description?: string;
}

export interface ProductProps extends ItemProductProps {
    action?: () => void;
}

const Product: React.FC<ProductProps> = (props) => {
    const { action, ...productProps } = props;
    return (
        <Sheet>
            <SheetTrigger>
                <ItemProduct {...productProps} />
            </SheetTrigger>
            <SheetContent className="w-full" side={"bottom"}>
                <SheetHeader>
                    <SheetTitle>{productProps.name}</SheetTitle>
                    <SheetDescription>
                        {productProps.description}
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                    <Button onClick={action}>Add to Cart</Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};
const ItemProduct: React.FC<ItemProductProps> = ({
    image,
    name,
    id: _id,
    price,
}) => {
    return (
        <Card className="w-52 border-none p-0 shadow-none">
            <CardContent className="flex max-w-sm flex-col gap-y-3 px-4 pb-4 text-left text-black">
                <div className="relative aspect-square">
                    <Image
                        src={image}
                        alt={name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg transition-all hover:scale-110"
                    />
                </div>
                <div className="text-sm">
                    <p className="overflow-hidden text-ellipsis whitespace-nowrap font-light">
                        {name}
                    </p>
                    <p className="font-extrabold">
                        <MoneyFormatter value={price ?? 42500} />
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};
export default Product;
