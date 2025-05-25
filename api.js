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
