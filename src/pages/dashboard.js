import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'
import Link from 'next/link'

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard de Estafas
                </h2>
            }>

            <Head>
                <title>CICPC Estafas</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            <Link href="/denuncias">
                                <a>
                                <div class="rounded overflow-hidden shadow-lg enlaces">
                                    <img class="w-1/2 m-auto" src="/img/icons/dashboard/denuncias.png" alt="Acceder a la sección de denuncias" />
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2 text-center">Denuncias</div>
                                            <p class="text-gray-700 text-base">
                                                Acceso a registrar y consultar denuncias existentes
                                            </p>
                                        </div>
                                </div>
                                </a>
                            </Link>
                            <Link href="/estafadores">
                                <a>
                                <div class="rounded overflow-hidden shadow-lg enlaces">
                                    <img class="w-1/2 m-auto" src="/img/icons/dashboard/estafadores.png" alt="Acceder a la sección de estafadores" />
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2 text-center">Estafadores</div>
                                            <p class="text-gray-700 text-base">
                                                Base de datos de estafadores registrados
                                            </p>
                                        </div>
                                </div>
                                </a>
                            </Link>
                            <Link href="/victimas">
                                <a>
                                <div class="rounded overflow-hidden shadow-lg enlaces">
                                    <img class="w-1/2 m-auto" src="/img/icons/dashboard/victima.png" alt="Acceder a la sección de víctimas" />
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2 text-center">Víctimas</div>
                                            <p class="text-gray-700 text-base">
                                                Registro de victimas de estafa
                                            </p>
                                        </div>
                                </div>
                                </a>
                            </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard
