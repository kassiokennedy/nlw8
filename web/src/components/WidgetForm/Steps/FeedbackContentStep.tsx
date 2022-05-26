import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps{
  //função que faz funcionar o icone de voltar a tela no feedback
  onFeedbackRestartRequested: () => void;
  feedbackType: FeedbackType;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested

}:FeedbackContentStepProps ){


  const feedbackTypesInfo =/* feedbackTypes é o objeto com todas as opões de feedback*/ feedbackTypes[feedbackType]


  return (
    /*  o sinal <> é um conceito chamado fragment*/
    <>
      <header>
        { /*função que faz funcionar o icone de voltar a tela no feedback*/}
        <button 
        type="button" 
        className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>

        <span className="text-xl leading-6 flex items-center gap-2"> 
        <img src={feedbackTypesInfo.image.source} alt={feedbackTypesInfo.image.alt} className="w-6 h-6 "/>
        {feedbackTypesInfo.title} 
        </span>
        <CloseButton/>
          
      </header>


      <form className="my-8 w-full">

      <textarea 
      placeholder="Conte com detalhes o que esta acontecendo"
      className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100
      border-zinc-600 bg-transparent rounded-md
      focus:border-brand-500 focus:ring-brand-500 focus:ring-1
      focus:outline-none
      resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin

      "/>
      
      </form>   
    </>
  )
}