import Head from 'next/head'


export function CustomHead({ title, description }: { title?: string, description?: string }) {
    return (
        <Head>
            {!!title && <title>{title}</title>}
            {!!description && <meta name="description" content={description} />}
        </Head>
    )
}
