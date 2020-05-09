function getPosts() {
  fetch("https://aqialnews.000webhostapp.com/array-api/api/post/read.php")
    .then((res) => res.json())
    .then((data) => {
      posts = data.data;
      let list = document.getElementById("list");
      for (let i = 0; i < posts.length; i++) {
        let card = document.createElement("div");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let h5 = document.createElement("h5");
        card.className = "card";
        h2.textContent = posts[i].title;
        p.textContent = posts[i].id;
        h5.textContent = posts[i].name;
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(h5);
        list.appendChild(card);
      }
    })
    .catch(console.log);
}
function getUsers() {
  fetch("https://aqialnews.000webhostapp.com/array-api/api/user/read.php")
    .then((res) => res.json())
    .then((data) => {
      let users = document.getElementById("users");
      for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        let h5 = document.createElement("h5");
        card.className = "card";
        h2.textContent = data[i].name;
        p.textContent = data[i].id;
        h5.textContent = data[i].age;
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(h5);
        users.appendChild(card);
      }
    })
    .catch(console.log);
}
function getUsersWithPosts() {
  fetch(
    "https://aqialnews.000webhostapp.com/array-api/api/user/readWithPosts.php"
  )
    .then((res) => res.json())
    .then((data) => {
      let usersWithPosts = document.getElementById("usersWposts");
      for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        let ul = document.createElement("ul");
        card.className = "card";
        h2.textContent = "Name: " + data[i].name;
        h3.textContent = "Posts";
        let posts = data[i].posts;
        if (posts.length > 0) {
          for (let j = 0; j < posts.length; j++) {
            let li = document.createElement("li");
            li.textContent = posts[j].title;
            ul.appendChild(li);
          }
        } else {
          let li = document.createElement("li");
          li.className = "empty";
          li.textContent = "No posts found!";
          ul.appendChild(li);
        }
        card.appendChild(h2);
        card.appendChild(h3);
        card.appendChild(ul);
        usersWithPosts.appendChild(card);
      }
    })
    .catch(console.log);
}

getPosts();
getUsers();
getUsersWithPosts();
