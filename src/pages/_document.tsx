import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    />
                    <link rel="manifest" href="manifest.json" />
                    <link rel="apple-touch-icon" href="/icon.png"></link>
                    <link rel="theme-color" href="#fff" />
                    <script
                        async
                        src="https://unpkg.com/pwacompat"
                        crossOrigin="anonymous"
                    ></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
