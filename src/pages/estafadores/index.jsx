import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import * as React from 'react';

const estafadores = () => {
    const [cedula, setCedula] = React.useState('V');
    const handleChange = (event) => {
        setCedula(event.target.value);
    };
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Estafadores
                </h2>
            }>

            <Head>
                <title>Estafadores</title>
            </Head>
            <div className="py-12 fondo">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <h1 className="font-semibold text-xl text-gray-800 leading-tight text-center">Ingrese los datos según el tipo de búsqueda</h1>
                            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                                    <FormControl>
                                        <h1 className='font-semibold text-l'>Cédula de identidad</h1>
                                    <Stack spacing={2} direction="row" className="justificados">
                                        <InputLabel id="cedula-letter">
                                        </InputLabel>
                                        <Select
                                            labelId="cedula-letter-select"
                                            id="cedula-letter-select"
                                            value={cedula}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="V">V</MenuItem>
                                            <MenuItem value="E">E</MenuItem>
                                            <MenuItem value="J">J</MenuItem>
                                            <MenuItem value="G">G</MenuItem>
                                        </Select>
                                        <TextField                                         
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="12345678"
                                        inputProps={{ maxLength: 20, className:"altura", width: '100%' }}
                                    />
                                    <Button variant="contained boton fondo">Buscar</Button>
                                    </Stack>
                                    </FormControl>
                                    <FormControl>
                                        <h1 className='font-semibold text-l'>Número de cuenta bancaria</h1>
                                    <Stack spacing={2} direction="row" className="justificados" inputProps={{ width: '100%' }}>
                                        <TextField                                         
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="12345678"
                                        inputProps={{ maxLength: 20, className:"altura veinte" }}
                                    />
                                    <Button variant="contained boton fondo">Buscar</Button>
                                    </Stack>
                                    </FormControl>
                                    <FormControl>
                                        <h1 className='font-semibold text-l'>Usuario de Facebook</h1>
                                    <Stack spacing={2} direction="row" className="justificados" inputProps={{ width: '100%' }}>
                                        <TextField                                         
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="12345678"
                                        inputProps={{ maxLength: 60, className:"altura veinte" }}
                                    />
                                    <Button variant="contained boton fondo">Buscar</Button>
                                    </Stack>
                                    </FormControl>
                                    <FormControl>
                                        <h1 className='font-semibold text-l'>Usuario de Instagram</h1>
                                    <Stack spacing={2} direction="row" className="justificados" inputProps={{ width: '100%' }}>
                                        <TextField                                         
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="12345678"
                                        inputProps={{ maxLength: 60, className:"altura veinte" }}
                                    />
                                    <Button variant="contained boton fondo">Buscar</Button>
                                    </Stack>
                                    </FormControl>
                                    <FormControl>
                                        <h1 className='font-semibold text-l'>Usuario de Telegram</h1>
                                    <Stack spacing={2} direction="row" className="justificados" inputProps={{ width: '100%' }}>
                                        <TextField                                         
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="12345678"
                                        inputProps={{ maxLength: 60, className:"altura veinte" }}
                                    />
                                    <Button variant="contained boton fondo">Buscar</Button>
                                    </Stack>
                                    </FormControl>
                                    <FormControl>
                                        <h1 className='font-semibold text-l'>Perfil de MercadoLibre</h1>
                                    <Stack spacing={2} direction="row" className="justificados" inputProps={{ width: '100%' }}>
                                        <TextField                                         
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="12345678"
                                        inputProps={{ maxLength: 60, className:"altura veinte" }}
                                    />
                                    <Button variant="contained boton fondo">Buscar</Button>
                                    </Stack>
                                    </FormControl>
                                    <FormControl>
                                        <h1 className='font-semibold text-l'>Número de teléfono</h1>
                                    <Stack spacing={2} direction="row" className="justificados" inputProps={{ width: '100%' }}>
                                        <TextField                                         
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="12345678"
                                        inputProps={{ maxLength: 60, className:"altura veinte" }}
                                    />
                                    <Button variant="contained boton fondo">Buscar</Button>
                                    </Stack>
                                    </FormControl>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default estafadores