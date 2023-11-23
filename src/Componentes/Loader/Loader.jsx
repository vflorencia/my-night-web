import React from 'react';
import "./Loader.css";


export default function Loader() {
  return (
    <div id="container">
        <label className="loading-title">Cargando ...</label>
        <span className="loading-circle sp1">
            <span className="loading-circle sp2">
                <span className="loading-circle sp3"></span>
            </span>
        </span>
    </div>
  )
}

