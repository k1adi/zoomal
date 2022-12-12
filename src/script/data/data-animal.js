import axios from 'axios';

class DataAnimal {
  constructor(){
    this._animal = '';
    this._animalType = '';
  }

  // Get data from api with parameter limit
  static getAnimal(limit){
    return axios.get(
      `https://zoo-animal-api.herokuapp.com/animals/rand/${limit}`
    ).then(response  => {      
      return response.data;
    }).then(result => {
      return Promise.resolve(result);
    }).catch(error => {
      return Promise.reject(error);
    });    
  }

  // Set animal property value
  set animal(data){
    this._animal = data;
  }

  // Get animal property value
  get animal(){
    return this._animal;
  }

  // Set animalType value
  set animalType(data) {
    this._animalType = data;
  }

  // Get animalType value
  get animalType(){
    return this._animalType;
  }
}

export default DataAnimal;