import Image from 'next/image'

import Head from 'next/head'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>XV da Bia</title>
      </Head>
      <Hero heading='Sugestões de Presente' message='XV da Bia' />
    </div>
  )
}
