import WantParticipate from './components/WantParticipate';
import primaryImg from './assets/WhatsApp Image 2024-09-19 at 5.16.25 PM.jpeg'
import secondaryImg from './assets/WhatsApp Image 2024-10-13 at 2.16.57 PM.jpeg'
import Counter from './components/Counter';

export default function App() {
  return (
    <main className='bg-gradient-to-t from-accent h-screen w-screen flex items-center justify-center flex-col relative'>
      <img src={primaryImg} alt="" className='rounded-3xl absolute top-7 left-7 h-32 md:h-52 -rotate-12' />
      <img src={secondaryImg} alt="" className='rounded-3xl absolute top-7 right-7 h-32 md:h-52 rotate-12' />
      <h3 className='text-xs text-secondary mt-8 md:mt-0'>Rifa para:</h3>
      <h1 className='text-center text-3xl mb-6'>¡Angelo Camacho!</h1>
      <div className='text-center'>
        <p className='text-secondary'>Número Ganador:</p>
        <Counter />
        <WantParticipate />
      </div>
      <div className='absolute bottom-3 text-neutral'>
        <p>¡Gracias de antemano por tu apoyo!</p>
      </div>
    </main>
  )
}
