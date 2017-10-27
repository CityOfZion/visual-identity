import React from 'react'
import Icon from './Icon'

export default () => (  
    <div>
      <div className="col-md-8 col-md-offset-2">
        <div className="panel">
          <div className="panel-body">
            <p>
              <a href="https://github.com/CodeSeven/toastr" target="_blank" rel="noopener noreferrer">toastr</a> is a Javascript library for non-blocking notifications. jQuery is required. The goal is to create a simple core library that can be customized and extended. <br/><em>If the demo doesnt work, please reload the page :)</em>
            </p>
            
            
              <hr/>
              <div className="col-md-4 text-center">
                <div className="row">
                  
                </div>               
              </div>
              <div className="col-md-12 margin-bottom-20">
                <div className="toaster-container">
                  <i className="toaster-icon">
                    <Icon />
                  </i>
                </div>
              </div>
              <div className="row text-center">
                <div className="col-md-3">
                  <button className="btn btn-info margin-bottom-20 que-info-toast btn-block">Info toast</button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-success margin-bottom-20 que-success-toast btn-block">Success toast</button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-warning margin-bottom-20 que-warning-toast btn-block">Warning toast</button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-danger margin-bottom-20 que-danger-toast btn-block">Danger toast</button>
                </div>
              </div>
            
            <div className="row">
              <div className="col-md-12">
                <div className="code panel">
                  <div className="panel-body">
                    Command: toastr[&#x22;success&#x22;](&#x22;Your toast message here&#x22;, &#x22;Your toast title&#x22;) <br/>
                    <br/>
                    toastr.options = &#123;<br/>
                    &nbsp;&nbsp;&#x22;closeButton&#x22;: true, <br/>
                    &nbsp;&nbsp;&#x22;debug&#x22;: false, <br/>
                    &nbsp;&nbsp;&#x22;newestOnTop&#x22;: false, <br/>
                    &nbsp;&nbsp;&#x22;progressBar&#x22;: true, <br/>
                    &nbsp;&nbsp;&#x22;positionClass&#x22;: &#x22;toast-bottom-right&#x22;, <br/>
                    &nbsp;&nbsp;&#x22;preventDuplicates&#x22;: false, <br/>
                    &nbsp;&nbsp;&#x22;onclick&#x22;: null, <br/>
                    &nbsp;&nbsp;&#x22;showDuration&#x22;: &#x22;300&#x22;, <br/>
                    &nbsp;&nbsp;&#x22;hideDuration&#x22;: &#x22;1000&#x22;, <br/>
                    &nbsp;&nbsp;&#x22;timeOut&#x22;: &#x22;5000&#x22;, <br/>
                    &nbsp;&nbsp;&#x22;extendedTimeOut&#x22;: &#x22;1000&#x22;, <br/>
                    &nbsp;&nbsp;&#x22;showEasing&#x22;: &#x22;swing&#x22;, <br/>
                    &nbsp;&nbsp;&#x22;hideEasing&#x22;: &#x22;linear&#x22;, <br/>
                    &nbsp;&nbsp;&#x22;showMethod&#x22;: &#x22;fadeIn&#x22;, <br/>
                    &nbsp;&nbsp;&#x22;hideMethod&#x22;: &#x22;fadeOut&#x22; <br/>
                    &#125; <br/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
)