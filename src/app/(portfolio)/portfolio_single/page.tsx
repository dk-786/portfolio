'use client'
import Container from '@/components/common/Container'
import PageTitle from '@/components/common/PageTitle'
import ArrowImageBlock from '@/components/common/ArrowImageBlock'
import React from 'react'
import ProjectDetails from '../components/ProjectDetails'

const page = () => {
  return (
    <>
   <Container>
     <PageTitle
        title="Mobile application design"
        crumbs={[{ label: "Home" }, { label: "Mobile application design", active: true }]}
      />
      <div className='mt-20'>
      <ArrowImageBlock
            src="/user/1.jpg"
            alt="Product Mockup"
            width={1000}
            height={1000}
            sizes="(max-width: 1024px) 100vw, 800px"
          />
      </div>
      <ProjectDetails/>
   </Container>
   
   </>
  )
}

export default page