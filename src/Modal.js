import React from "react";

function Modal({ isVisible, errorMsg = null }) {
  if (isVisible) {
    return (
      <div id="modal">
        <div id="modal-content">
          {/* <h1>The form has been submitted successfully</h1> */}
          <h1 style={{ color: errorMsg ? "red" : "green" }}>
            {errorMsg != null
              ? errorMsg
              : "The form has been submitted successfully"}
          </h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;
