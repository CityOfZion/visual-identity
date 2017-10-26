import React from 'react'

export default () => (
  <div>
    <div className="col-md-12">
      <nav aria-label="...">
      <ul className="pager">
      <li><a href="">Previous</a></li>
      <li><a href="">Next</a></li>
      </ul>
      </nav>
  
      <nav aria-label="...">
        <ul className="pager">
          <li className="previous"><a href=""><span aria-hidden="true">&larr;</span> Newer</a></li>
          <li className="next"><a href="">Older <span aria-hidden="true">&rarr;</span></a></li>
        </ul>
      </nav>
  
      <nav aria-label="...">
      <ul className="pager">
        <li className="previous disabled"><a href=""><span aria-hidden="true">&larr;</span> Newer</a></li>
        <li className="next"><a href="">Older <span aria-hidden="true">&rarr;</span></a></li>
      </ul>
      </nav>
  
    </div>
  </div>
)