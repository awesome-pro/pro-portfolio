import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button';
import { ExternalLink, Star } from 'lucide-react';

function Portfolio() {
  return (
    <section className='my-12 flex items-center justify-center flex-col gap-4'>

    <h2 className='text-3xl font-bold text-blue-600 text-center'>
      Loved this Portfolio Template?
    </h2>
  <span className='flex items-center justify-between gap-10'>
    <p> Get it here for <strong className='text-blue-600'>FREE</strong>  </p>
    <Button asChild className='flex items-center gap-2'>
      <Link href={'https://github.com/awesome-pro/pro-portfolio'} target='_blank'>
      <ExternalLink className='w-6 h-6' />
      GitHub
      </Link>
    </Button>
  </span>

  <p className='text-xs'>
    Don&apos;t forget to star this repository
  </p>
      </section>
  )
}

export default Portfolio