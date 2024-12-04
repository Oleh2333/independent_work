import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./index.css"
import App from "./App.jsx"
import { Provider } from "react-redux"
import store from "./store.js"

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
)
