import React from 'react';
import './styles/Skills.css';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

function Skills() {
  return (
    <section className="container my-5 animate__animated animate__fadeInRight">
      <h2>
        <EmojiObjectsIcon style={{ color: '#5b26d5', fontSize: 32, marginRight: 12, verticalAlign: 'middle' }} />
        Skills
      </h2>
      <div className="row">
        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow py-4">
            <img src="/assets/react.svg" alt="React" style={{ height: 36 }} />
            <h5 className="card-title mt-2">React</h5>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow py-4">
            <img src="/assets/laravel.svg" alt="Laravel" style={{ height: 36 }} />
            <h5 className="card-title mt-2">Laravel</h5>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow py-4">
            <img src="/assets/javascript.svg" alt="JavaScript" style={{ height: 36 }} />
            <h5 className="card-title mt-2">JavaScript</h5>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow py-4">
            <img src="/assets/python.svg" alt="Python" style={{ height: 36 }} />
            <h5 className="card-title mt-2">Python</h5>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow py-4">
            <img src="/assets/mysql.svg" alt="SQL" style={{ height: 36 }} />
            <h5 className="card-title mt-2">MySQL</h5>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow py-4">
            <img src="/assets/bootstrap.svg" alt="Bootstrap" style={{ height: 36 }} />
            <h5 className="card-title mt-2">Bootstrap</h5>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow py-4">
            <img src="/assets/figma.svg" alt="Figma" style={{ height: 36 }} />
            <h5 className="card-title mt-2">Figma</h5>
          </div>
        </div>
        <div className="col-md-3 col-6 mb-3">
          <div className="card text-center shadow py-4">
            <img src="/assets/canva.svg" alt="Canva" style={{ height: 36 }} />
            <h5 className="card-title mt-2">Canva</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;