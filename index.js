function hollowtriangle(n) {
  let print = "";
  for (let i = 1; i <= n; i++) {
    for (let j = i; j >= 1; j--) {
      if (i > 2 && i != n) {
        if (j > 1 && j < i) {
          print = print + " ";
        } else {
          print = print + "*";
        }
      } else {
        print = print + "*";
      }
    }
    console.log(print);
    print = "";
  }
}
hollowtriangle(6);
