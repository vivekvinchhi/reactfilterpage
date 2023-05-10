import React from 'react';
import './styles.css';



const ListItem = ({}) => (
  <div>
 <div className='input-group'>
  <div className='clinicinfo'>
      <div className='doctor'>
        <div className='item1'>
          <img className='image' src='/images/dishes/DoctorIcon.png' alt='' />
          <h4 className='h4'>Dr. &nbsp; <p> vivek khatri </p></h4>
          <h4 className='add'><p>MD&nbsp;-&nbsp;Dermitologist,DNB&nbsp;(Dermitologist),DDV </p></h4>
          <h4 className='add'><p>We&nbsp;Are&nbsp;The&nbsp;Only&nbsp;One&nbsp;In&nbsp;This&nbsp;City </p></h4>
          <h4 className='add'><p>Sectot-23&nbsp;Oppsite&nbsp;Pathika&nbsp;Ashram <br />Gandhinagar &nbsp;-&nbsp;320016<br />Gujarat</p></h4>
        </div>
        <div className='item2'>
          <div className='grid-container'>
            <div className='description'>
              <h4 className='ss'>Description<p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '23px' }}>&nbsp;-&nbsp; Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia aliquid dolores culpa quam. Sit ratione cum, dolores accusantium labore dolor dolorem aliquam deserunt dignissimos, possimus blanditiis magnam necessitatibus. Blanditiis? </p></h4>
            </div>
            <div className='det'>
              <h4 id='mm'>Our Services</h4>
              <div className='grid-container'>
                <h4 className='add'>
                  <span class="material-symbols-outlined">
                    <img src="images/services/medical_services_FILL0_wght400_GRAD0_opsz40.png" alt="" />
                  </span>
                  <p className='par'>Medical Services</p></h4>

                <h4 className='add'>
                  <span class="material-symbols-outlined">
                    <img src="images/services/cardiology_FILL0_wght400_GRAD0_opsz48.png" alt="" />
                  </span>
                  <p className='par'>Cardiology</p>
                </h4>

                <h4 className='add'>
                  <span class="material-symbols-outlined">
                    <img src="images/services/home_health_FILL0_wght400_GRAD0_opsz48.png" alt="" />
                  </span>
                  <p className='par'>Home Health</p>
                </h4>
                <h4 className='add'>
                  <span class="material-symbols-outlined">
                    <img src="images/services/stethoscope_FILL0_wght400_GRAD0_opsz48 (1).png" alt="" />
                  </span>
                  <p className='par'>Stethoscope</p>
                </h4>
                <h4 className='add'>
                  <span class="material-symbols-outlined">
                    <img src="images/services/vaccines_FILL0_wght400_GRAD0_opsz48.png" alt="" />
                  </span>
                  <p className='par'>Vaccines</p>
                </h4>
                <h4 className='add'>
                  <span class="material-symbols-outlined">
                    <img src="images/services/ecg_FILL0_wght400_GRAD0_opsz48.png" alt="" />
                  </span>
                  <p className='par'>ECG</p>
                </h4>
                <h4 className='add'>
                  <span class="material-symbols-outlined">
                    <img src="images/services/orthopedics_FILL0_wght400_GRAD0_opsz48.png" alt="" />
                  </span>
                  <p className='par'>Orthopedics</p>
                </h4>
                <h4 className='add'>
                  <span class="material-symbols-outlined">
                    <img src="images/services/prescriptions_FILL0_wght400_GRAD0_opsz48.png" alt="" />
                  </span>
                  <p className='par'>Medical Prescriptionss</p>
                </h4>

              </div>
              <button id='button'>Book Apointment</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  </div>
  
);

export default ListItem;
