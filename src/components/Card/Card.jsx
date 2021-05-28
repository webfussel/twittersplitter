import './Card.scss'
import Button from '../Button/Button'
import {useState} from 'react'

const Card = ({children, pageCurr, pageTotal}) => {
    const text = `${children} (${pageCurr + 1} / ${pageTotal})`
    const defaultButtonText = 'Copy'

    const [buttonText, setButtonText] = useState(defaultButtonText)

    const copy = () => {
        const textarea = document.createElement('textarea')
        textarea.textContent = text
        textarea.style.position = 'fixed'
        document.body.appendChild(textarea)
        textarea.select()
        try {
            setButtonText('Copied!')
            setTimeout(() => {
                setButtonText(defaultButtonText)
            }, 1000)
            return document.execCommand('copy')
        } catch (ex) {
            console.warn('Copy to clipboard failed.', ex)
            return false
        } finally {
            document.body.removeChild(textarea)
        }
    }

    return (
        <article className="Card">
            <p>{text}</p>
            <div>
                <small>{text.length} Characters</small>
                <Button click={copy}>{buttonText}</Button>
            </div>
        </article>
    )
}

export default Card
