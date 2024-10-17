import React, { useCallback, useMemo, useRef, useState } from 'react'
import { type NumberUsed } from './WantParticipate'

interface Props {
    numbersUsed: NumberUsed[]
}

const feedbackDefault = {
    className: '',
    message: 'Selecciona los números a adquirir en la rifa',
    loading: false,
}

const NumberAvailable = ({ numbersUsed }: Props) => {
    const modalRef = useRef<HTMLDialogElement | null>(null)
    const alreadyUsed = useMemo(() => numbersUsed.map(item => item.num) as number[], [numbersUsed])
    const [selectedNumbers, setSelectedNumbers] = useState<number[]>([])
    const [feedback, setFeedback] = useState(feedbackDefault);

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
        if (selectedNumbers.includes(num)) {
            setSelectedNumbers(prev => prev.filter(item => item !== num))
        } else {
            setSelectedNumbers(prev => [...prev, num])
        }
    }, [alreadyUsed, selectedNumbers])

    /**
     * Procesar los números
     */
    const processNumbers = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (selectedNumbers.length < 1) {
            setFeedback({
                className: 'alert-error',
                message: 'Primero seleccione uno o mas números',
                loading: false,
            });
            return
        }

        setFeedback({
            className: 'alert-info',
            message: 'Adjunte la referencia de pago en el WhatsApp',
            loading: true,
        });

        setTimeout(() => {
            window.open(`https://wa.me/+584124413347?text=Compre los Números *${selectedNumbers.join(', ')}* de la rifa de Angelo Camacho, para la *Limpieza Dental con la OD Dayana Camacho*`, '_blank');
            setFeedback(feedbackDefault);
        }, 800)
    }, [selectedNumbers])

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
                                        ${selectedNumbers.includes(num) ? 'bg-primary text-base-100' : 'hover:bg-base-300 '}
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
                        {selectedNumbers.length > 0 && (
                            <button className='btn btn-primary' onClick={processNumbers} disabled={feedback.loading}>
                                {feedback.loading ? (
                                    <>
                                        <span className="loading loading-spinner"></span>
                                        <span>Cargando</span>
                                    </>
                                ) : (
                                    <span>Procesar Números</span>
                                )}
                            </button>
                        )}
                        <button
                            className="btn"
                            type='button'
                            disabled={feedback.loading}
                            onClick={(e) => {
                                e.preventDefault()
                                modalRef.current?.close()
                                setSelectedNumbers([])
                                setFeedback(feedbackDefault);
                            }}
                        >{feedback.loading ? <span className='loading loading-spinner'></span> : 'Cerrar'}</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default NumberAvailable
