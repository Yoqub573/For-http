import getData from "./dom.js";
let api = "https://6821ee2fb342dce8004c65e1.mockapi.io/dataUsers"

export async function get() {
    try {
        let responce = await fetch(api)
        getData(await responce.json());
    } catch (error) {
        console.error(error);
    }
}
async function delUser(id) {
  try {
    await fetch(`${api}/${id}`, {
      method: "DELETE",
    });
    get();
  } catch (error) {
    console.error(error);
  }
}
async function editUser(newUser, idx) {
  try {
    await fetch(`${api}/${idx}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newUser),
    });
    get();
  } catch (error) {
    console.error(error);
  }
}
async function check(e) {
  let newUser = {
    ...e,
    status: !e.status,
  };
  try {
    await fetch(`${api}/${e.id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newUser),
    });
    get();
  } catch (error) {
    console.error(error);
  }
}
async function addUser(user) {
  try {
    await fetch(api, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    });
    get();
  } catch (error) {
    console.error(error);
  }
}
async function searchUser(name) {
  try {
    let response = await fetch(`${api}?name=${name}`);
    let data = await response.json();
    getData(data);
  } catch (error) {
    console.error(error);
  }
}
async function changeStatus(status) {
  if (status != "All") {
    try {
      let response = await fetch(`${api}?status=${status=="Active"}`);
      let data = await response.json();
      getData(data);
    } catch (error) {
      console.error(error);
    }
  }
  else{
    get()
  }
}