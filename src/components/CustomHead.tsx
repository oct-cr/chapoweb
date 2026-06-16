import Head from 'next/head'


export function CustomHead({ title, description, jsonLd }: {
    title?: string, description?: string, jsonLd?: unknown
}) {
    return (
        <Head>
            {!!title && <title>{title}</title>}
            {!!description && <meta name="description" content={description} />}
            {!!jsonLd && <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                key="ld"
            />}
        </Head>
    )
}
