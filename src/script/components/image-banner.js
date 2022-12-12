// Import image banner
import imageBanner from '../../img/banner.jpg';

class ImageBanner extends HTMLElement{
  connectedCallback(){
    // Get attribute value
    this.title = this.getAttribute('data-title');
    this.desc = this.getAttribute('data-desc');

    this.render();
  }

  render(){
    this.innerHTML = `
      <img src="${imageBanner}" alt="Banner Image" class="banner-img">
      <div class="banner-content">
        <h1 class="banner-title">${this.title}</h1>
        <p class="banner-text">${this.desc}</p>
      </div>
    `;
  }
}  

customElements.define('image-banner', ImageBanner);
