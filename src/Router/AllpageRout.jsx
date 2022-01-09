import {Link, Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import EditTodo from '../Pages/EditTodo';

export default function AllpageRouts() {
    return(
    <>
    <div>
        <Link to="/">HOME</Link>
    </div>
    <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route exact path="/todo/:id">
            <EditTodo/>
        </Route>
    </Switch>
    </>
    )
}