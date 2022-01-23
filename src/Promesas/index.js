const somethingWillHapped = () => {
    return new Promise( (resolve, reject) => {
        if (true) {
           
            resolve('Hey!');
        } else {
            reject('Whoops!');
        }
    });
}


somethingWillHapped()
        .then(res => console.log(res))
        .catch(er => console.log(er))





