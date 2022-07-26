import { useState } from "react"

export const useForm = (initialForm) => {
    const [form, setForm] = useState(initialForm)
    const [error, setError] = useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const handleBlur = (e) =>{
        handleChange(e)
        setError(validationsForm(form))
    }

    const validationsForm = (form) => {
        let error = {}
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
        let regexPhone = /^[0-9]*(\.?)[ 0-9]+$/
        if (!form.name.trim()) {
            error.name = "El campo 'Nombre' es requerido"
    
        } else if (!regexName.test(form.name.trim())) {
            error.name = "El campo 'Nombre' solo acepta letras y espacios en blanco"
        }
        if (!form.lastname.trim()) {
            error.lastname = "El campo 'Apellido' es requerido"
        } else if (!regexName.test(form.lastname.trim())) {
            error.lastname = "El campo 'Nombre' solo acepta letras y espacios en blanco"
        }
        if (!form.phone.trim()) {
            error.phone = "El campo 'Telefono' es requerido"
        } else if (!regexPhone.test(form.phone.trim())) {
            error.phone = "El campo 'Telefono' solo acepta numeros"
        }
        if (!form.email.trim()) {
            error.email = "El campo 'Email' es requerido"
        } else if (!regexEmail.test(form.email.trim())) {
            error.email = "El campo 'Email' es incorrecto"
        }
        if (!form.subject.trim()){
            error.subject = "El campo 'Asunto' es requerido"
        }
        return error
    }
    return {
        form,
        error,
        handleChange,
        handleBlur,
    }
}
