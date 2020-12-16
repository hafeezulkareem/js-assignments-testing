const posts = document.querySelector("#posts");

function getPosts() {
   const loader = `<div id="loader">loading...</div>`;
   posts.innerHTML = loader;
   fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
         // The API call was successful!
         if (response.ok) {
            return response.json();
         } else {
            return Promise.reject(response);
         }
      })
      .then(function (data) {
         // This is the JSON from our response
         const success = `<div id="success">Success</div>`;
         posts.innerHTML = success;
         console.log(data);
      })
      .catch(function (err) {
         // There was an error
         const error = `<div id="error">Something went wrong.</div>`;
         posts.innerHTML = error;
         console.warn("Something went wrong.", err);
      });
}
