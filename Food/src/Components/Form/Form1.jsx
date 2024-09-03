import React, { useEffect } from 'react';
import './Form1.css'
const VismeForm = () => {
    useEffect(() => {
        // Create a new script element
        const script = document.createElement('script');

        // Set the script's source to the provided Visme script
        script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";

        // Append the script to the document body
        document.body.appendChild(script);

        // Clean up the script when the component is unmounted
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div className='visme-form-container'>
            {/* Visme Form Embed */}
            {/* <div
        className="visme_d"
        data-title="Untitled Project"
        data-url="vd6qp6xw-untitled-project?sidebar=true"
        data-domain="forms"
        data-full-page="false"
        data-min-height="600px"
        data-form-id="90450"
      ></div> */}
            <div class="visme_d" 
            data-title="Franchise Form" 
            data-url="vd6qp6xw-untitled-project" 
            data-domain="forms" 
            data-full-page="false"
            data-min-height="1000px"
            data-min-width="1000px" 
            data-form-id="90450"></div>
        </div>
    );
};

export default VismeForm;
