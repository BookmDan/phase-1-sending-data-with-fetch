// // // Add your code here
function submitData(name, email) {
  const formData = {
    name: "Steve",
    email: "steve@steve.com",
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(formData),
  };

  console.log(configurationObject);
  return fetch("http://localhost:3000/users", configurationObject)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    // console.log(object);
    document.body.innerHTML = object.id;
  })
  .catch(function (error) {
    // alert("Bad things! Ragnarők!");
    // console.log(error.message);
    document.body.innerHTML = error.message;

  });
}
// const formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle",
// };

// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (object) {
//     console.log(object);
//   });
