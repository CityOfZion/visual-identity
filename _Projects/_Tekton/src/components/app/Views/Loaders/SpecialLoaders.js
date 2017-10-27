import React  from 'react'
import IconSvgOpacity from './IconSvgOpacity'
import IconSvgScale from './IconSvgScale'

export default () => (
  <div>
    <div className="col-sm-6 col-md-4 margin-bottom-20">
      <div className="loader-container">
        <div className="demo loader rainbow-spinner">
        </div>
        <div className="loader-label"><code>.rainbow-spinner</code></div>
      </div>
    </div>
    <div className="col-sm-6 col-md-4 margin-bottom-20">
      <div className="loader-container">
        <div className="demo loader coz-loader-opacity">
          <IconSvgOpacity />
        </div>
        <div className="loader-label"><code>.coz-loader-opacity</code></div>
      </div>
    </div>
    <div className="col-sm-6 col-md-4 margin-bottom-20">
      <div className="loader-container">
        <div className="demo loader coz-loader-scale">
          <IconSvgScale />  
        </div>
        <div className="loader-label"><code>.coz-loader-scale</code></div>
      </div>
    </div>
  </div>  
)

