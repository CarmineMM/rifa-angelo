import ZeaburLogo from '../assets/zeabur-logo.png'

const Acknowledgements = () => {
    return (
        <div className='absolute bottom-7 md:bottom-3 text-neutral text-center'>
            <p>¡Gracias de antemano por tu apoyo!</p>
            <p className='text-xs text-success flex gap-1 items-center'>
                <p>Agradecimientos a</p>
                <a className='underline flex' href="https://zeabur.com?referralCode=CarmineMM" target='_blank'><img src={ZeaburLogo} alt="" className='w-15 h-3' /></a>
                <p> y </p>
                <a href="https://github.com/" target='_blank' className='underline'>Carmine Maggio</a></p>
        </div>
    )
}

export default Acknowledgements
