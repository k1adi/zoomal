class FilterWrapper extends HTMLElement{
  set type(type){
    this._type = type;
    this.render();
  }

  get getValue(){
    return {
      'name': this.querySelector('#filterName').value,
      'type': this.querySelector('#filterType').value
    };
  }

  // Add element input search by name and select type
  connectedCallback(){
    this.innerHTML = `
      <div class="filter-input">
        <input type="search" id="filterName" placeholder="Animal Name..." class="filter-control">
        <small>Press 'Enter' to start search</small>
      </div>
      <select class="filter-control filter-select" id="filterType">
        <option value="All">Type</option>
      </select>
    `;
  }

  // Update option select type
  render(){
    const selectType = this.querySelector('#filterType');
    // Remove child
    while(selectType.firstChild){
      selectType.removeChild(selectType.firstChild);
    }

    // Looping animal
    this._type.forEach(list => {
      selectType.insertAdjacentHTML('beforeend', `
        <option value="${list}">${list}</option>
      `);
    });
  }
}

customElements.define('filter-wrapper', FilterWrapper);