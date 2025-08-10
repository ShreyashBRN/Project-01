const blogs = [
    { id: 1, title: "First Blog", content: "Hello from Inkspire backend!" },
  { id: 2, title: "Second Blog", content: "Still no DB, just testing." }
]

const getAllBlogs = (req, res) => {
    res.send("sdjsid");
}



const createBlog = (req, res) => {
   const {title, content} = req.body;

}












module.exports = { getAllBlogs };