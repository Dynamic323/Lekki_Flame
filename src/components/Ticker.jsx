import React from 'react';

function Ticker() {
  const text = "JOLLOF · SUYA · PEPPER SOUP · OWAMBE CATERING · FRESH DAILY · ORDER ON WHATSAPP · ";
  return (
    <div className="w-full overflow-hidden bg-primary text-white py-3 whitespace-nowrap">
      <div className="inline-block animate-ticker">
        <div className="inline-block pr-12 font-mono font-medium tracking-wider">{text}</div>
        <div className="inline-block pr-12 font-mono font-medium tracking-wider">{text}</div>
      </div>
    </div>
  );
}
export default Ticker;