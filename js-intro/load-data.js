// fetch

function loadData() {
  return new Promise(res => {
    setTimeout(() => res("Susi"), 2000)
  })
}

console.log("1")

const dataPromise = loadData();

console.log("2")
dataPromise.then(data => {
  console.log("In then 3")
  console.log("Daten wurden geladen", data);

  throw new Error("Daten konnten nicht geladen werden!");
//  return loadData();
}).then(data2 => {
  console.log("Daten in then-2", data2);
}).catch(err => {
  console.log("Fehler!")
})
  .finally( () => {
    // ...
  })

console.log("4")

// ....

