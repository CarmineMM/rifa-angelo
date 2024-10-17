import { useEffect, useRef, useState } from 'react'
import PayPalLogo from '../assets/Paypal_2014_logo.png'
import BBVAProvincial from '../assets/BBVAprovincialbackground.webp'
import NumberAvailable from './NumberAvailable'
import { firestore } from '../database/Firebase'
import { collection, getDocs } from "firebase/firestore";

export interface NumberUsed {
    num: number
    name: string
}

export default function WantParticipate() {
    const modalRef = useRef<HTMLDialogElement | null>(null)
    const [numbersUsed, setNumbersUsed] = useState<NumberUsed[]>([])

    useEffect(() => {
        const used = collection(firestore, "used");
        getDocs(used).then(res => {
            const numbersUsed: object[] = [];
            res.forEach(doc => {
                numbersUsed.push(doc.data());
            });
            setNumbersUsed(numbersUsed as NumberUsed[])
        });
    }, []);

    return (
        <>
            <button className='btn btn-success' type='button' onClick={() => modalRef.current?.showModal()}>Quiero participar</button>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box text-base-content">
                    <h3 className="text-lg">¡Rifa Solidaria <strong>Valor 2$!</strong></h3>
                    <p className="py-4 text-xs md:text-sm">Estamos rifando una <b>Limpieza Dental con la <a href="">OD Dayana Camacho</a></b> para cubrir los gatos de la operación de <b>Angelo Camacho</b>, que sufrió un accidente te transito y necesita un <b>Sistema de Tight Rope para la clavícula</b>.</p>
                    <p className='font-bold text-4xl mb-6'>Valor 2$</p>
                    <div className='grid md:grid-cols-2'>
                        <a className='flex flex-col items-center md:pr-3 md:border-r mb-4 md:mb-0' href="mailto:jordanacamacho20@gmail.com" target='_blank'>
                            <img src={PayPalLogo} alt="" className='w-20 mb-2' />
                            <h4 className='text-sm'>jordanacamacho20@gmail.com</h4>
                        </a>
                        <div className='flex flex-col items-center'>
                            <img src={BBVAProvincial} alt="" className='w-20 mb-2' />
                            <h4 className='text-sm'>0412-441-3347</h4>
                            <h4 className='text-sm'>C.I: 24.457.156</h4>
                        </div>
                    </div>
                    <div className='mt-6 text-center'>
                        <p className='text-sm md:text-base'>Selecciona el numero que hayas comprado en la rifa en <b>Seleccionar un número</b>:</p>
                        {/* <p className='text-center text-sm'>¡Gracias por tu apoyo!</p> */}
                    </div>
                    <div className="modal-action">
                        <form method="dialog" className='flex gap-3 flex-wrap'>
                            <a href='https://ouo.io/wbV16z' target='_blank' className='btn btn-accent'>¡Apoya con 1 Click!</a>
                            <NumberAvailable numbersUsed={numbersUsed} />
                            <button className="btn" onClick={() => modalRef.current?.close()}>Cerrar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
