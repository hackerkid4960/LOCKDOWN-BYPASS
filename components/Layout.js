import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>LOCKDOWN BYPASS</title>
        <meta name="description" content="Secure file package" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  )
} 