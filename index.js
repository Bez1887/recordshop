/* const low = require("lowdb"); */
/* const FileSync = require("lowdb/adapters/FileSync"); */
const express = require("express");

//-----------------------------------------------//
/* const adapter = new FileSync("db.json");
const db = low(adapter); */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//-----------------------------------------------//
const PORT = 3000;
//-----------------------------------------------//

/* db.defaults({ users: [], records: [] }).write(); // Ändere zu "users" und "records"

const createRecord = ({ id, title, artist, year, coverImage, price }) => {
  const newRecord = {
    id,
    title,
    artist,
    year,
    coverImage,
    price,
  };
  db.get("records").push(newRecord).write(); // Ändere zu "records"
  console.log("Eintrag erstellt:", newRecord);
}; */

app.get("/api/records", (req, res) => {
  /* const records = db.get("records").value(); */ // Ändere zu "records"
  console.log("test");
  res.status(200).json({ success: "true" });
});

app.post("/api/records", (req, res) => {
  const { artist } = req.body;
  /* createRecord(newRecord); // Verwende die createRecord-Funktion */
  console.log(req.body);
  res.status(201).json({ success: true, message: `created  ${artist}` });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
