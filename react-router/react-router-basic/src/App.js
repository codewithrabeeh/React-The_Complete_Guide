import { Route, Switch, Redirect } from 'react-router-dom'

import Welcome from './pages/Welcome'
import Products from './pages/Products';
import MainHeader from './component/MainHeader';
import classes from './component/mainHeader.module.css'
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <header className={classes.header} >
        <MainHeader />
      </header>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'/>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </ Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
