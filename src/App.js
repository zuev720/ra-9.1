import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Menu} from './Components/Menu/Menu';
import {Page} from './Components/Page/Page';
import './App.css';

export default function App() {
    return (
        <Router>
            <div>
                <Menu/>
                <div className="page">
                    <Route path="https://zuev720.github.io/ra-9.1/" exact component={Page}/>
                    <Route path="https://zuev720.github.io/ra-9.1/drift" component={Page}/>
                    <Route path="https://zuev720.github.io/ra-9.1/timeattack" component={Page}/>
                    <Route path="https://zuev720.github.io/ra-9.1/forza" component={Page}/>
                </div>
            </div>
        </Router>
    );
}
