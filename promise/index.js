const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sucesso!')
    }, 2000);
});

apiCall
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error);
    });