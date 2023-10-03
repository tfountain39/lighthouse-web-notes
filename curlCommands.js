// Practical Linux cURL Commands Cheatsheet

// Focus on 1-8

// 1. Downloading a single file
// Usage: curl -O <URL>
curl -O https://example.com/file.txt

// 2. Save the cURL output to a file
// Usage: curl -o <output_file> <URL>
curl -o output.txt https://example.com/file.txt

// 3. Fetch multiple files at a time
// Usage: curl -O <URL1> -O <URL2>
curl -O https://example.com/file1.txt -O https://example.com/file2.txt

// 4. Follow HTTP Location headers with -L option
// Usage: curl -L <URL>
curl -L https://example.com/redirecting_url

// 5. Continue/Resume a Previous Download
// Usage: curl -C - -O <URL>
curl -C - -O https://example.com/large_file.zip

// 6. Limit the Rate of Data Transfer
// Usage: curl --limit-rate <rate> -o <output_file> <URL>
curl --limit-rate 1M -o output.zip https://example.com/large_file.zip

// 7. Download a file only if it is modified before/after the given time
// Usage: curl --time-cond <time> -o <output_file> <URL>
curl --time-cond "2023-01-01" -o output.txt https://example.com/file.txt

// 8. Pass HTTP Authentication in cURL
// Usage: curl -u <username>:<password> <URL>
curl -u username:password https://example.com/protected/resource

// 9. Download files from FTP server
// Usage: curl -u <username>:<password> -O <ftp://server/file>
curl -u username:password -O ftp://ftp.example.com/file.txt

// 10. List/Download using Ranges
// Usage: curl -r <start>-<end> -o <output_file> <URL>
curl -r 0-999 -o output.txt https://example.com/large_file.mp4

// 11. Upload files to FTP Server
// Usage: curl -T <file_to_upload> -u <username>:<password> ftp://server/upload/
curl -T file_to_upload.txt -u username:password ftp://ftp.example.com/upload/

// 12. More Information using Verbose and Trace Option
// Usage: curl -v -o <output_file> <URL>
curl -v -o output.txt https://example.com/file.txt

// 13. Get Definition of a Word using DICT Protocol
// Usage: curl dict://dict.org/d:<word>
curl dict://dict.org/d:programming

// 14. Use Proxy to Download a File
// Usage: curl -x <proxy_server>:<port> -o <output_file> <URL>
curl -x proxy.example.com:8080 -o output.txt https://example.com/file.txt

// 15. Send Mail using SMTP Protocol
// Usage: curl --url smtps://<smtp_server>:<port> --ssl-reqd --mail-from <from_email> --mail-rcpt <to_email> -T <message_file>
curl --url smtps://smtp.example.com:465 --ssl-reqd --mail-from sender@example.com --mail-rcpt recipient@example.com -T message.txt