import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import * as React from 'react';
import { useForm } from "react-hook-form";

const registrar = () => {
    // get date for date picker
    const d = new Date();
    if ((d.getMonth()+1)<10){
        var fechaDenuncia = `${d.getFullYear()}-0${d.getMonth()+1}-${d.getDate()}`
    }else{
        var fechaDenuncia = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
    }
    // get date for file
    const anio = (d.getFullYear()-2000);

    var dd = String(d.getDate()).padStart(2, '0');
    var mm = String(d.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = d.getFullYear();

    const fecha=  yyyy + '-' + mm + '-' + dd;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    //useState
    const [date,setDate]= React.useState(fecha);
    const [cedula, setCedula] = React.useState('V');
    const [idNumber, setIdNumber] = React.useState('');
    const [description,setDescription] = React.useState('');
    const [email,setEmail]=React.useState('');
    const [name,setName]=React.useState('');
    const [phone,setPhone]=React.useState('');
    const [numero,setNumero]=React.useState('');
    const [badFacebook,setBadFacebook]=React.useState('')
    const [inputBadBankNumber, setInputBankNumber]=React.useState([{badBankNumber:''}])
    const [inputBadPhones, setInputBadPhones] = React.useState([{badPhone:''}])
    const [zelle,setZelle] = React.useState('');
    const [badZelle,setBadZelle] = React.useState('');
    const [facebook,setFacebook] = React.useState('');
    const [twitter,setTwitter] = React.useState('');
    const [instagram,setInstagram] = React.useState('');

    React.useEffect(() => {
        const exp=555
        //file number
        const largo= (exp.toString().length);
        const expediente= [];
        expediente.push(exp);
        for (let i = 0; i < (6-largo); i++) {
            expediente.unshift('0');
        };
        const numero = expediente.join('')
        setNumero(numero)
      },[numero]);
    
    //State handle
    const handleDate = (event) => {
        setDate(event.target.value);
    };
    const handleCedula = (event) => {
        setCedula(event.target.value);
    };
    const handleId = (event) => {
        setIdNumber(event.target.value);
    };
    const handleDescription = (event) => {
        setDescription(event.target.value);
    };
    const handleEmail=(event)=>{
        setEmail(event.target.value)
    };
    const handleBadZelle=(event)=>{
        setBadZelle(event.target.value)
    };
    const handleName=(event) => {
        setName(event.target.value);
    };
    const handlePhone=(event) => {
        setPhone(event.target.value)
    };
    const handleZelle=(event)=>{
        setZelle(event.target.value)
    };
    const handleFacebook=(event)=>{
        setFacebook(event.target.value)
    };
    const handleInstagram=(event)=>{
        setInstagram(event.target.value)
    };
    const handleTwitter=(event)=>{
        setTwitter(event.target.value)
    };
    const handleBadPhone = (index, event) =>{
        let data = [...inputBadPhones];
        data[index][event.target.name] = event.target.value;
        setInputBadPhones(data);
    };
    const handleBadBank = (index, event) =>{
        let data = [...inputBadBankNumber];
        data[index][event.target.name] = event.target.value;
        setInputBankNumber(data);
    };

    //Dynamic Data
    const addBadPhones = () => {
        let newField = {badPhone: ''};
        if(inputBadPhones.length<5){
            setInputBadPhones([...inputBadPhones, newField])
        }
    }
    const addBadBank = () =>{
        let newField = {badBankNumber: ''};
        if(inputBadBankNumber.length<5){
            setInputBankNumber([...inputBadBankNumber, newField])
        }
    }
    const removeBadPhones = (index) =>{
        let data = [...inputBadPhones];
        if(data.length>1){
            data.splice(index, 1)
            setInputBadPhones(data)
        }
    }
    const removeBadBanks = (index) =>{
        let data = [...inputBadBankNumber];
        if(data.length>1){
            data.splice(index, 1)
            setInputBankNumber(data)
        }
    }
    const onSubmit = data => console.log(data);
    return (
    <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Registrar denuncia
                </h2>
            }>
            <Head>
                <title>Estafadores</title>
            </Head>
            <div className="py-12 fondo">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h3>Expediente: K - 0071 - {anio} - {numero} </h3>
                            <br />
                            <h1 className="font-semibold text-xl text-gray-800 leading-tight text-center">Ingrese los datos indicados para procesar la denuncia</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5" id="block1">
                                <div id="Column1">
                                <h1 className="font-semibold text-xl text-gray-800 leading-tight text-center">Datos de la víctima</h1>
                                <label htmlFor="cedula">Cédula: </label>
                                <select value={cedula} onChange={handleCedula}>
                                    <option value="E">E</option>
                                    <option value="V">V</option>
                                    <option value="J">J</option>
                                    <option value="G">G</option>
                                </select>
                                <input type="text" name="cedula" id="cedula" value={idNumber} {...register("idNumber")} maxLength={9} placeholder="Número de cédula" onChange={handleId} required />
                                <label htmlFor='name'>Nombre: </label>
                                <input type="text" name="name" id="name" value={name} {...register("name")} maxLength={50} onChange={handleName} placeholder="Nombre de la víctima" />
                                <label htmlFor="phone">Teléfono: </label>
                                <input type="text" name="phone" id="phone" value={phone} {...register("phone")} onChange={handlePhone} maxLength={11} placeholder="Número de teléfono" />
                                <label htmlFor="email">email: </label>
                                <input type="email" name="email" id="email" value={email} {...register("email")} onChange={handleEmail} placeholder='Correo electrónico'/>
                                <label htmlFor="facebook">Facebook: </label>
                                <input type="text" name="facebook" id="facebook" placeholder='Link del perfil' value={facebook} {...register("facebook")} onChange={handleFacebook} />
                                <label htmlFor="instagram">Instagram: </label>
                                <input type="text" name="instagram" id="instagram" placeholder='Usuario de instagram' value={instagram} {...register("instagram")} onChange={handleInstagram} />
                                <label htmlFor="twitter">Twitter: </label>
                                <input type="text" name="twitter" id="twitter" placeholder='Usuario de twitter' value={twitter} {...register("twitter")} onChange={handleTwitter} />

                                </div>
                                <div id="Column2">
                                    <label htmlFor="issueDate">Fecha del suceso:</label>
                                    <input type="date" name="issueDate" id="issueDate" value={date} {...register("date")} onChange={handleDate} />
                                    <label htmlFor="description">Descripción:</label>
                                    <textarea name="description" id="description" rows={10} cols={40} placeholder="Descripición detallada del hecho" value={description} {...register("description")} onChange={handleDescription} />
                                </div>
                            </div>
                            <h1 className="font-semibold text-xl text-gray-800 leading-tight text-center">Información del sospechoso</h1>
                            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5" id="block2">
                                <div id="Column3">
                                <h1 className="font-semibold text-lg text-gray-800 leading-tight text-center">Redes sociales</h1>
                                <label htmlFor="badFacebook">Facebook: </label>
                                <input type="text" name="badFacebook" id="" value={badFacebook} {...register("badFacebook")} />
                                </div>
                                <div id="Column4">
                                <h1 className="font-semibold text-lg text-gray-800 leading-tight text-center">Datos bancarios</h1>
                                <label htmlFor="badBankNumber">Número de Cuenta: </label>
                                {inputBadBankNumber.map((input,index)=>{
                                    return(
                                        <div key={index}>
                                            <input type="text" name="badBankNumber" placeholder='01021234567891011121' maxLength={20} value={input.badBankNumber} {...register("badBankNumber")} onChange={event =>handleBadBank(index,event)} />
                                            <button onClick={addBadBank}>+</button>
                                            <button onClick={() => removeBadBanks(index)}>-</button>
                                        </div>
                                    )
                                })}
                                
                                
                                <label htmlFor="phone">Teléfono: </label>
                                {inputBadPhones.map((input, index) => {
                                    return (
                                        <div key={index}>
                                        <input type="text" name="badPhone" value={input.badPhone} {...register("badPhone")} onChange={ event => handleBadPhone(index, event)} maxLength={11} />
                                        <button onClick={addBadPhones}>+</button>
                                        <button onClick={() => removeBadPhones(index)}>-</button>
                                        </div>
                                    )})}
                                <label htmlFor="badZelle">Zelle: </label>
                                <input type="email" name="badZelle" id="" value={badZelle} {...register("zelle")} onChange={handleBadZelle} placeholder="correo@zelle.com" />
                                
                                </div>
                            </div>
                            <button type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
  )
}

export default registrar