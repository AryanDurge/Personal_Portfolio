import React from 'react'

import Pic from '../images/cv_standard_placeholder.webp';
import Home from '../images/cv_modern_placeholder.webp';

export const Modal = () => {
  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <span className="close-button"></span>
          <div className="row padd-15">
            <h3>Please choose theme:</h3>
          </div>
          <div className="row padd-15">
            <div className="modal-item padd-15">
              <div className="modal-text">
                <h4>Standard</h4>
              </div>
              <div className="modal-item-inner shadow-dark">
                <div className="modal-img">
                  <a className="modal-cv-dark" href="images/AndrasE_Cv_Standard.pdf" target="_blank" rel="noopener noreferrer">
                    <img src={Pic} alt="cv-dark" />
                  </a>
                </div>
              </div>
            </div>
            <div className="modal-item padd-15">
              <div className="modal-text">
                <h4>Modern</h4>
              </div>
              <div className="modal-item-inner shadow-dark">
                <div className="modal-img">
                  <a className="modal-cv-light" href="images/AndrasE_Cv_Modern.pdf" target="_blank" rel="noopener noreferrer">
                    <img src={Home} alt="cv-light" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

