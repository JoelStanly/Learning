document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

let button = document.querySelector("button");
let text = document.querySelector("textarea");

// CamelCasing
const camel = () => {
  let values = text.value.split("\n");
  for (let [key, value] of values.entries()) {
    value = value.trim().toLowerCase().split("_");
    value = value[0] + value[1].replace(value[1][0], value[1][0].toUpperCase());
    value = value.padEnd(20, " ");
    console.log(`${value}${"✅".repeat(key + 1)}`);
  }
};

button.addEventListener("click", camel);
