function decrypt(
  clearMsgAb,
  cipheredMsgAb,
  clearMsgBc,
  cipheredMsgBc,
  cipheredMsgCba
) {
  let result = "";
  for (let i = 0; i < cipheredMsgCba.length; i++) {
    const current_letter = cipheredMsgCba[i];
    const bc_index = cipheredMsgBc.indexOf(current_letter);
    const bc_letter = clearMsgBc[bc_index];

    const ab_index = cipheredMsgAb.indexOf(bc_letter);
    const ab_letter = clearMsgAb[ab_index];

    result += ab_letter;
  }
  return result;
}

module.exports = decrypt;
