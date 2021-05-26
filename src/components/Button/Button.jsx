import './Button.scss'

const Button = ({ children, click = () => {} }) => {
    return (
        <button className='Button' onClick={() => click()}>{children}</button>
    )
}

export default Button