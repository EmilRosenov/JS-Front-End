function visualizeLoadingBar(number) {
  if (number / 10 === 0) {
    console.log("0% [%..........]");
    console.log("Still loading...");
  }
  if (number / 10 === 1) {
    console.log("10% [%.........]");
    console.log("Still loading...");
  } else if (number / 10 === 2) {
    console.log("20% [%%........]");
    console.log("Still loading...");
  } else if (number / 10 === 3) {
    console.log("30% [%%%.......]");
    console.log("Still loading...");
  } else if (number / 10 === 4) {
    console.log("40% [%%%%......]");
    console.log("Still loading...");
  } else if (number / 10 === 5) {
    console.log("50% [%%%%%.....]");
    console.log("Still loading...");
  } else if (number / 10 === 6) {
    console.log("60% [%%%%%%....]");
    console.log("Still loading...");
  } else if (number / 10 === 7) {
    console.log("70% [%%%%%%%...]");
    console.log("Still loading...");
  } else if (number / 10 === 8) {
    console.log("80% [%%%%%%%%..]");
    console.log("Still loading...");
  } else if (number / 10 === 9) {
    console.log("90% [%%%%%%%%%.]");
    console.log("Still loading...");
  } else if (number / 10 === 10) {
    console.log("100% Complete!");
    console.log("[%%%%%%%%%%]");
  }
}

visualizeLoadingBar(0);
visualizeLoadingBar(10);
visualizeLoadingBar(100);
