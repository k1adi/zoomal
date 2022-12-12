class AppFooter extends HTMLElement{
  connectedCallback(){
    this.render();
  }

  render(){
    this.innerHTML = `
      <p>Made with ❤️ by Rizki Adi <span class="footer-emoji">🐢</span></p>
      <small>Submission Dicoding <a href="https://www.dicoding.com/academies/163" class="footer-link"> Fundamental Front-End </a> </small>
    `;
  }
}

customElements.define('app-footer', AppFooter);