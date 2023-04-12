class PurchaseRequest{
    constructor(){
        this.data = [];
    }

    addData = (data) => {
        this.data.push(data);
    }

    getData = () => {
        return this.data;
    }
}

module.exports = PurchaseRequest;