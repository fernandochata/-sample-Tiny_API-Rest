import app from "./app.js";

import connectDB  from "./database.js";

async function main() {

    await connectDB();

    app.listen(3000, () => {
        console.log("Listening on port 3000");
    });

}

main();