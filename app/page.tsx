
import Image from 'next/image'

import "@total-typescript/ts-reset";

import { roboto_mono,signika } from './fonts';

import styles from './page.module.css'
import variablesScss from './variables.module.scss';


export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Cormorant font test</h1>
        <h3 className={signika.className}>Signika local font</h3>
        <p className='text-cyan-600 font-bold underline'>
          Get started by editing&nbsp;
          <code className={styles.code} style={{color:variablesScss.primaryColor}}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={roboto_mono.className}>
            Docs <span>-&gt;</span>
          </h2>
          <p className={roboto_mono.className}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* set fonts as needed */}
          <h2 className={roboto_mono.className}>
            Templates <span>-&gt;</span>
          </h2>
          <p className={roboto_mono.className}>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={roboto_mono.className}>
            Deploy <span>-&gt;</span>
          </h2>
          <p className={roboto_mono.className}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
