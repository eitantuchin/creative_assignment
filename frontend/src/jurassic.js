import React from 'react';
import "bootstrap/dist/css/bootstrap.css";


function Jurassic() {
  return (
    <div className="container">
      <header className="mt-3 mb-5">
        <h1>Welcome to The Jurassic</h1>
        <p className="lead">This website aims to explore various aspects of the Jurassic period, including its atmosphere, 
        biosphere, temperature, and tectonics from the perspective of a time traveler.</p>
      </header>
      <section className="mb-5">
      <h2>General Description of the Jurassic Period</h2>
        <p>
          The Jurassic period, lasting from approximately 201 to 145 million years ago, is the second period of the Mesozoic Era and is known for its diverse and iconic life forms, including dinosaurs, marine reptiles, and early mammals. It follows the Triassic period and precedes the Cretaceous period.
        </p>
        <p>
          During the Jurassic, the supercontinent Pangaea began to break apart, leading to the formation of new continents and ocean basins. The climate was generally warmer and more humid than today, with lush forests covering much of the land.
        </p>
        <p>
          Dinosaurs thrived during this time, evolving into a wide range of species adapted to different ecological niches. Some of the most well-known dinosaurs, such as the Brachiosaurus, Stegosaurus, and Allosaurus, lived during the Jurassic period. You'll get a chance to look closer at those animals in other parts of the website.
        </p>
        <p>
          In addition to dinosaurs, the Jurassic saw the rise of marine reptiles like ichthyosaurs and plesiosaurs, as well as early flying reptiles known as pterosaurs. The flora of the Jurassic included ferns, cycads, and conifers, which formed the basis of terrestrial ecosystems.
        </p>
       
      </section>
      <img src="https://i.natgeofe.com/n/b84387cb-28f5-4611-a221-65ae275ae2e3/1028.jpg" alt="Jurassic Image" className="img-fluid" style={{ width: '50%', height: '50%'}} />
      <section>
        <h2>Student Info</h2>
        <p>Name: Eitan Tuchin</p>
        <p>Student netID: eitant18</p>
        <p>Email: eitant18@iastate.edu/eitantuchin@gmail.com</p>
      </section>
    </div>
  );
}

export default Jurassic;
