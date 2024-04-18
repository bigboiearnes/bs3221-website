import axios from 'axios';
import './App.css';
import NotificationButton from './components/NotificationButton';
import MultipleItemForm from './components/MultipleItemForm';
function App() {
    const apiCall = () => {
        axios.get('http://localhost:8080').then((data) => {
            console.log(data)
        })
    }

    return  (
        <div className="App">
            <header className='App-header'>

                <button onClick={apiCall}>Make API Call</button>
                <NotificationButton message="Playing Music">
                  Music
                </NotificationButton>
                <NotificationButton message="Playing Video">
                  Video
                </NotificationButton>
                <MultipleItemForm/>

            </header>
        </div>
    );
}

export default App;
