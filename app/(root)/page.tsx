import { UserButton } from '@clerk/nextjs'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <UserButton  afterSignOutUrl='/'/>
      <h2>hello</h2>
    </div>
  )
}

export default HomePage