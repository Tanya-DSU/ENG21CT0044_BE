# Average calculator microservice

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


## Response 
We have to pass correct param 

![image](https://github.com/Tanya-DSU/ENG21CT0044_BE/assets/141429948/0af1f6cc-cce7-4a21-b59d-d657821667f1)

### First response 
![WhatsApp Image 2024-06-01 at 13 34 03_b41622a6](https://github.com/Tanya-DSU/ENG21CT0044_BE/assets/141429948/a70b1ff8-3f8f-4843-9425-f188873f6d6b)

### Second response
The previous state is similar to first response

![WhatsApp Image 2024-06-01 at 13 39 00_5f056b42](https://github.com/Tanya-DSU/ENG21CT0044_BE/assets/141429948/9a9fb376-92c0-4414-a223-97a4703f5105)






## Note 
I have used local authtoken extracted from postman itself. After some time when we try get the AuthToken with old clientId and clientSecret, it is failing and the test server gives following error.
![WhatsApp Image 2024-06-01 at 13 07 58_1b0c1774](https://github.com/Tanya-DSU/ENG21CT0044_BE/assets/141429948/bb30aa1a-5954-4af5-a525-42391d2a12a9)

And if I try to register the client (which is only supposed to be done once)
![image](https://github.com/Tanya-DSU/ENG21CT0044_BE/assets/141429948/5692e682-7750-478a-9240-7b10de2fbbd5)



