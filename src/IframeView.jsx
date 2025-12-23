import React from "react";

function IframeView() {
  return (
    <div style={{ width: "100%" }}>
      <iframe
        src={"https://digital.bitter-meadow-7522.workers.dev"}
        title={
          'digitalarrest'
        }
        loading="mock"
        allowFullScreen
      />
    </div>
  );
}

export default IframeView;
