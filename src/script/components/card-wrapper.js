// Import card item element
import './card-item.js';

// Import image error
import imageError from '../../img/undraw-image-error.svg';

class CardWrapper extends HTMLElement{
  set animals(animals){
    this._animals = animals;
    this.render();
  }

  connectedCallback(){
    // Looping card placeholders
    for(let i = 0; i < 6; i++){
      this.insertAdjacentHTML('beforeend', `
        <div>
          <div class="card-item-image">
            <div class="placeholder">
              <div class="animation"></div>
            </div>
          </div>
          
          <div class="card-name-placeholder">
            <div class="placeholder">
              <div class="animation"></div>
            </div>
          </div>
        </div>
      `);
    }
  }

  // Render card error
  renderError(message){
    const cardWrapper = document.querySelector('card-wrapper');

    // Remove child
    while(cardWrapper.firstChild){
      cardWrapper.removeChild(cardWrapper.firstChild);
    }

    // Create card error
    this.innerHTML = `
      <div class="card-error">
        <img src="${imageError}" class="card-error-img" alt="Image error">
        <p class="card-error-text">${message}</p>
      </div>
    `;
  }

  // Render card with data
  render(){
    const cardWrapper = document.querySelector('card-wrapper');

    // Remove child 
    while(cardWrapper.firstChild){
      cardWrapper.removeChild(cardWrapper.firstChild);
    }

    // Looping data
    this._animals.forEach(data => {
      // Create card-item element
      const cardItem = document.createElement('card-item');
      // Set default class
      cardItem.setAttribute('class', 'card-item cursor-loading');
      // Set data
      cardItem.card = data;
      // Append card-item to card-wrapper element
      this.appendChild(cardItem);
    });
  }
}

customElements.define('card-wrapper', CardWrapper);