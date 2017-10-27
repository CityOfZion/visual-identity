import React from 'react'

export default () => (
  <div>
    <div className="col-md-12">
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li>
            <a href="" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li><a href="">1</a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li><a href="">4</a></li>
          <li><a href="">5</a></li>
          <li>
            <a href="" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
      <hr/>
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li>
            <a href="" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="active"><a href="">1</a></li>
          <li><a href="">2</a></li>
          <li><a href="">3</a></li>
          <li className="disabled"><a href="">4</a></li>
          <li><a href="">5</a></li>
          <li>
            <a href="" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)