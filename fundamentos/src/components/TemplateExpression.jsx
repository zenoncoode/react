//import React from 'react'
import MyComponent from "./MyComponent";

const TemplateExpression = () => {
    const name = "ZenonCoode";

    const data = {
        age: 23,
        job: "Desenvolvedor e Analista",
    };
  return (
    <div>
        <p>A soma é {4+32}</p>
        <MyComponent/> {/*hierarquia*/}
        <h3>Bem vindo {name}</h3>
        <p>Minha idade é {data.age} anos e eu sou {data.job}.</p>
    </div>
  )
}

export default TemplateExpression