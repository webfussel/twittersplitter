import './App.scss';
import Textfield from "./components/Textfield/Textfield";
import Card from "./components/Card/Card";

function App() {
    return (
        <div className="App">
            <header>
                <h1>
                    <span>TwitterSplitter</span>
                    <small>Split your threads properly</small>
                </h1>
            </header>
            <Textfield />
            <section className='CardContainer'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    );
}

export default App;
