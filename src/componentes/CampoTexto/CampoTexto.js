import "./CampoTexto.css";

function CampoTexto(props) 
{

    function aoDigitado(e)
    {
        props.aoAlterado(e.target.value);
    }
    

    return (
        <div className="campo-texto"> 
            <label>{props.label}</label>
            <input required={props.obrigatorio} onChange={aoDigitado} value={props.valor} placeholder={props.placeholder}/>
        </div>
    )
}
export default CampoTexto