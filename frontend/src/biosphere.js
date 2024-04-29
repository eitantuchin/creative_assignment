import React, { useState, useEffect } from 'react';

function DinosaurForm() {
  const [selectedDinosaur, setSelectedDinosaur] = useState('');
  const [dinosaurInfo, setDinosaurInfo] = useState(null);

  useEffect(() => {
    const fetchDinosaurInfo = async () => {
      if (selectedDinosaur) {
        try {
          const response = await fetch(`http://localhost:8081/showDinos/${selectedDinosaur}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setDinosaurInfo(data);
        } catch (error) {
          console.error('Error fetching dinosaur info:', error);
          setDinosaurInfo(null);
        }
      }
    };

    fetchDinosaurInfo();
  }, [selectedDinosaur]);

  const handleChange = (event) => {
    setSelectedDinosaur(event.target.value);
  };

  const renderDinosaurCard = () => {
    if (!dinosaurInfo) return null;

    return (
      <div className="card mt-4">
        <img
          src={dinosaurInfo.image}
          className="card-img-top dino-image"
          alt={dinosaurInfo.name}
          style={{ width: '50%', height: '50%' }} 
        />
        <div className="card-body">
          <h5 className="card-title">{dinosaurInfo.name}</h5>
          <ul className="list-unstyled">
            <li><strong>Diet:</strong> {dinosaurInfo.diet}</li>
            <li><strong>Habitat:</strong> {dinosaurInfo.habitat}</li>
            <li><strong>Period:</strong> {dinosaurInfo.period}</li>
            <li><strong>Size:</strong> {dinosaurInfo.size}</li>
            <li><strong>Behavior:</strong> {dinosaurInfo.behavior}</li>
            <li><strong>Fossils:</strong> {dinosaurInfo.fossils}</li>
            <li><strong>Anatomical Features:</strong> {dinosaurInfo.anatomical_features}</li>
            <li><strong>Predators and Prey:</strong> {dinosaurInfo.predators_and_prey}</li>
            <li><strong>Extinction:</strong> {dinosaurInfo.extinction}</li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    
    <div className="container mt-5">
       <form>
        <div className="form-group">
          <h2 htmlFor="dinosaurSelect"><b>Select a Jurassic Animal to Learn About:</b></h2>
          <select className="form-control" id="dinosaurSelect" onChange={handleChange}>
            <option value="">Select...</option>
            <option value="Tyrannosaurus rex">Tyrannosaurus rex</option>
            <option value="Stegosaurus">Stegosaurus</option>
            <option value="Brachiosaurus">Brachiosaurus</option>
            <option value="Allosaurus">Allosaurus</option>
            <option value="Diplodocus">Diplodocus</option>
            <option value="Archaeopteryx">Archaeopteryx</option>
            <option value="Dunkleosteus">Dunkleosteus</option>
            <option value="Pteranodon">Pteranodon</option>
            <option value="Mosasaurus">Mosasaurus</option>
            <option value="Ichthyosaurus">Ichthyosaurus</option>
          </select>
        </div>
      </form>
      {renderDinosaurCard()}
        <header className="mt-3 mb-5">
        <h1>Jurassic Biosphere</h1>
      </header>
      <section className="mb-5">
        <h2>Observations as a Time Traveler</h2>
        <p>
          As I journey back to the Jurassic period, I find myself immersed in a vibrant and diverse biosphere unlike anything I've ever seen. Life flourishes in every corner of this ancient world, from the towering forests to the depths of the oceans.
        </p>
        <p>
          The Jurassic biosphere is dominated by the presence of dinosaurs, majestic creatures that roam the land in search of food and shelter. These giant reptiles come in all shapes and sizes, from the massive sauropods to the fearsome theropods that rule the top of the food chain.
        </p>
        <p>
          In addition to dinosaurs, the Jurassic biosphere is teeming with other forms of life. Ancient plants such as ferns, cycads, and conifers cover the land, providing food and habitat for a variety of herbivorous dinosaurs. Pterosaurs soar through the skies, while marine reptiles like ichthyosaurs and plesiosaurs rule the oceans.
        </p>
      </section>
      <section className="mb-5">
        <h2>Significance of Jurassic Biosphere</h2>
        <p>
          The Jurassic biosphere plays a crucial role in shaping the evolution of life on Earth. The abundance of plant life supports a diverse array of herbivorous dinosaurs, which in turn sustain populations of carnivorous predators. This intricate web of interactions shapes the balance of ecosystems and drives the evolution of species over time.
        </p>
        <p>
          Additionally, the presence of dinosaurs in the Jurassic biosphere has a profound impact on the structure of terrestrial ecosystems. These giant reptiles are apex predators, exerting top-down control on food chains and influencing the distribution and abundance of prey species.
        </p>
        <p>
          As a time traveler witnessing the Jurassic biosphere firsthand, I am awestruck by the complexity and diversity of life on Earth during this ancient era. It is a testament to the resilience and adaptability of life in the face of ever-changing environmental conditions.
        </p>
      </section>
      
    </div>
  );
}

export default DinosaurForm;
