import React from 'react'
import gitmoodLogo from '@/images/gitmood-logo.svg'
import Image from 'next/image'

export const Logo: React.FC = () => (
  <Image src={gitmoodLogo} alt="Gitmood Logo" />
)
