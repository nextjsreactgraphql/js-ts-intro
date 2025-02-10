function loadData() {
  return new Promise(res => {
    setTimeout(() => res("Susi"), 2000)
  })
}

console.log("1")

// async/await

async function loadSusi() {
  console.log("2")
  try {
    const susi = await loadData();
    console.log("3 Daten", susi);
    const susiLiebslingsArtikel = await loadData();

    return susi;
  } catch (err) {
    // Fehler!
  }
}

// GEHT (SO) NICHT:
const susi = await loadSusi();

loadSusi().then(data => {
  // ....
})

console.log("4")