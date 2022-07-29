# Validate IP Address
### Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a valid IPv6 address or "Neither" if IP is not a correct IP of any type.

## IPv4 Address
An IPv4 address is valid if it satisfies the following conditions
 - It is in the form of 4 octets, seperated by dots. "192.168.1.1"
 - It does not contain leading zeroes.
 - Each octet falls within the range of 0 to 255 and only contains digits.

## IPv6 Address
An IPv6 address is valid if it satisfies the following conditions
 - It is in the form of 8 hextets, seperated by colons. "x1:x2:x3:x4:x5:x6:x7:x8"
 - 1 <= xi.length <= 4
 - xi is a hexadecimal string which may contain digits, lowercase English letter ('a' to 'f') and upper-case English letters ('A' to 'F').
 - Leading zeroes are allowed in xi.

 ## Examples

```
Input: "172.16.254.1"
Output: "IPv4
Explanation: This is a valid IPv4 address, return "IPv4".
```
```
Input: "2001:0db8:85a3:0:0:8A2E:0370:7334"
Output: "IPv6"
Explanation: This is a valid IPv6 address, return "IPv6".
```
```
Input: "256.256.256.256"
Output: "Neither"
Explanation: This is neither a IPv4 address nor a IPv6 address.
```
