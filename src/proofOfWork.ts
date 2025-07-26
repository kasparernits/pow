import { createHash } from "crypto";

function sha256(input: string): string {
  return createHash("sha256").update(input).digest("hex");
}

export function proofOfWork(
  data: string[],
  difficulty: number
): { nonce: number; hash: string } {
  let nonce = 0;
  const prefix = "0".repeat(difficulty);

  while (true) {
    const input = data + nonce.toString();
    const hash = sha256(input);

    if (hash.startsWith(prefix)) {
      return { nonce, hash };
    } else {
      // console.log(`Nonce: ${nonce}, Hash: ${hash}`);
    }
    nonce++;
  }
}
