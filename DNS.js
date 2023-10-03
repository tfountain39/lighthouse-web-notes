// DNS and Common DNS Record Types in JavaScript

// DNS (Domain Name System) is like the phonebook of the internet. It translates human-readable domain names (e.g., example.com) into IP addresses (e.g., 192.0.2.1) that computers use to identify each other on the network.

/* 
Common DNS Providers Amazon Route 53
CloudFlare
Verisign
EasyDNS
Azure DNS 
*/

// Common DNS Record Types:

// A (Address) Record: Maps a domain name to an IPv4 address.
const aRecordExample = {
  domain: "example.com",
  type: "A",
  address: "192.0.2.1",
};

// AAAA (IPv6 Address) Record: Maps a domain name to an IPv6 address.
const aaaaRecordExample = {
  domain: "example.com",
  type: "AAAA",
  address: "2001:0db8:85a3:0000:0000:8a2e:0370:7334",
};

// CNAME (Canonical Name) Record: Alias for another domain name (canonical name).
const cnameRecordExample = {
  domain: "www",
  type: "CNAME",
  alias: "example.com",
};

// MX (Mail Exchanger) Record: Specifies mail servers responsible for receiving email on behalf of the domain.
const mxRecordExample = {
  domain: "example.com",
  type: "MX",
  priority: 10,
  mailServer: "mail.example.com",
};

// TXT (Text) Record: Contains text information, often used for DNS-based validation, such as SPF records for email.
const txtRecordExample = {
  domain: "example.com",
  type: "TXT",
  text: "This is a sample text record.",
};

// NS (Name Server) Record: Identifies authoritative DNS servers for a domain.
const nsRecordExample = {
  domain: "example.com",
  type: "NS",
  nameServer: "ns1.example.com",
};

// PTR (Pointer) Record: Maps an IP address to a domain name (used in reverse DNS lookups).
const ptrRecordExample = {
  domain: "1.2.3.4",
  type: "PTR",
  pointer: "host.example.com",
};

// DNS is a critical part of the internet infrastructure, enabling domain name resolution and routing internet traffic. Understanding these common DNS record types helps manage domain configurations effectively.

console.log("DNS and Common DNS Record Types in JavaScript:");
console.log("A (Address) Record Example:", aRecordExample);
console.log("AAAA (IPv6 Address) Record Example:", aaaaRecordExample);
console.log("CNAME (Canonical Name) Record Example:", cnameRecordExample);
console.log("MX (Mail Exchanger) Record Example:", mxRecordExample);
console.log("TXT (Text) Record Example:", txtRecordExample);
console.log("NS (Name Server) Record Example:", nsRecordExample);
console.log("PTR (Pointer) Record Example:", ptrRecordExample);