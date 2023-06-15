// YOUR CODE BELOW
// YOUR CODE BELOW
function zooInventory(array) {
    let inventory = [];
    for (let i = 0; i < array.length; i++) {
      let stri = " ";
      stri = array[i][1].join(" is ");
      array[i][1] = stri;
      stri = array[i].join(" the ");
      stri = stri + ".";
      inventory.push(stri);
    }
  
    return inventory;
  }
  //let name = [["Nemo", ["Fish", 5]]];
  let zoo = [["Bai Yun", ["panda", 26]]];
  
  console.log(zooInventory(zoo));
  