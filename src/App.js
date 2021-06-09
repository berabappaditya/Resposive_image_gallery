import "./App.css";
import ImageStock from "./components/ImageStock";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [selectImage, setSelectedImage] = useState(null);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <ImageStock setSelectedImage={setSelectedImage} />
          </Route>
        </Switch>

        {selectImage && (
          <Modal
            setSelectedImage={setSelectedImage}
            selectImage={selectImage}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
