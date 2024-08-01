import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";

const AppComponent = () => {
    return (
    <div className="app">
        <Header />
        <Body />
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent/>);