import type { TimeOfDay as TimeOfDayType } from 'Landing/Hooks'

export const TimeOfDayIcons: { [key in TimeOfDayType]: React.ReactNode } = {
  night: (
    <svg className='h-5 w-5 transition-opacity group-hover:animate-pulse lg:h-7 lg:w-7 xl:h-8 xl:w-8' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <title>Night Colors</title>
      <path d='M28 17.05A12 12 0 1 1 14.95 4 9.33 9.33 0 0 0 28 17.05z' fill='currentColor' />
    </svg>
  ),
  dawn: (
    <svg className='h-5 w-5 transition-opacity group-hover:animate-pulse lg:h-7 lg:w-7 xl:h-8 xl:w-8' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <title>Sunrise Colors</title>
      <path d='M 5.33 24 Q 16 18.67 26.67 24' stroke='currentColor' strokeWidth='1.5' fill='none' strokeLinecap='round' />
      <circle cx='16' cy='16' r='4' fill='currentColor' />
      <line x1='16' y1='1.33' x2='16' y2='4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='6.19' y1='6.19' x2='7.52' y2='7.52' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='25.81' y1='6.19' x2='24.48' y2='7.52' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  ),
  morning: (
    <svg className='h-5 w-5 transition-opacity group-hover:animate-pulse lg:h-7 lg:w-7 xl:h-8 xl:w-8' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <title>Morning Colors</title>
      <path d='M 5.33 24 Q 16 18.67 26.67 24' stroke='currentColor' strokeWidth='1.5' fill='none' strokeLinecap='round' />
      <circle cx='16' cy='18.67' r='4' fill='currentColor' />
      <line x1='16' y1='1.33' x2='16' y2='4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='1.33' y1='16' x2='4' y2='16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='28' y1='16' x2='30.67' y2='16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='6.19' y1='6.19' x2='7.52' y2='7.52' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='25.81' y1='6.19' x2='24.48' y2='7.52' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  ),
  noon: (
    <svg className='h-5 w-5 transition-opacity group-hover:animate-pulse lg:h-7 lg:w-7 xl:h-8 xl:w-8' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <title>Noon Colors</title>
      <circle cx='16' cy='16' r='4' fill='currentColor' />
      <line x1='16' y1='1.33' x2='16' y2='4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='16' y1='28' x2='16' y2='30.67' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='1.33' y1='16' x2='4' y2='16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='28' y1='16' x2='30.67' y2='16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='6.19' y1='6.19' x2='7.52' y2='7.52' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='25.81' y1='6.19' x2='24.48' y2='7.52' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='6.19' y1='25.81' x2='7.52' y2='24.48' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='25.81' y1='25.81' x2='24.48' y2='24.48' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  ),
  afternoon: (
    <svg className='h-5 w-5 transition-opacity group-hover:animate-pulse lg:h-7 lg:w-7 xl:h-8 xl:w-8' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <title>Afternoon Colors</title>
      <circle cx='16' cy='16' r='4' fill='currentColor' />
      <line x1='16' y1='1.33' x2='16' y2='4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='16' y1='28' x2='16' y2='30.67' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='1.33' y1='16' x2='4' y2='16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='28' y1='16' x2='30.67' y2='16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='6.19' y1='6.19' x2='7.52' y2='7.52' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='25.81' y1='25.81' x2='24.48' y2='24.48' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  ),
  evening: (
    <svg className='h-5 w-5 transition-opacity group-hover:animate-pulse lg:h-7 lg:w-7 xl:h-8 xl:w-8' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <title>Evening Colors</title>
      <circle cx='16' cy='16' r='4' fill='currentColor' />
      <line x1='16' y1='1.33' x2='16' y2='4' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='1.33' y1='16' x2='4' y2='16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='28' y1='16' x2='30.67' y2='16' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='6.19' y1='6.19' x2='7.52' y2='7.52' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='25.81' y1='6.19' x2='24.48' y2='7.52' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  ),
  dusk: (
    <svg className='h-5 w-5 transition-opacity group-hover:animate-pulse lg:h-7 lg:w-7 xl:h-8 xl:w-8' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <title>Dusk Colors</title>
      <path d='M28 17.05A12 12 0 1 1 14.95 4 9.33 9.33 0 0 0 28 17.05z' fill='currentColor' />
      <line x1='21.33' y1='8' x2='23.33' y2='6' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
      <line x1='24' y1='13.33' x2='26.67' y2='13.33' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' />
    </svg>
  )
}

export default TimeOfDayIcons
