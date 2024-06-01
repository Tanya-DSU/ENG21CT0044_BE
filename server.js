const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

let prevState = {
    numbers: [],
    WindowsPrevState: [],
    WindowsCurrState: [],
    avg: 0
};

const authApiUrl = 'http://20.244.56.144/test/auth';
const authPayload = {
    companyName: "testMart",
    clientID: "5c7a30ce-dff5-45f8-bb01-00695b605636",
    clientSecret: "IxPwIjgGDtdZvjFJ",
    ownerName: "Dummy",
    ownerEmail: "eng21ct0044@dsu.edu.in",
    rollNo: "eng21ct0044"
};
// should not paste here, instead use /testserver/test/auth to get auth token every time using authpayload but currently its not working as pointed out in readme.
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3MjI0Mjg1LCJpYXQiOjE3MTcyMjM5ODUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImNjNjRlM2JjLTI0ZjMtNGRjNS05ZGVmLTYzNWQ2OTMzZDhhNyIsInN1YiI6InNoYWt0YXdhdGRldmVuZHJhMTdAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoidGVzdE1hcnQiLCJjbGllbnRJRCI6ImNjNjRlM2JjLTI0ZjMtNGRjNS05ZGVmLTYzNWQ2OTMzZDhhNyIsImNsaWVudFNlY3JldCI6ImFvdU5hclBydkJtRFlIVUMiLCJvd25lck5hbWUiOiJUYW55YSIsIm93bmVyRW1haWwiOiJzaGFrdGF3YXRkZXZlbmRyYTE3QGdtYWlsLmNvbSIsInJvbGxObyI6ImVuZzIxY3QwMDQ0In0.upWLQenf8pTEvkL9xusHVh_NGBYjAXUg-9DSgLIoMg8";

app.get('/numbers/:numberId', async (req, res) => {
    const type = req.params.numberId;
    let internalApiUrl;

    switch (type) {
        case 'e':
            internalApiUrl = 'http://20.244.56.144/test/evens';
            break;
        case 'p':
            internalApiUrl = 'http://20.244.56.144/test/primes';
            break;
        case 'f':
            internalApiUrl = 'http://20.244.56.144/test/fibonacci';
            break;
        default:
            return res.status(400).send('Invalid type. Use "e" for even, "p" for prime, "f" for fibonacci.');
    }

    const params = {
        companyName: 'testMart',
        clientID: '71b6e1b2-eb9a-4f80-9c44-ca73fc9181e5',
        clientSecret: 'LhXynkeixpnDhIou',
        ownerName: 'Dummy',
        ownerEmail: 'shaktawatdevendra03@gmail.com',
        rollNo: 'eng21ct0044'
    };

    try {
        const internalResponse = await axios.get(internalApiUrl, {
            params: params,
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });

        const currentState = {
            numbers: internalResponse.data.numbers, 
            WindowsPrevState: prevState.WindowsCurrState,
            WindowsCurrState: internalResponse.data.numbers,
            avg: internalResponse.data.numbers.reduce((a, b) => a + b, 0) / internalResponse.data.numbers.length
        };

        const combinedNumbers = prevState.numbers.concat(currentState.numbers);
        if (combinedNumbers.length > 10) {
            currentState.numbers = combinedNumbers.slice(combinedNumbers.length - 10);
        } else {
            currentState.numbers = combinedNumbers;
        }

        prevState = currentState;

        console.log(internalResponse.data);
        res.json(currentState);
    } catch (error) {
        console.error('Error making API calls:', error);
        res.status(500).send('Error making API calls');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
