const taxRate = 0.1;

const tax = (price) => {
  return price * taxRate;
}

const calReorderPoint = (leadTime, safetyStock, averageDailySales) => {
  const reorderPoint = leadTime * averageDailySales + safetyStock;
  return reorderPoint;
};

const calTotalOrderCost = (orderQuantity, unitCost) => {
  const totalOrderCost = orderQuantity * unitCost + tax(orderQuantity * unitCost);
  return totalOrderCost;
}

module.exports = {
    calReorderPoint,
    calTotalOrderCost
}