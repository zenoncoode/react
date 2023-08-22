
const Eventos = () => {
    let botao = "Clique Aqui";
    //funcao acionada por um evento
    const handleClick = () =>{
        console.log("Executou a função");
    };

    //funcao de renderizacao
    const renderSomething = (x)=> {
        if (x){
            return <h1>Renderizando isso!</h1>
        }
        else{
            return <h1>Renderizando outra coisa!</h1>
        }
    }

  return (
    <div>
        <div>
            <button onClick={() => console.log("Evento realizado")}>{botao}</button>
        </div>
        {/* evento com funcao*/}
        <div>
            <button onClick={handleClick}>{botao} - com Função</button>
        </div>
        
        {/* funcao com renderizacao*/}
        {renderSomething(true)}
        {renderSomething(false)}

    </div>
  )
}

export default Eventos