import { useState } from 'react';

export default function ProfileCard({ inputState, setInputState }) {
    const [profileInfo, setInfo] = useState({
        name: "Name...",
        age: null,
        city: "City...",
        hobby: "Hobby...",
        gender: "male",
    }
    );

    function handleChange(changeValue, newValue) {
        setInfo((previousValues) => {
            return {
                ...previousValues,
                [changeValue]: newValue,
            }
        }
        )
    }
    function CloseInput() {
        setInputState(!inputState);
    }
    function ResetValues() {
        setInfo({
            name: "Name...",
            age: null,
            city: "City...",
            hobby: "Hobby...",
            gender: "male",
})
    }

    return (
        <div id="profile-card">

            {inputState && (
                <div>
                    <h2>Fill in the Form</h2>
                </div>
            )}
            {inputState && (
            <div className="input-group"> 
                <p>
                    <label>Name</label>
                    <input
                        type="text"
                        required
                        value={profileInfo.name}
                        onChange={(event) => handleChange('name', event.target.value)} />
                </p>
                <p>
                    <label>Age</label>
                    <input
                        type="number"
                        required
                        value={profileInfo.age}
                        onChange={(event) => handleChange('age', event.target.value)} />
                </p>
            </div>
            )}

            {inputState && (
                <div className="input-group">
                    <p>
                        <label>City</label>
                        <input
                            type="text"
                            required
                            value={profileInfo.city}
                            onChange={(event) => handleChange('city', event.target.value)} />
                    </p>
                    <p>
                        <label>Hobby</label>
                        <input
                            type="text"
                            required
                            value={profileInfo.hobby}
                            onChange={(event) => handleChange('hobby', event.target.value)}
                        />
                    </p>
                    <div className = "gender-group">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={profileInfo.gender === "male"}
                                onChange={(event) => handleChange('gender',
                                    event.target.value)}
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={profileInfo.gender === "female"}
                                onChange={(event) => handleChange('gender',
                                    event.target.value)}
                            />
                            Female
                        </label>
                    </div>
                </div>
            )}
            {!inputState && (
            <div id="preview">
                <img src={profileInfo.gender == "male" ? "/male.png" : "female.png"} alt= {profileInfo.gender} className="profile-img"/>
                Hi, I'm {profileInfo.name}, {profileInfo.age} years old from {profileInfo.city}. I love {profileInfo.hobby}!
            </div>
            )}
            {!inputState && (
                <div>
                    <button onClick={CloseInput} className="btn-centered">Edit Card </button>
                </div>
            )}  
            {inputState && (
            <div className="button-group">
                <button onClick={CloseInput} className="reset-btn">Show Card </button>
                <button onClick={ResetValues} className="reset-btn">Reset Values</button>
            </div>
            )}           
        </div >
        
    );
}