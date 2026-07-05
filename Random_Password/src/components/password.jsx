import React, { useState, useEffect, useCallback,useRef } from "react";
import './password.css'
export default function Password() {
    const [passlen, setPasslen] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [specialAllowed, setSpecialAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const Password_ref=useRef(null)
    const generatePassword = useCallback(() => {
        let pool = "";
        let result = "";

        const alphabets =
            "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
        const numbers = "1234567890";
        const specials = "!@#$%^&*(){}[]_/*+-?:;";

        if (numAllowed) pool += numbers;
        if (charAllowed) pool += alphabets;
        if (specialAllowed) pool += specials;

        if (!pool) return;

        for (let i = 0; i < passlen; i++) {
            const index = Math.floor(Math.random() * pool.length);
            result += pool[index];
        }

        setPassword(result);
    }, [passlen, numAllowed, charAllowed, specialAllowed]);

    const copyPassord=useCallback(()=>{
        window.navigator.clipboard.writeText(password);
    },[password])
    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    return (
        <>
            <h1>Password Generator</h1>

            <div className="input-box">
                <input type="text" value={password} readOnly ref={Password_ref} />
                <p onClick={copyPassord}>COPY</p>
                <button onClick={generatePassword}>Generate Password</button>
            </div>

            <div className="types">
                <div className="range">
                    <input
                        type="range"
                        min={6}
                        max={100}
                        value={passlen}
                        onChange={(e) => setPasslen(Number(e.target.value))}
                    />
                    <p>Length({passlen})</p>
                </div>

                <div className="items">
                    <div className="box">
                        <input
                        type="checkbox"
                        id="check1"
                        onChange={() => setNumAllowed((p) => !p)}
                    />
                    <label htmlFor="check1">Numbers</label>
                    </div>

                    <div className="box">
                        <input
                        type="checkbox"
                        id="check2"
                        onChange={() => setCharAllowed((p) => !p)}
                    />
                    <label htmlFor="check2">Characters</label>
                    </div>

                    <div className="box">
                        <input
                        type="checkbox"
                        id="check3"
                        onChange={() => setSpecialAllowed((p) => !p)}
                    />
                    <label htmlFor="check3">Special Characters</label>
                    </div>
                </div>
            </div>
        </>
    );
}
