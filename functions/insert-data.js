import "./database.js"
import { PostModel } from "./models.js"

import posts from "./posts.json" with { type: "json" }

PostModel.insertMany(posts).then(() => {
    console.log("Inserted")
}).catch(error => {
    console.error("failed to insert", error)
})