import './App.scss';
import Textfield from "./components/Textfield/Textfield";
import Card from "./components/Card/Card";
import {useState} from "react";

function App() {

    const maximumTweetLength = 260
    const [cards, setCards] = useState([])
    const [text, setText] = useState('')

    const splitTextToCards = () => {
        const textSplit = text
            .split(' ')
            .filter(t => t.length > 0)
            .reverse()

        let cards = []
        let currentCard = []

        while (textSplit.length > 0) {
            const currentCardLength = currentCard.join(' ').length
            const nextPartLength = textSplit[textSplit.length - 1]?.length || 0

            if (currentCardLength + nextPartLength >= maximumTweetLength) {
                cards.push(currentCard.join(' '))
                currentCard = []
            }

            currentCard.push(textSplit.pop())
        }

        cards.push(currentCard.join(' '))
        setCards(cards)
    }

    const change = textFieldValue => setText(textFieldValue)

    return (
        <div className="App">
            <header>
                <h1>
                    <span>TwitterSplitter</span>
                    <small>Split your threads properly</small>
                </h1>
            </header>
            <Textfield change={change} click={splitTextToCards}/>
            <section className='CardContainer'>
                {cards.map((card, index) => <Card key={index} pageCurr={index} pageTotal={cards.length}>{card}</Card>)}
            </section>
        </div>
    );

}

export default App;
