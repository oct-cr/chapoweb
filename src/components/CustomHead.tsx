import Head from 'next/head'


type SocialMeta = {
    title: string
    description: string
    image: string
}

type CustomHeadProps = {
    title?: string
    description?: string
    jsonLd?: unknown
    canonical?: string
    favicon?: string
    faviconType?: string
    openGraph?: SocialMeta & {
        url: string
        type: string
    }
    twitter?: SocialMeta & {
        card: string
    }
}


export function CustomHead({
    title,
    description,
    jsonLd,
    canonical,
    favicon,
    faviconType = 'image/webp',
    openGraph,
    twitter,
}: CustomHeadProps) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
            {!!title && <title>{title}</title>}
            {!!description && <meta name="description" content={description} key="description" />}
            {!!canonical && <link rel="canonical" href={canonical} key="canonical" />}
            {!!favicon && <link rel="icon" type={faviconType} href={favicon} key="favicon" />}
            {!!openGraph && (
                <>
                    <meta property="og:title" content={openGraph.title} key="og:title" />
                    <meta property="og:description" content={openGraph.description} key="og:description" />
                    <meta property="og:image" content={openGraph.image} key="og:image" />
                    <meta property="og:url" content={openGraph.url} key="og:url" />
                    <meta property="og:type" content={openGraph.type} key="og:type" />
                </>
            )}
            {!!twitter && (
                <>
                    <meta name="twitter:card" content={twitter.card} key="twitter:card" />
                    <meta name="twitter:title" content={twitter.title} key="twitter:title" />
                    <meta name="twitter:description" content={twitter.description} key="twitter:description" />
                    <meta name="twitter:image" content={twitter.image} key="twitter:image" />
                </>
            )}
            {!!jsonLd && <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                key="ld"
            />}
        </Head>
    )
}
