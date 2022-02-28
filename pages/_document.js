import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>

            <Head>
                <title>aiwriter</title>
                <meta name="description" content="Artificial inteligence writter assitant" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body>

            <Main />
            <div id="modalRoot" />
            <NextScript />

            </body>
        </Html>
    )
}