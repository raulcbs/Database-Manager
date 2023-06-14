'use client'

import { SelectLanguage } from './header/SelectLanguage'
import { Title } from './header/Title'
import { DropDown } from './header/DropDown'
import { ListOfLinks } from './header/ListOfLinks'

export function Header() {
  return (
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Title />
        <div className='flex items-center md:order-2'>
          <SelectLanguage />
          <DropDown />
        </div>
        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
          <ListOfLinks />
        </div>
      </div>
    </nav>
  )
}
