import React from 'react'
export const dynamic = 'force-dynamic';
export default function AppSSR() {
  return (
    <div>
      <section className='hero'>
        <div className='left_hero'>
               <h1 id="current-title">Mountain Landscape</h1>
                <p id="current-description">Majestic peaks covered in snow during golden hour</p>
        </div>
        <div className='right_hero'>
          <div className='item_hero'>
            <h5>cascading-waterfall</h5>
          </div>
      
        </div>
      </section>

    </div>
  )
}

