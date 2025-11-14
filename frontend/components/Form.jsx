import { useState } from 'react'
import { useEffect } from "react";
import './form.css'
const Form = () => {

    const [nomeInformado, setNomeIformado] = useState('')
    const [emailInformado, setEmailInformado] = useState('')
    const [idadeIformada, setIdadeInformada] = useState('')
    const [tecnologiaSelecionadas, setTecnologiaSelecionadas] = useState([])

    const [formData, setFormData] = useState({})

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const nome = (evento) => {
        setNomeIformado(evento.target.value);
    }

    const email = (evento) => {
        setEmailInformado(evento.target.value);
    }

    const idade = (evento) => {
        setIdadeInformada(evento.target.value);
    }

    const tecnologia = (evento) => {
        const valores = Array.from(evento.target.selectedOptions, option => option.value)
        setTecnologiaSelecionadas(valores);
    }

    const objeto = (evento) => {
        evento.preventDefault();
        setFormData({
            nome: nomeInformado,
            email: emailInformado,
            idade: idadeIformada,
            tecnologias: tecnologiaSelecionadas
        })
    }

    const tecnologias = [
        'java',
        'git',
        'react',
    ]

    return (
        <section className="section-form">
            <form action="" className="formulario" onSubmit={objeto}>

                <label htmlFor="" className="label">Nome</label>
                <input type="text" placeholder="Nome:" value={nomeInformado} onChange={nome} name='Nome' />

                <label htmlFor="" className="label">Email</label>
                <input type="text" placeholder="Email:" name='Email' value={emailInformado} onChange={email} />

                <label htmlFor="" className="label">Idade</label>
                <input type="number" placeholder="Idade:" name='idade' value={idadeIformada} onChange={idade} />

                <label htmlFor="" className="label">Tecnologia favorita:</label>

                <select name="tecnologias" id="tecnologias" multiple value={tecnologiaSelecionadas} onChange={tecnologia}>
                    
                    {tecnologias.map((tec) => (
                        <option key={tec} value={tec}>
                            {tec}
                        </option>
                    ))}
                </select>

                <div className='botao-section'>
                    <button className='botao' type='submit' >Enviar</button>
                    <button className='botao'>Limpar</button>
                </div>
            </form>
        </section>
    )
}

export default Form