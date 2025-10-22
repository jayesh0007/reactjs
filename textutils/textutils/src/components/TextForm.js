import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState("Lihi bc");

    //ya madhe apan text directly access kela.
    const handleClickU = () => {
        let updatedtext = text.toUpperCase();
        setText(updatedtext);
    }
    const handleClickL = () => {
        let updatedtext = text.toLowerCase();
        setText(updatedtext);
    }

    // ya onchange mule apan type kelela info text madhe asnr ani tech apan setText madhe takat ahe
    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container'>
                <div class="mb-3">
                    <label for="myBox" className="form-label">{props.heading}</label>
                    <textarea value={text} onChange={handleChange} className="form-control" id="myBox" rows="8"></textarea>
                </div>
                <button onClick={handleClickU} className='btn btn-primary mx-2'>Convert to UpperCase</button>
                <button onClick={handleClickL} className='btn btn-primary mx-2'>Convert to LowerCase</button>
            </div>
            <div className='container'>
                <h1>Text Summary</h1>
                <p>words - {text.split(" ").length}, characters - {text.length}</p>
            </div>
        </>
    )
}
