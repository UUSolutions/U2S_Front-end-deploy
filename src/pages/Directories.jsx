// import React from 'react';

// Sample contributor data
const contributors = [
  {
    name: 'Deo Uwimpuhwe',
    role: 'Co-founder',
    bio: 'Very passionate about cutting-edge technologies',
    photo: '/images/Deo.png', // Place the image in your public/images folder
  },
  {
    name: 'Gustave Munezero Bwirayesu',
    role: 'Co-founder',
    bio: 'Very passionate about cutting-edge technologies',
    photo: '/images/Gustave.png',
  },
];

const Directories = () => {
  return (
    <div className="container mt-4">
      <h3 className="mb-4 text-center">Meet the Team</h3>
      <div className="row">
        {contributors.map((person, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img
                // src={person.photo}
                // className="card-img-top"
                // alt={person.name}
                // style={{ objectFit: 'cover', height: '300px' }}
                src={person.photo}
                className="img-fluid img-thumbnail"
                style={{ maxHeight: '200px', objectFit: 'contain' }}
                alt={person.name}
              />
              <div className="card-body">
                <h5 className="card-title">{person.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{person.role}</h6>
                <p className="card-text">{person.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Directories;