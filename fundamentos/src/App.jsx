import './App.css'
import FirstComponent from './components/FirstComponent'
import MyComponent from './components/MyComponent'
import TemplateExpression from './components/TemplateExpression'
import Eventos from './components/Eventos'

function App() {
  return (
    <>
      <div>
        <h1>Abaixo está o meu componente sendo importado</h1>
        <FirstComponent/>
        <TemplateExpression/>
        <MyComponent/>
        <Eventos/>
      </div>
    </>
  )
}

export default App
