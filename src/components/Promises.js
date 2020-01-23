new Promise(function(resolve, reject) { 
    setTimeout(function() {
        try {
            resolve(["Hello", "world", "!!!"]);
            // this is a service which throws an exception
            // throw { message: "Can't connect", number: 504 };
        } catch(error) {
            reject(error);
        }
    }, 3000)
})
.then(function(data) { console.log(data); return data; })
.then(function(data) {
    return new Promise(function(resolve) {
        let concatenatedString = "";
        for (index in data) {
            concatenatedString += data[index] + " ";
        }
        resolve(concatenatedString);
    });
})
.then(function(data) { console.log(data); return data; })
.catch(function(error) { console.log(error.number + ": " + error.message); })

//reject version ;
new Promise(function(resolve, reject) { 
    setTimeout(function() {
        try {
            resolve(["Hello", "world", "!!!"]);
            // this is a service which throws an exception
            // throw { message: "Can't connect", number: 504 };
        } catch(error) {
            reject(error);
        }
    }, 3000)
})
.then(function(data) { console.log(data); return data; })
.then(function(data) {
    return new Promise(function(resolve, reject) {
        let concatenatedString = "";
        for (index in data) {
            concatenatedString += data[index] + " ";
        }
        reject({ message: "Second service failed", number: 504 });
    });
})
.then(function(data) { console.log(data); return data; })
.catch(function(error) { console.log(error.number + ": " + error.message); })