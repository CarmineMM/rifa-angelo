import React, { useCallback, useRef } from 'react'

const alreadyUsed: number[] = []

const NumberAvailable = () => {
    const modalRef = useRef<HTMLDialogElement | null>(null)

    const disponibleNum = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        modalRef.current?.showModal()
    }, [])

    const handleClickNum = useCallback((event: React.MouseEvent<HTMLButtonElement>, num: number) => {
        event.preventDefault()

        if (alreadyUsed.includes(num)) {
            return alert('El numero ya fue usado')
        }

        window.open(`https://wa.me/+584124413347?text=Compre el Numero *${num}* de la rifa de Angelo Camacho`, '_blank')
    }, [])

    return (
        <>
            <button className='btn btn-accent' onClick={disponibleNum}>Números disponibles</button>
            <dialog ref={modalRef} className="modal">
                <div className="modal-box text-base-content">
                    <h3 className="text-lg mb-5">Números Disponibles</h3>
                    <ul className='grid grid-cols-10 gap-2.5'>
                        {Array.from({ length: 100 }, (_, i) => i).map((num) => (
                            <li key={num}>
                                <button
                                    className={`hover:bg-base-300 transition cursor-pointer px-2 py-1 ${alreadyUsed.includes(num) ? 'bg-success-content text-base-200' : ''}`}
                                    onClick={(e) => handleClickNum(e, num)}
                                >{num < 10 ? `0${num}` : num}</button>
                            </li>
                        ))}
                    </ul>
                    <div role="alert" className="alert mt-3 justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="h-6 w-6 shrink-0 stroke-current">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Selecciona uno para registrarte en la Rifa
                    </div>
                    <div className="modal-action">
                        <button
                            className="btn"
                            onClick={(e) => {
                                e.preventDefault()
                                modalRef.current?.close()
                            }}
                        >Cerrar</button>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default NumberAvailable
