export class Image {
  albumId;
  url;
  thumbnailUrl;

  constructor(albumId, url, thumbnailUrl) {
    this.albumId = albumId;
    this.url = url;
    this.thumbnailUrl = thumbnailUrl;
  }

  // private . add dom'elements "1+1+1+1"
  #insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    referenceNode.appendChild(newNode);
  }

  render() {
    const apiOutput = document.getElementById("content");

    //+card
    const createContainer = document.createElement("div");
    createContainer.classList.add("card");
    this.#insertAfter(apiOutput, createContainer);

    //+front
    const createCard = document.createElement("div");
    createCard.classList.add("card-vis");
    createCard.innerHTML = `<img src="${this.thumbnailUrl}">${this.albumId}. Album <br> Source: ${this.url}`;
    this.#insertAfter(createContainer, createCard);

    //get image <img src="${this.thumbnailUrl}">
    //get desc ${this.albumId}. Album <br> Source: ${this.url}
  }
}