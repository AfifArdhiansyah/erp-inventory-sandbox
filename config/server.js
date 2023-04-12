const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;

const itemRoute = require('../app/routers/itemRoute');
const inventoryRoute = require('../app/routers/inventoryRoute');
const bomRoute = require('../app/routers/bomRoute');
const salesOrderRoute = require('../app/routers/salesOrderRoute');
const purchaseRequestRoute = require('../app/routers/purchaseRequestRoute');

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('INDEX'));
app.use('/item', itemRoute);
app.use('/inventory', inventoryRoute);
app.use('/bom', bomRoute);
app.use('/sales_order', salesOrderRoute);
app.use('/purchase_request', purchaseRequestRoute);

app.listen(port, () => console.log(`Server started on port ${port}`));