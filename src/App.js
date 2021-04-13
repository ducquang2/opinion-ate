import {Provider} from 'react-redux';
import store from './store';
import RestaurantScreen from './components/RestaurantScreen';

const App = () => (
  <Provider store={store}>
    Hello, world.
    <RestaurantScreen />
  </Provider>
);

export default App;
