import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import {Menu} from './Components/Menu/Menu';
import {Page} from './Components/Page/Page';
import './App.css';

export default function App() {
    return (
        <Router basename={'/'}>
            <div>
                <Menu/>
                <div className="page">
                    <Route path={'/'} exact={true} component={Page}/>
                    <Route path={'/drift'} component={Page}/>
                    <Route path={'/timeattack'} component={Page}/>
                    <Route path={'/forza'} component={Page}/>
                    <Redirect to={'/'} />
                </div>
            </div>
        </Router>
    );
}
