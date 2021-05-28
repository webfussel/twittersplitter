import './App.scss';
import Textfield from "./components/Textfield/Textfield";
import Card from "./components/Card/Card";
import {useState} from "react";

function App() {

    const maximumTweetLength = 270
    const [cards, setCards] = useState([])

    const splitTextToCards = text => {
        const textSplit = text
            .split(' ')
            .filter(t => t.length > 0)
            .reverse()

        let cards = []
        let currentCard = []

        while (textSplit.length > 0) {
            const nextPart = textSplit.pop()
            const currentCardLength = currentCard.join(' ').length
            const nextPartLength = nextPart.length || 0

            if (currentCardLength + nextPartLength >= maximumTweetLength) {
                cards.push(currentCard.join(' '))
                currentCard = []
            }

            currentCard.push(nextPart)
        }

        cards.push(currentCard.join(' '))
        setCards(cards)
    }

    return (
        <div className="App">
            <header>
                <h1>
                    <span>TwitterSplitter</span>
                    <small>Split your threads properly</small>
                </h1>
                <div>
                    <span>Next steps:</span>
                    <ul>
                        <li>Implement Twitter API to directly post threads</li>
                        <li>Remove ugliness</li>
                    </ul>
                </div>
            </header>
            <Textfield click={splitTextToCards}/>
            <section className='CardContainer'>
                {cards.map((card, index) => <Card key={index} pageCurr={index} pageTotal={cards.length}>{card}</Card>)}
            </section>
        </div>
    );

}

export default App;
