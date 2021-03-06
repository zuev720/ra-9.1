import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Menu} from './Components/Menu/Menu';
import {Page} from './Components/Page/Page';
import './App.css';

export default function App() {
    return (
        <Router basename={'/ra-9.1'}>
            <div>
                <Menu/>
                <div className="page">
                    <Route path={'/'} exact={true} component={Page}/>
                    <Route path={'/drift'} component={Page}/>
                    <Route path={'/timeattack'} component={Page}/>
                    <Route path={'/forza'} component={Page}/>
                </div>
            </div>
        </Router>
    );
}
