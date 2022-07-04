import { Image } from "./pics.js";

export class PostApiService {
  #url; // API endpoint

  constructor(url) {
    this.#url = url;
  }
  
  async getData() {
    // API call --> returns Posts Array
    try {
      const response = await fetch(this.#url); // wait on server
      console.log(response);
      // check if successful
      if (response.ok) {
        // fetch data
        const data = await response.json(); // "translate" answer
        console.log(data);

        // create usable class from JSON
        const images = [];
        data.forEach((element) => {
          images.push(
            new Image(element.albumId, element.url, element.thumbnailUrl)
          );
        });
        return images;
      } else {
        throw new Error(`API error with HTTP status: ${response.status}`);
      }
      // re-throw error (use'catch')
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}