import React from 'react'
import Menu from '../components/Menu'
import Title from '../components/Title'
import HeroBlog from '../components/HeroBlog'
import { MarqueeStrip } from '@/components/common/MarqueeStripProps'
import NewsBlog from '@/components/common/NewsBlog'

const page = () => {
  return (
    <>
        <Title/>
        <Menu/>
        <HeroBlog/>
        <div className="pt-30 mt-10 rounded-4xl">
       
        <MarqueeStrip text="NEWS" />
        <NewsBlog />
      </div>
    </>
  )
}

export default page