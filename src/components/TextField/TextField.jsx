import './TextField.scss'
import Button from "../Button/Button";
import {useState} from 'react'

const TextField = ({click = () => {}}) => {

    const [length, setLength] = useState(0)
    const [text, setText] = useState('')

    const calculate = _text => {
        setLength(_text?.length || 0)
        setText(_text || '')
    }

    return (
        <section className="TextField">
            <textarea onChange={event => calculate(event.target.value)} />
            <small>{length} Characters</small>
            <Button click={() => click(text)}>Threadify</Button>
        </section>
    )
}

export default TextField
