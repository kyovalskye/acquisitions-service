import app from "./app.js";

const PORT = process.PORT || 8000;

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}...`)
})