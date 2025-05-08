import React from 'react'
import Head from 'next/head'

const Heads = ({title}) => {
  return (
    <div>
         <Head>
           <title>{title}</title>
           <meta
             name="description"
             content="Best LED TV in India - The future of TV is here with LuminexTV. Get smart led tv 32 inch and have a look at our innovative range of OLED & Nanocell 4K LG TV to experience stunning images and colours."
           />
         </Head>
    </div>
  )
}

export default Heads