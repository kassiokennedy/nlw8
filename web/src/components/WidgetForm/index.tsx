import { CloseButton } from "../CloseButton";

import bugImage from '../../assets/bug.svg'
import ideaImage from '../../assets/idea.svg'
import thoughtImage from '../../assets/thought.svg'

import { useState } from "react";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

{/* ----------------------------------------------------------------------- */}
export const feedbackTypes = {
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
export type FeedbackType = keyof typeof feedbackTypes; 

{/* ----------------------------------------------------------------------- */}
export function WidgetForm(){


  /* a variavel abaixo anota qual tipo de feedback @ usuari@ escolheu*/
  const [feedbackType, setFeedbackType] =useState<FeedbackType | null>(null)

  //função que faz funcionar o icone de voltar a tela no feedback
  function handleRestartFeedback(){
    setFeedbackType(null)
  }

  return(



    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

      {/* escolhe o tipo de feedback e direciona pra caixa de resposta certa*/}
      
        {!feedbackType ? (
          // componente 'FeedbackTypeStep' chama a funcao 'onFeedbackTypeChanged={setFeedbackType} />' quando o botao é clicado
          <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />

        ) : (
          // manda pro feedbacktypestep o tipo de conteudo que a pessoa escolheu*
          <FeedbackContentStep 
          feedbackType={feedbackType} 
           //função que faz funcionar o icone de voltar a tela no feedback//
          onFeedbackRestartRequested= {handleRestartFeedback}
          />


        )} 

      <footer className="text-xs text-neutral-400">
      Feito com amor pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>

      </footer>

    </div>
  )

}

{/* ----------------------------------------------------------------------- */}