debugger;
for (let i = "hello"; i.length < 10; i = i + "p") {
  if (i === "hellopp") {
    continue;
  }
  console.log(i);
}
