import { useState } from 'react';
import Header from "./components/Header";
import InputField from "./components/InputField";
import ProfileCard from "./components/ProfileCard";

function App() {
    const [inputState, setInputState] = useState(true);

    return (
        <>
           
                <Header inputState={inputState} setInputState={setInputState} />
           
            <ProfileCard inputState={inputState} setInputState={setInputState} />
        </>
  )
}

export default App
