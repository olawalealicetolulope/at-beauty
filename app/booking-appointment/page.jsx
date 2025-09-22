import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import AppointmentForm from './AppointmentForm'


const page = async () => {
    const session = await auth()
    if (!session) {
        redirect("/auth/signin")
    }
  return (
    <main className='min-h-dvh'>
      <AppointmentForm session={session}/>
    </main>
  )
}

export default page