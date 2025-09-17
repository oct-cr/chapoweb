import { useState, useEffect, useCallback, TouchEvent } from 'react'
import styles from './QuotesCarousel.module.css'


type QuotesCarouselProps = {
    quotes: { [trackNumber: string]: string[][] }
} & React.HTMLAttributes<HTMLDivElement>


function QuotesCarousel({ quotes, ...props }: QuotesCarouselProps) {
    const [isClient, setIsClient] = useState(false)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    // Minimum swipe distance threshold in pixels
    const minSwipeDistance = 50

    useEffect(() => {
        setIsClient(true)
    }, [])

    const flatQuotes = Object.entries(quotes).flatMap(([trackNumber, trackQuotes]) =>
        trackQuotes.map(quoteBlock => ({
            trackNumber,
            quoteBlock
        }))
    )

    const [currentIndex, setCurrentIndex] = useState(0)
    const [previousIndex, setPreviousIndex] = useState(0)
    const [animating, setAnimating] = useState(false)


    // Only randomize quotes on client-side
    const setNextQuote = useCallback(() => {
        if (animating || !isClient) {
            return
        }

        setPreviousIndex(currentIndex)
        setAnimating(true)
        setTimeout(() => {
            setCurrentIndex(Math.floor(Math.random() * flatQuotes.length))
            setAnimating(false)
        }, 400)
    }, [currentIndex, animating, flatQuotes.length, isClient])


    useEffect(() => {
        const interval = setInterval(setNextQuote, 6000)
        return () => clearInterval(interval)
    }, [setNextQuote])

    const handleTouchStart = (e: TouchEvent) => {
        setTouchEnd(null) // Reset touchEnd
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e: TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            return
        }

        const distance = touchStart - touchEnd
        const isSwipe = Math.abs(distance) > minSwipeDistance

        if (isSwipe) {
            // Trigger next quote regardless of swipe direction
            setNextQuote()
        }

        // Reset touch positions
        setTouchStart(null)
        setTouchEnd(null)
    }

    if (flatQuotes.length === 0) {
        return null
    }

    const currentQuote = flatQuotes[currentIndex]
    const previousQuote = flatQuotes[previousIndex]

    return (
        <div
            className="max-w-2xl mx-auto my-8 p-6 rounded-lg shadow-md cursor-pointer select-none"
            tabIndex={0}
            role="button"
            aria-label="Next quote"
            onClick={setNextQuote}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setNextQuote()
                }
            }}
            {...props}
        >
            <div className={styles.quoteContainer}>
                <div className={`${styles.quoteItem} ${styles.quoteCurrent} ${animating ? styles.fadeOut : styles.psychedelic}`}>
                    {currentQuote.quoteBlock.map((line, i) => (
                        <QuoteLine key={i} line={line} />
                    ))}
                </div>

                <div className={`${styles.quoteItem} ${styles.quotePrevious} ${animating ? styles.fadeIn : ''}`}>
                    {previousQuote.quoteBlock.map((line, i) => (
                        <QuoteLine key={i} line={line} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default QuotesCarousel


function QuoteLine({ line, ...props }: { line: string }) {
    // Initial non-random state for SSR
    const [fontSize, setFontSize] = useState('')
    const [alignment, setAlignment] = useState('left')
    const [fontWeight, setFontWeight] = useState(400)
    const [isItalic, setIsItalic] = useState(false)
    const [isClient, setIsClient] = useState(false)

    // Apply randomness only on client-side after initial render
    useEffect(() => {
        setIsClient(true)
        // Set random styles
        setFontSize(getFontSize(line.length))
        setAlignment(['left', 'center', 'right'][Math.floor(Math.random() * 3)])
        setFontWeight([400, 500, 700][Math.floor(Math.random() * 3)])
        setIsItalic(Math.random() < .8)
    }, [line.length])

    return (
        <span
            className={`${isClient ? `text-${alignment} ${isItalic ? 'italic' : ''}` : ''}`}
            style={isClient ? { fontSize, fontWeight } : {}}
            {...props}
        >
            {line}
        </span>
    )
}

function getFontSize(lineLength: number): string {
    let baseSize: number
    if (lineLength < 30) {
        baseSize = 2
    } else if (lineLength < 50) {
        baseSize = 1.25
    } else {
        baseSize = 1
    }

    const variation = (Math.random() - 0.5) * 0.5
    const finalSize = baseSize + variation
    return `${finalSize.toFixed(2)}em`
}
