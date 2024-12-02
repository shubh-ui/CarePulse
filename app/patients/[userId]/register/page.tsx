
import RegisterForm from '@/components/forms/RegisterForm'
import { getUser } from '@/lib/actions/patient.actions'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Ragister = async ({params: {userId}} : SearchParamProps) => {


  const user = await getUser(userId);

  if(!user) {
    return;
  }
    
  return (
    <div className="flex h-screen max-h-screen">

    {/* TODO: OTP Verification */}
    <section className="remove-scrollbar container">
      <div className="sub-container max-w-[800px] flex-1 flex-col py-10">
        <Image
          src="/assets/icons/logo-full.svg"
          height={1000}
          width={1000}
          alt="petient"
          className="mb-12 h-10 w-fit"
        />

        <RegisterForm user={user} />

        <p className="copyright py-12"> © 2025 CarePluse</p>
      </div>
    </section>
     <Image
      src="/assets/images/register-img.png"
      height={1000}
      width={1000}
      alt="pateint"
      className="side-img max-w-[390px]"
     />
  </div>
  )
}

export default Ragister