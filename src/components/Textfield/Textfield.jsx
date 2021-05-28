import './Textfield.scss'
import Button from "../Button/Button";
import {useState} from 'react'

const Textfield = ({click = () => {}}) => {

    const [length, setLength] = useState(0)
    const [text, setText] = useState('')

    const calculate = _text => {
        setLength(_text?.length || 0)
        setText(_text || '')
    }

    return (
        <section className="Textfield">
            <textarea onChange={event => calculate(event.target.value)} />
            <small>{length} Characters</small>
            <Button click={() => click(text)}>Threadify</Button>
        </section>
    )
}

export default Textfield
