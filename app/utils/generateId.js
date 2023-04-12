const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    const day = date.getDate();
    return `${year}${month}${day}`;
}

const generateIdItem = (type) => {
    switch(type){
        case 'finished good':
            return 'IJ' + Math.floor(1000 + Math.random() * 9000);
        case 'intermediete good':
            return 'IS' + Math.floor(1000 + Math.random() * 9000);
        case 'purchased':
            return 'IM' + Math.floor(1000 + Math.random() * 9000);
    }
}

const generateBomId = () => {
    return 'BOM' + Math.floor(1000 + Math.random() * 9000);
}

const generateSalesOrderId = () => {
    return 'SO' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
}

const generateSalesOrderDetailId = (salesOrderId) => {
    return salesOrderId + '0' + Math.floor(100 + Math.random() * 900);
}

const generatePurchaseRequestId = () => {
    return 'CR' + getDate() + '0' + Math.floor(100 + Math.random() * 900);
}

const generatePurchaseRequestDetailId = (purchaseRequestId) => {
    return purchaseRequestId + '0' + Math.floor(100 + Math.random() * 900);
}

module.exports = {
    generateIdItem,
    generateBomId,
    generateSalesOrderId,
    generateSalesOrderDetailId,
    generatePurchaseRequestId,
    generatePurchaseRequestDetailId
};