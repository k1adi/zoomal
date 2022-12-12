// Import lodash
import _ from 'lodash';

// Import custom element
import '../components/loader-animation.js';
import '../components/filter-wrapper.js';
import '../components/card-wrapper.js';
import '../components/update-section.js';

import DataAnimal from '../data/data-animal.js';

const main = () => {
  // Select element
  const loader = document.querySelector('loader-animation');
  const filterWrapper = document.querySelector('filter-wrapper');
  const filterName = filterWrapper.querySelector('#filterName');
  const filterType = filterWrapper.querySelector('#filterType');
  const cardWrapper = document.querySelector('card-wrapper');
  const updateSection = document.querySelector('update-section');

  // Async function to get data animal
  const getDataAnimal = async () => {
    try{
      // Get selected limit value
      const limit = updateSection.getLimit;
      // Get response from function getAnimal() at DataAnimal class 
      const result = await DataAnimal.getAnimal(limit);
      // Create new array with lodash that contains animal_type without duplicate value
      const animalType = _.uniq(_.map(result, 'animal_type'));
      // Change typeof key animal_type to array and added type 'All'
      result.map(data => data.animal_type = ['All', data.animal_type]);
      // Push new value 'All' to the beginning of an animalType array
      animalType.unshift('All');
      
      // Set value for DataAnimal class property
      DataAnimal.animal = result;
      DataAnimal.animalType = animalType;

      // Call function to render card animal and select type filter
      renderAnimal(result);
      renderAnimalType(animalType);
    } catch(err) {
      // If any error call function to render error
      renderErrorAnimal(err);
    }
  };

  // Call function when page is first loaded
  getDataAnimal();

  // Filter animal by name & type
  const filterDataAnimal = (filterValue) => {
    // Get data animal
    const getAnimal = DataAnimal.animal;
    // First, filter by name 
    const filterName = getAnimal.filter(data => _.lowerCase(data.name).includes(_.lowerCase(filterValue.name)));
    // Then filter by type
    const filterType = filterName.filter(data => data.animal_type.includes(filterValue.type));

    if(filterType.length){
      renderAnimal(filterType);
    } else {
      renderErrorAnimal('Ops, Animal not found');
    }
  };

  // Render select type with data
  const renderAnimalType = results => {
    filterWrapper.type = results;
  };

  // Render card with data
  const renderAnimal = results => {
    loader.removeAttribute('class');
    cardWrapper.animals = results;
  };

  // Render card error
  const renderErrorAnimal = message => {
    cardWrapper.renderError(message);
  };

  // Search animal name
  filterName.addEventListener('keydown', (evt) => {
    if(evt.key == 'Enter'){
      filterDataAnimal(filterWrapper.getValue);
    }
  });

  // Select filter animal type
  filterType.addEventListener('change', () => {
    filterDataAnimal(filterWrapper.getValue);
  });

  // Button refresh data
  updateSection.clickEvent = () => {
    loader.setAttribute('class', 'show');
    getDataAnimal();
  };

  // Select limit data 
  updateSection.changeEvent = () => {
    loader.setAttribute('class', 'show');
    getDataAnimal();
  };
};

export default main;