import { Manrope } from '@next/font/google';

const manrope = Manrope({ weight: '800', subsets: ['latin'] })

export default function Home() {
  return (
    <div className={manrope.className}>
    </div>
  )
}
