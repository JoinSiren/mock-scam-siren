import React from "react";

function IframeView() {

  return (
    <div style={{ width: "100%" }}>
      <iframe
        src={"https://digital-2we.pages.dev"}
        title={'digitalarrest'}
        loading="mock"
        allowFullScreen
      />
    </div>
  );
}

export default IframeView;
