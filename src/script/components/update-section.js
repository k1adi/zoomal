class UpdateSection extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  set clickEvent(event){
    this._clickEvent = event;
    this.render();
  }

  set changeEvent(event){
    this._changeEvent = event;
    this.render();
  }

  get getLimit(){
    return this.querySelector('.update-limit').value;
  }

  render(){
    this.innerHTML = `
      <select class="update-limit">
        <option value="3">3</option>
        <option value="6" selected>6</option>
        <option value="9">9</option>
      </select>

      <button class="btn btn-refresh">Refresh Data</button>
    `;

    // Add event listener to select limit and button refresh data
    this.querySelector('.btn-refresh').addEventListener('click', this._clickEvent);
    this.querySelector('.update-limit').addEventListener('change', this._changeEvent);
  }
}

customElements.define('update-section', UpdateSection);