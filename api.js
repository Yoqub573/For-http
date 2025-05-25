
export async function get() {
    try {
        let responce = await fetch(api)
        console.log(await responce.json());
    } catch (error) {
        console.error(error);
    }
}
