import React from 'react'
import useStyles from '../ForbiddenAccess/styles.css'

function ForbiddenAccess(data) {
    return (
        <div className="bodyAdmin">
            
            <div class="lock"></div>
<div className="message">
  <h1>Access to this page is restricted</h1>
  <p>Please check with the site admin if you believe this is a mistake.</p>
</div>
        </div>
    )
}

export default ForbiddenAccess
