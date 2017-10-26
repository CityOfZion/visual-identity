import React from 'react'

export default () => (  
    <div>
      <div className="col-md-6">
        <div className="demo panel">
          <div className="panel-heading">
            Headings
          </div>
          <div className="panel-body">
            <p>Headings <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code> are all available. To mimic a heading's style the corresponding class (<code>.h1</code> to <code>.h6</code> can also be applied).</p>
            <table className="typography-table">
              <tbody>
                <tr>
                  <td className="type-heading">
                    <h1>h1. Lorem ipsum dolor.</h1>
                  </td>
                  <td className="type-info">font-size: 36px;<br/>font-weight: 600;</td>
                </tr>
                <tr>
                  <td className="type-heading">
                    <h2>h2. Lorem ipsum dolor.</h2>
                  </td>
                  <td className="type-info">font-size: 30px;<br/>font-weight: 600;</td>
                </tr>
                <tr>
                  <td className="type-heading">
                    <h3>h3. Lorem ipsum dolor.</h3>
                  </td>
                  <td className="type-info">font-size: 24px;<br/>font-weight: 600;</td>
                </tr>
                <tr>
                  <td className="type-heading">
                    <h4>h4. Lorem ipsum dolor.</h4>
                  </td>
                  <td className="type-info">font-size: 18px;<br/>font-weight: 600;</td>
                </tr>
                <tr>
                  <td className="type-heading">
                    <h5>h5. Lorem ipsum dolor.</h5>
                  </td>
                  <td className="type-info">font-size: 14px;<br/>font-weight: 600;</td>
                </tr>
                <tr>
                  <td className="type-heading">
                    <h6>h6. Lorem ipsum dolor.</h6>
                  </td>
                  <td className="type-info">font-size: 12px;<br/>font-weight: 600;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="demo panel">
          <div className="panel-heading">
            Secondary headings
          </div>
          <div className="panel-body">
            <p>For a secondary heading text use <code>&lt;small&gt; &lt;/small&gt;</code>. The <code>&lt;small&gt; &lt;/small&gt;</code> tag can also be combined with the <code>.h1</code> to <code>.h6</code> classes.</p>
            <table className="typography-table">
              <tbody>
                <tr>
                  <td className="type-heading">
                    <h1>h1. <small>Sit amet consectetur adipiscing.</small></h1>
                  </td>
                  <td className="type-info">font-size: 65%;<br/>font-weight: 300;</td>
                </tr>
                <tr>
                  <td className="type-heading">
                    <h2>h2. <small>Sit amet consectetur adipiscing.</small></h2>
                  </td>
                  <td className="type-info">font-size: 65%;<br/>font-weight: 300;</td>
                </tr>
                <tr>
                  <td className="type-heading">
                    <h3>h3. <small>Sit amet consectetur adipiscing.</small></h3>
                  </td>
                  <td className="type-info">font-size: 65%;<br/>font-weight: 300;</td>
                </tr>
                <tr>
                  <td className="type-heading">
                    <h4>h4. <small>Sit amet consectetur adipiscing.</small></h4>
                  </td>
                  <td className="type-info">font-size: 75%;<br/>font-weight: 300;</td>
                </tr>
                <tr>
                  <td className="type-heading">
                    <h5>h5. <small>Sit amet consectetur adipiscing.</small></h5>
                  </td>
                  <td className="type-info">font-size: 12px;<br/>font-weight: 300;</td>
                </tr>
                <tr>
                  <td className="type-heading">
                    <h6>h6. <small>Sit amet consectetur adipiscing.</small></h6>
                  </td>
                  <td className="type-info">font-size: 11px;<br/>font-weight: 300;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>  
)