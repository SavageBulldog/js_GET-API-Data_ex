import { PostApiService } from "./fetch.js";

const apiService = new PostApiService(
  "https://jsonplaceholder.typicode.com/photos"
);
apiService
  .getData()
  .then((result) => {
    console.log(result);
    result.forEach((images) => {
      images.render();
    });
  })
  .catch((err) => {});