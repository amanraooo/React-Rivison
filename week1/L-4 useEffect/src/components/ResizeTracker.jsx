import React, { useEffect, useState } from 'react'

const ResizeTracker = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWidth(window.innerWidth);
        };
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      
    return (
        <div>
<p>width: {width}px</p>
        </div>
    )
}

export default ResizeTracker
