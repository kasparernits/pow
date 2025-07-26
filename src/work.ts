import { proofOfWork } from "./proofOfWork";

const tx = [
  "Bob pays Alice 1 BTC",
  "Alice pays Charlie 0.5 BTC",
  "Charlie pays Dave 0.2 BTC",
  "Dave pays Eve 0.1 BTC",
  "Eve pays Frank 0.05 BTC",
  "Frank pays Grace 0.01 BTC",
];

// Easy example (4 bits = 1 hex zero)
// Harder example (16 bits = 4 hex zeros)
const result = proofOfWork(tx, 3);

console.log("Nonce:", result.nonce);
console.log("Hash :", result.hash);
