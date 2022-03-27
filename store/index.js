import { createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import EventsReducer from './reducers/events.reducer';
import ItemsReducer from './reducers/items.reducer';
import PlacesReducer from './reducers/places.reducer';
const RootReducer = combineReducers({
    items: ItemsReducer,
    events: EventsReducer,
    places: PlacesReducer,
})

export default createStore (RootReducer, applyMiddleware(thunk));