var validIPAddress = function (queryIP) {
  var validateIpv4 = function (queryIP) {
    let ip = queryIP.split(".");
    if (ip.length !== 4) return false; //need 4 octets
    for (let i = 0; i < ip.length; i++) {
      if (
        parseInt(ip[i]) > 255 ||
        parseInt(ip[i]) < 0 ||
        isNaN(parseInt(ip[i]))
      )
        return false; //must be withing valid range and a number
      if (ip[i].charAt(0) === "0" && ip[i].length > 1) return false; //no leading zeroes
      for (const x of ip[i]) {
        if (isNaN(parseInt(x))) return false; //check for invalid chars
      }
    }
    return true;
  };
  var validateIpv6 = function (queryIP) {
    let ip = queryIP.split(":");
    if (ip.length !== 8) return false; //need 8 hextets
    for (let i = 0; i < ip.length; i++) {
      if (ip[i].length > 4 || ip[i].length === 0) return false; //valid length between 1 and 4
      for (const x of ip[i]) {
        if (isNaN(parseInt(x))) {
          //check for correct letter if not a digit
          if (!checkLetter(x)) return false;
        }
      }
    }
    return true;
  };
  var checkLetter = function (ch) {
    //check if letter is valid for hexadecimal between a and f, upper and lower
    if (
      ch.toUpperCase().charCodeAt(0) >= "A".charCodeAt(0) &&
      ch.toUpperCase().charCodeAt(0) <= "F".charCodeAt(0)
    )
      return true;
    return false;
  };

  if (validateIpv4(queryIP)) return "IPv4";
  if (validateIpv6(queryIP)) return "IPv6";
  return "Neither";
};
