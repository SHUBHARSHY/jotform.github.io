import React,{useEffect, useState}from 'react'
import { grapesjs } from 'grapesjs'
import "./Grapes.css"
import gjsPresetWebpage from "grapesjs-preset-webpage"


const Grapes = () => {

    const [editor,setEditor]= useState(null)

useEffect(()=>{
const editor = grapesjs.init({
    container:"#editor",
    plugins:[gjsPresetWebpage],
    pluginsOpts:{
        gjsPresetWebpage:{}
    }
});
setEditor(editor)
},[])
  return (
    <div className='grape'>
        <div id='editor'>
          
        </div>
    </div>
  )
}

export default Grapes