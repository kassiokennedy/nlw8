//componente é uma função que retorna um HTML

import { Widget } from "./components/Widget";


export function App() {
  /*
   a div chama diversos componentes
  o react espera um unico componente, no caso a div,
  que dentro dela pode ser colocada uma quantidade maior coisas
  
  */
   return <Widget />
}