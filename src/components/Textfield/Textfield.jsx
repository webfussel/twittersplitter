import './Textfield.scss'
import Button from "../Button/Button";

const Textfield = ({change = () => {}, click = () => {}}) => {
    return (
        <section className="Textfield">
            <textarea onChange={event => change(event.target.value)} />
            <Button click={click}>Threadify</Button>
        </section>
    )
}

export default Textfield