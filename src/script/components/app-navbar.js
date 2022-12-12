class AppNavbar extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = '<p>Zoomal</p>';
  }
}

customElements.define('app-navbar', AppNavbar);
