import express from "express";
// const express = require("express");
import sql from "./db.js";
import cors from "cors"

const app = express();

const data = [
    {"id": "1",
    "task": "Visit PAF HQ",
    "is_completed":true
    },
    {"id": "2",
    "task": "Meeting with Commander",
    "is_completed":false
    },
    {"id": "3",
    "task": "Flight line AW109 Maintenance",
    "is_completed":false
    },
    {"id": "4",
    "task": "Visit family house",
    "is_completed":true
    }
]

app.get("/", (req, res) => {
    res.send("Hello")
})

app.use(
    cors({
      origin: ["http://localhost:5173"],
    })
  );

app.get("/api/todos", (req, res) => {
    res.json(data)
})

app.listen(5173, () => {
    console.log("Server is running on port 5173")
});