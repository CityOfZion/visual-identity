import React from 'react'

export default () => (
    <div>
      <div class="modal fade in" id="DefaultModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Delete settings?</h4>
              <small>A description on something. For example deleting settings.</small>
            </div>
          <div class="modal-body text-center">
            <p><i className="fa fa-trash icon-large text-danger"></i></p>
            <p>Please confirm you want to delete the settings!</p>
          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
          <button type="button" class="btn btn-success" data-dismiss="modal">Save</button>
        </div>
      </div>
    </div>
  </div>
</div>
)
