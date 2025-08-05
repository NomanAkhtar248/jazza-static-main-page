"use server";

export async function postRefund(prevState, queryData) {
  const name = queryData.get('Name');
  console.log("name", name)
 
}