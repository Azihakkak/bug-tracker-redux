import "./App.css";
import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";
function App() {
  const unsubscribe = store.subscribe(() => {
    console.log("store changed", store.getState());
  });
  store.dispatch(bugAdded("Bug1"));
  store.dispatch(bugResolved(1));

  store.dispatch(bugRemoved(1));
  return <div className="App">Hello from redux</div>;
}

export default App;
