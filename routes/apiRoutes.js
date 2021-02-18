const tableData = require('../data/tableData');
const waitinglistData = require('../data/waitinglistData');

module.exports = (app) => {

    app.get('/api/tables', (req, res) => res.json(tableData));

    app.get('/api/waitlist', (req, res) => res.json(waitinglistData));

    app.post('/api/tables', (req, res) => {
        if (tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        } else {
            waitinglistData.push(req.body);
            res.json(false);
        }
    }
)};

