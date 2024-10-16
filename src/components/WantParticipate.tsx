import { useRef } from 'react'
import PayPalLogo from '../assets/Paypal_2014_logo.png'
import BBVAProvincial from '../assets/BBVAprovincialbackground.webp'

export default function WantParticipate() {
    const modalRef = useRef(null)

    return (
        <>
            <button className='btn btn-success' onClick={() => modalRef.current?.showModal()}>Quiero participar</button>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box text-base-content">
                    <h3 className="text-lg">¡Rifa Solidaria <strong>Valor 2$!</strong></h3>
                    <p className="py-4 text-sm">Estamos rifando una <b>Limpieza Dental con la <a href="">OD Dayana Camacho</a></b> para cubrir los gatos de la operación de <b>Angelo Camacho</b>, que sufrió un accidente te transito y necesita un <b>Sistema de Tight Rope para la clavícula</b></p>
                    <p className='font-bold text-4xl mb-6'>Valor 2$</p>
                    <div className='grid md:grid-cols-2'>
                        <a className='flex flex-col items-center pr-3 border-r' href="mailto:jordanacamacho20@gmail.com" target='_blank'>
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
                        <p>Envía un WhatsApp a <a href="tel:0412-441-3347">0412-441-3347</a> con la captura</p>
                        <p className='text-center text-sm'>¡Gracias por tu apoyo!</p>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Cerrar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
