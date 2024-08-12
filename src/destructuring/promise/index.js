const apiCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Sucesso!')
        // reject('Erro!')
    }, 1000);
});

// apiCall
//     .then((response) => {
//         console.log(response)
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// console.log('Depois da promise...');

async function run() {
    try {
        const response = await apiCall;
        console.log(response)
        console.log('Depois da promise...');
    } catch (erro) {
        console.log(erro)
    }
}

run()