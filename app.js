let money = [200, 100, 50, 20, 10, 5, 1];
let btn = document.querySelector("button");
let input = document.querySelector("input");
btn.addEventListener("click", () => {
  document.getElementById("result").innerHTML = "";
  let manat = Number(input.value);
  money.map((myMoney) => {
    let quantity = parseInt(manat / myMoney);
    if (quantity > 0) {
      let left = 0;
      manat = manat - quantity * myMoney;
      let div = document.createElement("div");
      div.style.position = "relative";
      div.style.height = "150px";
      div.style.marginBottom = "20px";
      for (let i = 0; i < quantity; i++) {
        let img = document.createElement("img");
        img.style.position = "absolute";
        img.src = `img/${myMoney}.jpg`;
        img.style.left = `${left}px`;
        left += 70;
        div.append(img);
      }
      document.getElementById("result").append(div);
    }
  });
});
