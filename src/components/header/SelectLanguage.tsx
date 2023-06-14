'use client'

export function SelectLanguage() {
  return (
    <button
      type='button'
      data-dropdown-toggle='language-dropdown-menu'
      className='inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer transition-colors duration-200 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white'
    >
      <svg
        className='w-5 h-5 mr-2 rounded-full'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 3900 3900'
      >
        <path
          fill='#b22234'
          d='M0 0h7410v3900H0z'
        />
        <path
          d='M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0'
          stroke='#fff'
          stroke-width='300'
        />
        <path
          fill='#3c3b6e'
          d='M0 0h2964v2100H0z'
        />
        <g fill='#fff'>
          <g id='d'>
            <g id='c'>
              <g id='e'>
                <g id='b'>
                  <path
                    id='a'
                    d='M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z'
                  />
                  <use
                    xlinkHref='#a'
                    y='420'
                  />
                  <use
                    xlinkHref='#a'
                    y='840'
                  />
                  <use
                    xlinkHref='#a'
                    y='1260'
                  />
                </g>
                <use
                  xlinkHref='#a'
                  y='1680'
                />
              </g>
              <use
                xlinkHref='#b'
                x='247'
                y='210'
              />
            </g>
            <use
              xlinkHref='#c'
              x='494'
            />
          </g>
          <use
            xlinkHref='#d'
            x='988'
          />
          <use
            xlinkHref='#c'
            x='1976'
          />
          <use
            xlinkHref='#e'
            x='2470'
          />
        </g>
      </svg>
      English (US)
    </button>
  )
}
