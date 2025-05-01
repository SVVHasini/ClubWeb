import React, { useState } from 'react';
import './application.css';

export const ApplicationForm = () => {
  const [page, setPage] = useState(1);

  return (
    <div className="application-form-container">
      <h2 className="form-title">Club Application Form</h2>

      <form className="form-body">
        {page === 1 && (
          <>
            <div className="form-group">
              <label>
                Full Name <span className="required">*</span>
              </label>
              <div className="input-group">
                <div><input type="text" placeholder="First Name" required /></div>
                <div><input type="text" placeholder="Last Name" required /></div>
              </div>
            </div>

            <div className="form-group">
              <label>Phone Number <span className="required">*</span></label>
              <input type="tel" placeholder="Phone Number" required />
            </div>

            <div className="form-group">
              <label>E-mail <span className="required">*</span></label>
              <input type="email" placeholder="ex: myname@example.com" required />
              <p className="helper-text">example@example.com</p>
            </div>

            <div className="form-group">
              <label>Gender <span className="required">*</span></label>
              <input type="text" placeholder="Gender" required />
            </div>
            <div className="form-group">
  <label>
    Select Branch & Year <span className="required">*</span>
  </label>
  <div className="input-group">
    <div>
      <select required>
        <option>Select Branch</option>
        <option>CSE</option>
        <option>ACSE</option>
        <option>ECE</option>
        <option>MECH</option>
        <option>CIVIL</option>
        <option>EEE</option>
        <option>AIDS</option>
        <option>ECM</option>
      </select>
    </div>
    <div>
      <select required>
        <option>Select Year</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
    </div>
  </div>
</div>


            <div className="form-group">
              <label>Select Club</label>
              <select>
                <option>Select Club</option>
                <option>GDG</option>
                <option>ALGOZENITH</option>
                <option>YUVA</option>
                <option>SAC</option>
                <option>DC</option>
                <option>MEDIA</option>
                <option>SPORTS</option>
                <option>CULTURALS</option>
                <option>ACM</option>
                <option>GFG</option>
              </select>
            </div>
          </>
        )}

        {page === 2 && (
          <>
            <div className="form-group">
              <label>Leadership Position? <span className="required">*</span></label>
              <select required>
                <option>Please Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="form-group">
              <label>Attend Club Meetings? <span className="required">*</span></label>
              <select required>
                <option>Please Select</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <div className="form-group">
              <label>Skills/Experience <span className="required">*</span></label>
              <textarea rows="2" required></textarea>
            </div>

            <div className="form-group">
              <label>Other Involvements <span className="required">*</span></label>
              <textarea rows="2" required></textarea>
            </div>

            <div className="form-group">
              <label>Preferred Communication <span className="required">*</span></label>
              <textarea rows="1" required></textarea>
            </div>
          </>
        )}

        <div className="button-group">
          {page > 1 && (
            <button type="button" onClick={() => setPage(page - 1)} className="btn-back">
              Back
            </button>
          )}
          <div className="button-right">
            <button type="button" className="btn-save">Save</button>
            {page === 1 ? (
              <button type="button" onClick={() => setPage(2)} className="btn-next">Next</button>
            ) : (
              <button type="submit" className="btn-submit">Submit</button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
