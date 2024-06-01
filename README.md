## How to run server 
`clone the repo` <br />
`cd to project repo` <br />
`npm install` <br />
`node server.js` <br />

## OUTPUT
Output for prime numbers 
API :- /numbers/:numberId 
here numberId :- p = prime, e = even, f=fibonacci 

Test server api used
'http://20.244.56.144/test/evens';
'http://20.244.56.144/test/primes';
'http://20.244.56.144/test/fibonacci

![image](https://github.com/Tanya-DSU/ENG21CT0044_BE/assets/141429948/73ed5f35-2fcd-4294-8251-817724ce9e77)


Response 
![image](https://github.com/Tanya-DSU/ENG21CT0044_BE/assets/141429948/919af011-5669-4243-8bf5-8569ecec68fb)



## Note 
I have used local authtoken extracted from postman itself. After some time when we try get the AuthToken with old clientId and clientSecret, it is failing and the test server gives following error.
![image](https://github.com/Tanya-DSU/ENG21CT0044_BE/assets/141429948/b5b7cd50-aaf2-42ca-a602-235002bedfa2)

And if I try to register the client (which is only supposed to be done once)
![image](https://github.com/Tanya-DSU/ENG21CT0044_BE/assets/141429948/5692e682-7750-478a-9240-7b10de2fbbd5)



