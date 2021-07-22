// import Movie from "./Movie.js";

function SetUp() {
  // let movie = new Movie("寂静之地").print();
  let movie = "寂静之地";

  let div = document.createElement("div");
  div.innerHTML = `电影：${movie}`;
  document.body.appendChild(div);
}

function useless() {
  console.log("tree-shaking please!");
}

// SetUp();

export default SetUp;
