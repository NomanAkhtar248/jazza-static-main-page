"use server";

export async function postOrder(prevState, queryData) {
  const orderId = queryData.get('orderId');
  console.log("order id", orderId)
  
}