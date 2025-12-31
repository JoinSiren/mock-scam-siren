import React, { useEffect } from "react";

function IframeView({id="iFrame1"}) {
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
        src={"https://digital-2we.pages.dev"}
        title={'digitalarrest'}
        loading="mock"
        allowFullScreen
      />
    </div>
  );
}

export default IframeView;
