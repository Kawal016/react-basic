import React, { useState } from "react"
export default function Main() {
   
   const [memo,setMemo]=useState({
    topText:"",
    bottomText:"",
    imageUrl:"http://i.imgflip.com/1bij.jpg"
   })
   const [allMemes,setAllMemes]=useState([]);
   function handleChange(event){
   const {value,name}=event.target;
   setMemo(prevMemo =>({
    ...prevMemo,
   [name]:value
   })) 
   }
   React.useEffect(()=>{
      fetch("https://api.imgflip.com/get_memes")
     .then((res)=>res.json())
     .then((data)=>setAllMemes(data.data.memes))
     .catch((err)=>console.log(err));
    },[])

    function handleSelectRandomImage(){
         if (!allMemes || allMemes.length === 0 ) {
    console.error("No memes available");
    return;
  }
    
     const number=Math.floor(Math.random() * allMemes.length)
      const newImageUrl=allMemes[number].url;
      console.log(newImageUrl)
      setAllMemes(prevMemo =>({
        ...prevMemo,
         imageUrl: newImageUrl 
      }))
     }
   

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        value={memo.topText}
                        onChange={handleChange}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        value={memo.bottomText}
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                    />
                </label>
                <button onClick={handleSelectRandomImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={memo.imageUrl} />
                <span className="top">{memo.topText}</span>
                <span className="bottom">{memo.bottomText}</span>
            </div>
        </main>
    )
}