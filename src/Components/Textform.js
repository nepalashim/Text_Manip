import React,{useState}from 'react'

export default function Textform(props) {
    const handleUpClick =()=> {
        // console.log("Uppercase was Clicked."+ text);
        let newText=text.toUpperCase();
        setText(newText) ;
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLoClick =()=> {
        // console.log("Uppercase was Clicked."+ text);
        let newText=text.toLowerCase();
        setText(newText) ;
        props.showAlert("Converted to Lower Case","success");
    }
    const handleClearclick =()=> {
        // console.log("Uppercase was Clicked."+ text);
        let newText='';
        setText(newText) 
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange =(event)=> {
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText]= useState('');
    // setText("Ashim Nepal");

  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#0f092f'}}> 
        {/* <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div> */}
            <h1> {props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value ={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#0f092f'}} id="myBOX" rows="9"></textarea>
            </div>
            <button className="btn btn-primary mx-1 " onClick={handleUpClick}> Convert to UpperCase</button> 
            <button className="btn btn-primary mx-2 " onClick={handleLoClick}> Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearclick}> Clear Text </button>
            
            
            
    </div>
    <div className="container" my-3="true" style={{color:props.mode==='dark'?'white':'#0f092f'}}>
        <h2> Your text summary</h2>
        <p> {text.split(" ").length} Words and {text.length}Characters</p>
        <p> {0.004* text.split(" ").length} Minutes to Read the text.</p>
        <h3> <b>Preview </b></h3>
        <p> {text.length>0?text :"Enter something to above textbox to preview it here"}</p>

    </div>
    </>
  )
}
