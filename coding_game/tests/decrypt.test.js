const decrypt = require("../decrypt");

describe("decodeMessage", () => {
  it("should decode Carol's message using Bob/Carol mapping", () => {
    const aliceClearText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const aliceCipherText = "BCDEFGHIJKLMNOPQRSTUVWXYZA";
    const bobClearText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const bobCipherText = "CDEFGHIJKLMNOPQRSTUVWXYZAB";
    const carolCipherText = "ZHOFRPH";

    const decodedMessage = decrypt(
      aliceClearText,
      aliceCipherText,
      bobClearText,
      bobCipherText,
      carolCipherText
    );

    expect(decodedMessage).toEqual("WELCOME");
  });
});
