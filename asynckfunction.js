async function addNumbersAsync(num1, num2) {
    return new Promise((resolve, reject) => {
       
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            reject(new Error('Both arguments must be numbers'));
        } else {
           
            resolve(num1 + num2);
        }
    });
}


addNumbersAsync(5, 10)
    .then(result => {
        console.log('Result:', result);  
    })
    .catch(error => {
        console.error('Error:', error.message);
    });


addNumbersAsync(5, '10')
    .then(result => {
        console.log('Result:', result);  
    })
    .catch(error => {
        console.error('Error:', error.message);  
    });
