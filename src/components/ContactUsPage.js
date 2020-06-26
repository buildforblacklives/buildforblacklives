import React from 'react';

import blm from '../media/blm.png';

class ContactUsPage extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div class="row first-row">
          <div class="col-lg-3">
            <img src={blm} alt="BLM Logo" class="ml-5" />
          </div>
        </div>
      </div>
    );
  }
}

export { ContactUsPage };
