let box = document.querySelector(".box");

export default function getData(data) {
  box.innerHTML = "";
  data.forEach((e) => {
    let div = document.createElement("div");

    let h1Name = document.createElement("h1");
    h1Name.innerHTML = e.username;

    let pAge = document.createElement("p");
    pAge.innerHTML = e.age;

    let pStatus = document.createElement("p");
    pStatus.innerHTML = e.status ? "Active" : "Inactive";
    div.append(h1Name, pAge, pStatus);
    box.append(div);
  });
}
