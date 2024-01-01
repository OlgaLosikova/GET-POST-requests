const postList = document.getElementById("postList");
const createButton = document.getElementById("createButton");
const titlePost = document.getElementById("titlePost");
const textPost = document.getElementById("textPost");

const request = async () => {
  if (titlePost.value !== "" && textPost.value !== "") {
    try {
      const getData = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify({
            title: titlePost.value,
            body: textPost.value,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const responce = await getData.json();
      const title = document.createElement("h2");
      const paragraph = document.createElement("p");
      title.innerText = responce.title;
      paragraph.innerText = responce.body;
      postList.append(title);
      postList.append(paragraph);
    } catch {
      (err) => console.log("Произошла ошибка", err);
    }
  } else console.log("Введите заголовок и текст поста");
};
createButton.addEventListener("click", request);
