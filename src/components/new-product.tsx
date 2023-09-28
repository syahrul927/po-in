import { Card, CardContent, CardHeader } from "./ui/card";
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

export interface NewItemProductProps {
    image: string;
    name: string;
    id: string;
    price: number;
    description?: string;
}

export interface NewProductProps extends NewItemProductProps {
    action?: () => void;
}

const NewProduct: React.FC<NewProductProps> = (props) => {
    const { action, ...productProps } = props;
    return (
        <Sheet>
            <SheetTrigger>
                <NewItemProduct {...productProps} />
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
const NewItemProduct: React.FC<NewItemProductProps> = ({
    image,
    name,
    id: _id,
    price,
}) => {
    return (
        <Card className="border-0 p-0 shadow-none">
            <CardContent className="m-0 flex h-full gap-4 p-2">
                <div className="relative flex aspect-square h-full max-h-20 w-20 items-center justify-center ">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        objectFit="cover"
                        className=" rounded-lg"
                    />
                </div>
                <div className="flex w-4/6 flex-col text-start">
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
export default NewProduct;
