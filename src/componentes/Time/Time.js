import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";

function Time(props)
{
    const css = {backgroundColor:props.corSecundaria};

    return(
        (props.colaboradores.length > 0) && <section className="time" style={css}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

            <div className="colaboradores">
                {props.colaboradores.map(colaborador =>
                <Colaborador
                    nome={colaborador.nome}
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    key={colaborador.nome}
                    corDeFundo={props.corPrimaria}
                />
                )}
            </div>

        </section>
    )
}

export default Time