import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const victimas = () => {
    const d = new Date();
    let fecha = (d.getFullYear() - 2000);
    const [cedula, setCedula] = React.useState('V');
    const [year, setYear] = React.useState(fecha);

    const handleCedula = (event) => {
        setCedula(event.target.value);
    };
    const handleYear = (event) => {
        setYear(event.target.value);
    };
  return (
    <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Víctimas
                </h2>
            }>
            <Head>
                <title>Víctimas</title>
            </Head>

            <div className="py-12">
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
                                            onChange={handleCedula}
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
                                        <h1 className='font-semibold text-l'>Número de expediente</h1>
                                    <Stack spacing={2} direction="row" className="justificados" inputProps={{ width: '100%' }}>
                                    <Select
                                            labelId="year-letter-select"
                                            id="year-letter-select"
                                            value={year}
                                            onChange={handleYear}
                                        >
                                            <MenuItem value="20">20</MenuItem>
                                            <MenuItem value="21">21</MenuItem>
                                            <MenuItem value="22">22</MenuItem>
                                            <MenuItem value="23">23</MenuItem>
                                        </Select>
                                        
                                        <TextField                                         
                                        id="outlined-required"
                                        label="Required"
                                        defaultValue="12345678"
                                        inputProps={{ maxLength: 20, className:"altura veinte" }}
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

export default victimas