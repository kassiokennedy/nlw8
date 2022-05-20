//componente é uma função que retorna um HTML
//função que define as caracteristicas da função Button
interface ButtonProps{
  text: string;

}
//função que define o componente
function Button(props: ButtonProps){
  return <button className="bg-violet-500 p-2">{props.text}</button>
}


function App() {
  /*
   a div chama diversos componentes
  o react espera um unico componente, no caso a div,
  que dentro dela pode ser colocada uma quantidade maior coisas
  
  */
   return (
    <div>
      <Button text="Enviar"/>
      <Button text="Ok"/>

    </div>
  )
}

export default App
