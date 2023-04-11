const runTimeOut = () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    return promise;
    // promise.then(() => {console.log('Time out!')})
};

let show = async () => {
    await runTimeOut();
    console.log('Time out!')
}
// runTimeOut();

show();