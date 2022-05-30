import { Camera } from "phosphor-react";
import html2canvas from 'html2canvas'
import { useState } from "react";

export function ScreenShotButton (){
  const[isTakeScreenshot,setIsTakeScreenshot] = useState(false)

  //função que tira foto da tela e é executada pelo onclick
  async function handleTakeScreenShot(){
    setIsTakeScreenshot(true)
    // função que captura a imagem
    const canvas = await html2canvas(document.querySelector('html')!)
    //função que converte a imagem em texto
    const base64image = canvas.toDataURL('image/png')
    console.log(base64image)

    setIsTakeScreenshot(false)

  }
  return (

    <button
    type="button"
    onClick={handleTakeScreenShot}
    className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
    >
    <Camera className="w-6 h-6 text-zinc"/>
    
    </button>
  )

}