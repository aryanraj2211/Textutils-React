import React, {useState} from 'react'

export default function TextForm(props) {

  const handleupclick=()=>{
   // console.log("uppercase was clicked" + text)
    let newText= text.toUpperCase();
    setText(newText)
    props.showAlert("Uppercase is done","success")
  }

  const handleloclick=()=>{
    // console.log("uppercase was clicked" + text)
     let newText= text.toLowerCase();
     setText(newText)
     props.showAlert("Lowercase is done","success")
   }

  const handlechange=(event)=>{
  //   console.log("on change");
    setText(event.target.value);
  }

  const handleclear=()=>{
   let newText=''
   setText(newText)
    }

  const handlecopy=()=>{
   var text= document.getElementById("myBox")
   text.select();
   navigator.clipboard.writeText(text.value);
    }

    const handleextraspaces=()=>{
        let newText= text.split(/[ ]+/)
        setText(newText.join(" "))
      }

  const [text, setText] = useState('');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}> 
    <h1>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" id="myBox"  style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black' }} rows="8" onChange={handlechange} value={text}></textarea>
    </div>
    <button className="btn btn-primary mx2" onClick={handleupclick}>Convert to uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleloclick}>Convert to lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleclear}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy</button>
    <button className="btn btn-primary mx-2" onClick={handleextraspaces}>Remove spaces</button>
    </div>

    <div className="container my-2" style={{color: props.mode==='dark'?'white':'black'}}>
      <h6>Your text summary</h6>
      <p> {text.split(" ").length} words {text.length} characters</p>
      <p> {0.008* text.split(" ").length} minutes to read</p>
      <h5>Preview</h5>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
