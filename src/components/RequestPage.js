import React from "react";
import "../styling/home-page-styling.css";

import blm from '../media/blm.png';

const RequestPage = () => (
  <div>
    <div class="row first-row">
      <div class="col-lg-3">
        <img src={blm} alt="BLM Logo" class="ml-5" />
      </div>
    </div>
  </div>
)

export default RequestPage