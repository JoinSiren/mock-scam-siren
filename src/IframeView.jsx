import React, { useEffect } from "react";

function IframeView() {
function resizeIFrameToFitContent( iFrame ) {
    iFrame.width  = iFrame.contentWindow.document.body.scrollWidth;
    iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
}

useEffect(() => {
    var iFrame = document.getElementById( 'iFrame1' );
    resizeIFrameToFitContent( iFrame );
}, []);
  return (
    <div style={{ width: "100%" }}>
      <iframe
        id={"iFrame1"}
        src={"https://digital-2we.pages.dev"}
        title={'digitalarrest'}
        loading="mock"
        allowFullScreen
      />
    </div>
  );
}

export default IframeView;
