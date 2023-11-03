import Who from '@/components/chi_siamo'
import Hero from '@/components/hero'
import Orari from '@/components/orari'
import Parroco from '@/components/parroco'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='relative flex flex-col justify-start items-center '>
      <Hero />
      <Orari />
      <Who />
      <Parroco />
    </main>
  )
}
