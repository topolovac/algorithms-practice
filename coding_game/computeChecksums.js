
function computeChecksums(bytes){
    const checksums = [];
    let next_header_index = bytes[0] + 1;
    let current_sum = 0;
    for(let i = 1; i < bytes.length;i++){
        if(i < next_header_index){
            current_sum += bytes[i];
        } else {
            checksums.push(current_sum);
            next_header_index += bytes[i] + 1;
            current_sum = 0;
        }
    }
    checksums.push(current_sum);
    const cs_8bitbased = checksums.map(chunk => chunk % 256);
    return cs_8bitbased;
}

module.exports = computeChecksums;