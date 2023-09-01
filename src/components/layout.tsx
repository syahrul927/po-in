import { cn } from "@/utils";
import Head from "next/head";
import React from "react";

const Layout = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=0"
                />
                <link rel="icon" href="/icon-512x512.png" sizes="any" />
            </Head>
            <div className="flex w-full justify-center">
                <div
                    ref={ref}
                    className={cn(
                        "h-[100dvh] w-full max-w-md overflow-y-hidden border-x-inherit bg-white",
                        className
                    )}
                    {...props}
                />
            </div>
        </>
    );
});
Layout.displayName = "Layout";
export default Layout;
