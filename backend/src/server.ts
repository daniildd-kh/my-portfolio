import express from "express";
import cors from "cors";
import fs  from 'node:fs/promises';
import path from 'path';

const PORT = 4000;

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}));

app.use(express.json());

app.get("/api/projects", async (req, res) => {
  try{
    const filePath = path.resolve(__dirname, '../projects.json')
    const data = await   fs.readFile(filePath, {encoding: 'utf-8'});
    const projects = JSON.parse(data);
    res.json(projects);
  }catch(error){
    res.status(500).send("Ошибка сервера" + error)
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
