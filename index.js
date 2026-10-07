import express from 'express';
import path from 'path';

const app = express();

app.use(express.static(path.join(process.cwd())));

app.set("view engine", "ejs");

app.get("/", (req, resp) => {
    resp.render("home");
});

app.get("/about", (req, resp) => {
    resp.render("about");
});

app.get("/work", (req, resp) => {
    resp.render("work");
});

app.get("/contact", (req, resp) => {
    resp.render("contact");
});

const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
