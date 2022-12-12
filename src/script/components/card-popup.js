class CardPopup extends HTMLElement{
  set detail(detail){
    this._detail = detail;
    this.render();
  }

  // Render modal
  render(){
    this.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <h1 class="modal-title">Animal Detail</h1>
          <span class="modal-close">✕</span>
        </div>

        <div class="modal-body">
          <div class="body-img">
            <img src="${this._detail.image_result}" alt="${this._detail.name}">
          </div>
          <div class="body-desc">
            <h2 class="body-title">${this._detail.name}</h2>
            <p class="text-muted">${this._detail.latin_name}</p>
            <p><b>Type</b> : ${this._detail.animal_type[1]}</p>
            <p><b>Lifespan</b> : ${this._detail.lifespan} years</p>
            <p><b>Active Time</b> : ${this._detail.active_time}</p>
            <p><b>Diet</b> : ${this._detail.diet}</p>
            <p><b>Habitat</b> : ${this._detail.habitat}</p>
            <p><b>Geo Location</b> : ${this._detail.geo_range}</p>
          </div>
        </div>
      </div>
    `;

    // Add event listener 'click' to close modal
    this.querySelector('.modal-close').addEventListener('click', () => {
      this.classList.remove('show');
    });
  }
}

customElements.define('card-popup', CardPopup);