import React, { useCallback, useMemo, useRef, useState } from 'react'
import { type NumberUsed } from './WantParticipate'

interface Props {
    numbersUsed: NumberUsed[]
}

const NumberAvailable = ({ numbersUsed }: Props) => {
    const modalRef = useRef<HTMLDialogElement | null>(null)
    const alreadyUsed = useMemo(() => numbersUsed.map(item => item.num) as number[], [numbersUsed])
    const [preSelectedNumbers, setSelectedNumbers] = useState<number[]>([])
    const [feedback, setFeedback] = useState({
        className: '',
        message: 'Selecciona los números a adquirir en la rifa',
        loading: false,
    });

    /**
     * Click sobre el botón, para ver números disponibles
     */
    const disponibleNum = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        modalRef.current?.showModal()
    }, [])

    /**
     * Click sobre el numero de la rifa
     */
    const handleClickNum = useCallback((event: React.MouseEvent<HTMLButtonElement>, num: number) => {
        event.preventDefault()

        if (alreadyUsed.includes(num)) {
            return alert('El numero ya fue usado')
        }

        // window.open(`https://wa.me/+584124413347?text=Compre el Numero *${num}* de la rifa de Angelo Camacho`, '_blank')
        if (preSelectedNumbers.includes(num)) {
            setSelectedNumbers(prev => prev.filter(item => item !== num))
        } else {
            setSelectedNumbers(prev => [...prev, num])
        }
    }, [alreadyUsed, preSelectedNumbers])

    /**
     * Procesar los números
     */
    const processNumbers = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        setFeedback({
            className: 'alert-info',
            message: 'Adjunte la referencia de pago en el WhatsApp',
            loading: true,
        })

        setTimeout(() => {
            window.open(`https://wa.me/+584124413347?text=Compre los Números *${preSelectedNumbers.join(', ')}* de la rifa de Angelo Camacho, para la *Limpieza Dental con la OD Dayana Camacho*`, '_blank');
        }, 700)
    }, [preSelectedNumbers])

    return (
        <>
            <button className='btn btn-primary' onClick={disponibleNum}>Seleccionar un número</button>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box text-base-content overflow-hidden">
                    <h3 className="text-lg mb-5">Números Disponibles</h3>
                    <ul className='grid grid-cols-10 gap-2.5'>
                        {Array.from({ length: 100 }, (_, i) => i).map((num) => (
                            <li key={num}>
                                <button
                                    className={`
                                        transition cursor-pointer rounded px-2 py-1 
                                        ${alreadyUsed.includes(num) ? 'bg-success-content hover:bg-base-content text-base-200 tooltip' : ''}
                                        ${preSelectedNumbers.includes(num) ? 'bg-primary text-base-100' : 'hover:bg-base-300 '}
                                    `}
                                    onClick={(e) => handleClickNum(e, num)}
                                    data-tip={`Ocupado por: ${numbersUsed.find(item => item.num === num)?.name}`}
                                    type='button'
                                >{num < 10 ? `0${num}` : num}</button>
                            </li>
                        ))}
                    </ul>
                    <div role="alert" className={`alert mt-3 justify-center ${feedback.className}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 shrink-0 stroke-current hidden sm:block">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <p>{feedback.message}</p>
                    </div>
                    <div className="modal-action">
                        {setSelectedNumbers.length > 0 && (
                            <button className='btn btn-primary' onClick={processNumbers}>Procesar Números</button>
                        )}
                        <button
                            className="btn"
                            type='button'
                            onClick={(e) => {
                                e.preventDefault()
                                modalRef.current?.close()
                                setSelectedNumbers([])
                            }}
                        >Cerrar</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default NumberAvailable
