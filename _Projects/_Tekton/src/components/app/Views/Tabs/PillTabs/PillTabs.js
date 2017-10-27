import React from 'react'

export default () => (
    <div>
      <div className="col-md-12">
        <ul className="nav nav-pills nav-tabs-outline" role="tablist">
          <li role="presentation" className="active"><a href="#home-pills1" aria-controls="home" role="tab" data-toggle="tab">Home</a></li>
          <li role="presentation"><a href="#profile-pills1" aria-controls="profile" role="tab" data-toggle="tab">Profile</a></li>
          <li role="presentation"><a href="#messages-pills1" aria-controls="messages" role="tab" data-toggle="tab">Messages</a></li>
          <li role="presentation"><a href="#settings-pills1" aria-controls="settings" role="tab" data-toggle="tab">Settings</a></li>
        </ul>
        <div className="tab-content nav-tabs-line">
            <div role="tabpanel" className="tab-pane active" id="home-pills1">Curabitur hendrerit nisl a lacus blandit, in euismod neque ullamcorper. Integer luctus id libero at laoreet. Proin at cursus magna, quis lacinia odio. Phasellus non gravida elit, a sollicitudin dolor. Cras volutpat urna nisl, commodo consequat massa finibus nec. Nunc scelerisque lorem massa, ut vestibulum tortor eleifend tincidunt. Nam ac dolor suscipit justo varius fringilla. Pellentesque a interdum ante.</div>
            <div role="tabpanel" className="tab-pane" id="profile-pills1">Phasellus vitae lacus a justo ultrices pulvinar id in risus. Cras interdum dolor scelerisque mi convallis, ac gravida arcu gravida. Pellentesque nec odio at elit rutrum lobortis sit amet ac arcu. Proin rutrum enim a lectus condimentum auctor. Integer efficitur finibus tempus. Donec a accumsan purus. Phasellus sed est diam. Curabitur in venenatis massa, eu tincidunt nibh. Sed non euismod ex, in aliquam ipsum. Aliquam vestibulum est nibh, a posuere urna euismod id.</div>
            <div role="tabpanel" className="tab-pane" id="messages-pills1">Nunc ac scelerisque nisl. Fusce ac orci sed sapien placerat rutrum venenatis et diam. Sed varius, nisi ac blandit fermentum, lacus ipsum efficitur augue, vel cursus mauris libero et sem. Aliquam efficitur tortor a pretium placerat. Phasellus efficitur semper laoreet.</div>
            <div role="tabpanel" className="tab-pane" id="settings-pills1">Mauris sed libero non urna vestibulum varius quis ut mi. Vivamus dignissim, ipsum ut condimentum sagittis, sapien lacus auctor lorem, molestie mattis tellus erat a purus. Etiam dignissim lacinia maximus. Donec sem leo, aliquet et nulla id, elementum pulvinar nunc. Donec et nulla nec leo accumsan maximus a vel magna.</div>
          </div>  
      </div>
    </div>
)