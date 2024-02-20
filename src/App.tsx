import { useState } from "react";
import CustomModal from "./components/custom-modal";
import './App.css'

export default function App() {

  const [showModalPopup, setShowModalPopup] = useState(false);

  function handleClick() {
    setShowModalPopup(!showModalPopup);
  }

  function handleClosed() {
    setShowModalPopup(false);
  }

  return (
    <div className="main">
      <button onClick={handleClick}>open modal</button>

      {showModalPopup && <CustomModal id='testmodal'
        header={<div>my custom header</div>}
        body={<div>my custom body</div>}
        footer={<div>my custom footer</div>}
        onClosed={handleClosed} />}
    </div>
  )
}