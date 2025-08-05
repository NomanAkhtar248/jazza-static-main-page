"use server"


export async function postContact(prevState, queryData) {
    const name = queryData.get('Name');
    const email = queryData.get('email');
    console.log("name: ", name , email);
    if (name && email) {
      return "data submit ";
    } else {
      
      await new Promise(resolve => {
        setTimeout(resolve, 2000);
      });
      return {error:"Fail to submit, enter proper data"}
    }
  }
  