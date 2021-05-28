import './App.scss';
import Textfield from "./components/Textfield/Textfield";
import Card from "./components/Card/Card";
import {useState} from "react";

function App() {

    const commands = {
        nextTweet: '!nextTweet'
    }

    const maximumTweetLength = 270
    const [cards, setCards] = useState([])

    const splitTextToCards = text => {
        const tweetSplit = text
            .split(commands.nextTweet)

        for (let i = 0; i < tweetSplit.length - 1; i++) {
            tweetSplit[i] = `${tweetSplit[i].replace(/(\n)*$/, '')} ${commands.nextTweet}`
        }

        const textSplit = tweetSplit.join(' ')
            .split(' ')
            .filter(t => t.length > 0)
            .reverse()

        let cards = []
        let currentCard = []

        while (textSplit.length > 0) {
            const nextPart = textSplit.pop().replace(/!newLine/g, '\n')
            const currentCardLength = currentCard.join(' ').length
            const nextPartLength = nextPart.length || 0

            if (currentCardLength + nextPartLength >= maximumTweetLength || nextPart === commands.nextTweet) {
                cards.push(currentCard.join(' '))
                currentCard = []
            }

            if (nextPart !== commands.nextTweet) {
                currentCard.push(nextPart)
            }
        }

        cards.push(currentCard.join(' '))

        for (let i = 0; i < cards.length; i++) {
            cards[i] = cards[i].replace(/^(\n)*/, '').replace(/(\n)*$/, '')
        }

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
                <div>
                    <span>Features:</span>
                    <ul>
                        <li>
                            <span>!nextTweet</span>
                            <ul>
                                <li>Forces the text to start a new Tweet at this place</li>
                            </ul>
                        </li>
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
