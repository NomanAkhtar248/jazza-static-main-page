"use server"


export async function postContact(prevState, queryData) {
    const name = queryData.get('Name');
    console.log("name: ", name);
  }
  