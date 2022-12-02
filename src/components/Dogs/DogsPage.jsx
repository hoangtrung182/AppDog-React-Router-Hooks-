import React from 'react'
import DogCart from './DogCart';
import './dogs.css';

const DogsPage = (props) => {
  const { allDogs } = props;
  return (
    <div>
        <section className="dogs-container">
            {
              allDogs.map((dog) => {
                return (
                  <div key={dog.id} >
                    <DogCart id={dog.id} 
                      name={dog.name} 
                      breed={dog.breed} 
                      desc={dog.description} 
                      price={dog.price} 
                      imageUrl={dog.imageUrl} />
                  </div>
                )
              })
            }
        </section>
    </div>
  )
}

export default DogsPage