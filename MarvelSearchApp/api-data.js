// Declare variables that will be used in other scripts
const ts = new Date().getTime();
const publicKey = '93b7e39c5aedf05b7dd098e3512f8387';
const privateKey = '606672436d2a8a41be8c2fa48569f449d51df761';


// Generate the MD5 hash
const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
console.log(hash);


// const hashValue = '83f19a952a887fc7cd7c242fc930017e';