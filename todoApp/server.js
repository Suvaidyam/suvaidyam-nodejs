const express = require('express');
const app = express();
const port = 3000;

// HTTP Methds: GET, POST, PUT, DELETE
app.get('/', (req, res) => {
    res.send('[GET] [Default] Hello World!')
});

app.post('/', (req, res) => {
    res.send('[POST] Hello World!')
})
app.get('/data', (req, res) => {
    return res.send('[GET] /data')
});
app.get('/data/:id', (req, res) => {
    return res.send('[GET] /data/:id')
});
app.get('/data/1/abc/dsd', (req, res) => {

})
app.get('/data/:id/:id2/:id3/:id4', (req, res) => {
    let query = req.query; // Methods: * // URL: /data?name=John&age=30
    let body = req.body; // Methods: POST, PUT
    let headers = req.headers; // Methods: *
    let params = req.params; // Methods: *

    console.log(query);
    console.log(body);
    console.log(headers);
    console.log(params);

    let data = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Joe' },
        { id: 4, name: 'Jack' }
    ]

    let newData = data.filter(f => f.name == query.name);

    return res.status(200).json(newData);
});



let APIs = require('./api/index');
app.use('/api', APIs);


app.use((req, res) => {
    res.status(404).json({ message: `[404] Not Found` });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


