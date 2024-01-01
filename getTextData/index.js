const postList = document.getElementById("postList");
const getButton = document.getElementById("getButton");
const request = async () => {
  try {
    const getData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const responce = await getData.json();
    responce.forEach((element) => {
      const title = document.createElement("h2");
      const paragraph = document.createElement("p");
      title.innerText = element.title;
      paragraph.innerText = element.body;
      postList.append(title);
      postList.append(paragraph);
    });
  } catch {
    (err) => console.log("Произошла ошибка", err);
  }
};
getButton.addEventListener("click", request);
