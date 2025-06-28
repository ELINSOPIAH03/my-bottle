import { useEffect, useRef } from 'react'
import Splitting from 'splitting'
import 'splitting/dist/splitting.css'
import '../highlight.css'

interface Props {
    text: string
    className?: string
}

const HighlightText: React.FC<Props> = ({ text, className }) => {
    const ref = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        if (ref.current) {
            Splitting({ target: ref.current, by: 'words' })
        }
    }, [])

    return (
        <h1 ref={ref} className={`highlight-text ${className ?? ''}`} data-splitting="words">
            {text}
        </h1>
    )
}

export default HighlightText
