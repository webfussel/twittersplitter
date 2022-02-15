import './App.scss';
import TextField from "./components/TextField/TextField";
import Card from "./components/Card/Card";
import {useState} from "react";
import Header from "./components/Header/Header";
import {initializeApp} from 'firebase/app';

function App() {
    const firebaseConfig = {
        apiKey: "AIzaSyCWVrxRm1gIgK4Xr4vRNjyHug2spyY1its",
        authDomain: "fiole-ee4ee.firebaseapp.com",
        projectId: "fiole-ee4ee",
        messagingSenderId: "538963955041",
        appId: "1:538963955041:web:34983d812413f6a9dcc920"
    };
    initializeApp(firebaseConfig);

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
            <Header/>
            <aside>
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
            </aside>
            <main>
                <TextField click={splitTextToCards}/>
                <section className='CardContainer'>
                    {cards.map((card, index) => <Card key={index} pageCurr={index}
                                                      pageTotal={cards.length}>{card}</Card>)}
                </section>
            </main>
        </div>
    );

}

export default App;
