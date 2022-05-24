import { CloseButton } from "./CloseButton";
import bugImage from '../assets/bug.svg'
import ideaImage from '../assets/idea.svg'
import thoughtImage from '../assets/thought.svg'
import { useState } from "react";


const feedbackTypes = {
BUG: {
  title: 'Problema',
  image:{
    source: bugImage,
    alt:'inceto'
  }
},
IDEA: {
  title: 'Idéia',
  image:{
    source: ideaImage,
    alt:'lampada'
  }
},
OTHER:{
  title: 'Outro',
  image:{
    source: thoughtImage,
    alt:'nuvem'
  }
},

}
type FeedbackType = keyof typeof feedbackTypes; 

export function WidgetForm(){

  /* a variavel abaixo anota qual tipo de feedback @ usuari@ escolheu*/
const [feedbackType, setFeedbackType] =useState<FeedbackType | null>(null)


return(
  <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

    <header>
      <span className="text-xl leading-6">Deixe seu feedback</span>
      <CloseButton/>
     {/* */}
    </header>
    {/* ----------------------------------------------------------------------- */}
    {/* escolhe o tipo de feedback e direciona pra caixa de resposta certa*/}
    
      {!feedbackType ? (
          <div className="flex py-8 gap-2 w-full">
          {/*retorna um array de arrays */}
          { Object.entries(feedbackTypes).map(([key,value]) => {

            return (
              <button 
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center  gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500  focus:outline-none"
              onClick={() => setFeedbackType(key as FeedbackType)}
              type="button"
              >
                <img src={value.image.source} alt={value.image.alt} />
                <span>{value.title}</span> 
              </button>
            )
          } 
          )}
          
        </div>   
      ) : (
        <h1>Hello</h1>
      )} 


    {/* ----------------------------------------------------------------------- */}
    <footer className="text-xs text-neutral-400">
    Feito com amor pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>

    </footer>

  </div>
)

}