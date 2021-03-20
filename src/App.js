import './App.css';
import ImageStock from './components/ImageStock';
import Modal from './components/Modal';
import { useState } from 'react'

function App() {
  const [selectImage, setSelectedImage]=useState(null);
  return (
    <div className="App">
      <ImageStock setSelectedImage={setSelectedImage} />
      {selectImage &&<Modal setSelectedImage={setSelectedImage} selectImage={selectImage} />}
    </div>
  );
}

export default App;
