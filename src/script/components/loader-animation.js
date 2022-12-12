import loader from '../../img/loader.svg';

class LoaderAnimation extends HTMLElement{
  constructor(){
    super();
    this.shadowDOM = this.attachShadow({mode: 'open'});
  }
  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowDOM.innerHTML = `
      <img src="${loader}" alt="Loader animation">
    `;
  }
}

customElements.define('loader-animation', LoaderAnimation);