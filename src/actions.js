const inc = () => {
    return ({type: 'INC'})
};

const dec = () => {
    return ({type: 'DEC'})
};

const rnd = () => {
    let num = Math.floor(Math.random()*10);
    return ({type: 'RND', playload: num})
};

export {
    inc,
    dec,
    rnd
}
