import React from 'react'

import data from '../package-list/data';

export default function PackageSingle({packageId}) {
  return (
    <div className='package-single'>
        <h1>{packageId}</h1>
    </div>
  )
}
