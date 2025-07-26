import { proofOfWork } from "./proofOfWork";

const tx = [
  "Bob pays Alice 1 BTC",
  "Alice pays Charlie 0.5 BTC",
  "Charlie pays Dave 0.2 BTC",
  "Dave pays Eve 0.1 BTC",
  "Eve pays Frank 0.05 BTC",
  "Frank pays Grace 0.01 BTC",
];

// 1 hex zero = 4 bits
// 4 hex zeros = 16 bits
// 8 hex zeros = 32 bits

const zeros = 4; 

const result = proofOfWork(tx, zeros);

console.log("Nonce:", result.nonce);
console.log("Hash :", result.hash);
