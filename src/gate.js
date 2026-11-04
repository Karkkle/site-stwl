// Password screen for the private preview.
//
// GATE_HASH is the SHA-256 of "shotwell:" + the password, so the password itself is not stored in the code.
// To create one:   printf '%s' 'shotwell:YOUR-PASSWORD' | shasum -a 256
// To launch the site publicly: set GATE_HASH to "" (an empty string) and the screen disappears.
//
// This is a courtesy lock, not security: the site is static, so anyone who reads the repository or
// the built files can still reach the content. Use it to keep casual visitors out of a preview.
export const GATE_HASH = 'daf897785eda4ace790ca8ef98670d5b2498da62fe939384e063176ebe568634'
