new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("all good");
  }, 2000);
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  })
  .finally();
