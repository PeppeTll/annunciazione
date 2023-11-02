import Header from '@/components/header'
import Hero from '@/components/hero'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='relative flex flex-col justify-start items-center '>
      <Header />
      <Hero />
    </main>
  )
}
