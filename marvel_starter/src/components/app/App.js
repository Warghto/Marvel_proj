import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import axios from "axios";

import decoration from '../../resources/img/vision.png';

const App = () => {
    axios.get('https://gateway.marvel.com/v1/public/characters', {
        params: {
            apikey: 'yourapikey',
        }
    })
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.log(error);
        });


    return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

export default App;