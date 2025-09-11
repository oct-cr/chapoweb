import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import styles from '../styles/ui.module.css'

// Only import and render on the client side
const YouTubeEmbed = dynamic(
    () => import('@next/third-parties/google').then(mod => mod.YouTubeEmbed),
    { ssr: false }
)

type VideoProps = {
    videoid: string
}

export default function Video({ videoid }: VideoProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return (
        <div className={styles.videoContainer}>
            {isMounted ? (
                <YouTubeEmbed videoid={videoid} />
            ) : (
                // Placeholder with similar dimensions during SSR
                <div style={{
                    aspectRatio: '16/9',
                    background: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#555',
                }}>
                    <div>Loading video...</div>
                </div>
            )}
        </div>
    )
}
