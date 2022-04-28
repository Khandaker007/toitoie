import React from 'react'

// COMPONENT
import PackageCard from '../../components/package-card/package-card.component'

// DATA
import packagesListData from './data'

import './package-list.style.scss'

export default function Package({collectPackageId}) {
  return (
    <div className='package-page'>
      <div className="search-container">
        <h1 className='search-container__heading'>search tour</h1>
        <input className='search-container__search-field' type="search" placeholder='Destination'/>
      </div>
      <div className="package-list-container">
        {
          packagesListData.map(data => (
            <PackageCard collectId={collectPackageId} key={data.id} data={data}/>
          ))
        }
      </div>
    </div>
  )
}
