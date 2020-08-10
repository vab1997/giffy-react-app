import React from "react"
import "./App.css"
import { Route, Link } from "wouter"
import Detail from "./pages/Detail"
import Home from "./pages/Home"
import SearchResults from "./pages/SearchResults"
import StaticContext from "context/StaticContext"
import { GifsContextProvider } from "context/GifsContext"

function App() {
  return (
    <StaticContext.Provider value={2}>
      <div className="App">
        <section className="App-content">
          <Link to="/">
            <img src="/logo.png" className="App-logo" alt="Giffy logo" />
          </Link>
          <GifsContextProvider>
            <Route component={Home} path="/" />
            <Route component={SearchResults} path="/search/:keyword" />
            <Route component={Detail} path="/gif/:id" />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
