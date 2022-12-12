// Import spinner and broken image
import spinner from '../../img/spinner.svg';
import brokenImage from '../../img/broken-image.jpg';

// Import card-popup element
import './card-popup.js';

class CardItem extends HTMLElement{
  set card(card){
    this._card = card;
    this.render();
  }

  render(){
    // Set attribute data-id
    this.setAttribute('data-id', this._card.id);
    // Create element child
    this.innerHTML = `
      <div class="card-item-image">
        <img src="${spinner}" class="spinner">
      </div>
      <p class="card-item-name">${this._card.name}</p>
      <small class="text-muted">${this._card.latin_name}</small>
    `;

    // Select image element
    const image = this.querySelector('img');
    // Creates a new HTMLImageElement instance
    const downloadImage = new Image();

    // Update element
    const updateElem = (imageLink) => {
      // Update classList card-item element
      this.classList.add('cursor-pointer');
      this.classList.remove('cursor-loading');
      // Update attributes image element
      image.removeAttribute('class');
      image.setAttribute('src', imageLink);
      // Create new key for the card data
      this._card.image_result = imageLink;
    };

    // Check if image already load
    downloadImage.onload = () => {
      updateElem(this._card.image_link);
      image.setAttribute('alt', `${this._card.name} image`);
    };
    // Check if image failed to load
    downloadImage.onerror = () => {
      updateElem(brokenImage);
    };
    // Set image src from card data
    downloadImage.src = this._card.image_link;

    // Open card-popup when image success to load
    this.addEventListener('click', () => {
      if(this.classList.contains('cursor-pointer')){
        const cardPopup = document.querySelector('card-popup');
        cardPopup.detail = this._card;
        cardPopup.classList.add('show');
      }
    });
  }
}

customElements.define('card-item', CardItem);