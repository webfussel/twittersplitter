import './Textfield.scss'
import Button from "../Button/Button";

const Textfield = () => {
    return (
        <section className="Textfield">
            <textarea defaultValue="asdijasldaskldj" />
            <Button click={() => {console.log('theadify now')}}>Threadify</Button>
        </section>
    )
}

export default Textfield