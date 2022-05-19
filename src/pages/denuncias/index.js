import AppLayout from '@/components/Layouts/AppLayout';
import Head from 'next/head';
import Link from 'next/link';

const Denuncias = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Denuncias
                </h2>
            }>

            <Head>
                <title>Denuncias</title>
            </Head>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5">
                            <Link href="/denuncias/registrar">
                                <a>
                                <div class="rounded overflow-hidden shadow-lg enlaces">
                                    <img class="w-1/4 m-auto" src="/img/icons/denuncias/registrar.png" alt="Registrar nueva denuncia" />
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2 text-center">Registrar denuncia</div>
                                            <p class="text-gray-700 text-base">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                            </p>
                                        </div>
                                </div>
                                </a>
                            </Link>
                            <Link href="/denuncias/consultas">
                                <a>
                                <div class="rounded overflow-hidden shadow-lg enlaces">
                                    <img class="w-1/4 m-auto" src="/img/icons/denuncias/consultar.png" alt="Consultar denuncias" />
                                        <div class="px-6 py-4">
                                            <div class="font-bold text-xl mb-2 text-center">Consultar Expendientes</div>
                                            <p class="text-gray-700 text-base">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
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
        </AppLayout >
    )
}

export default Denuncias