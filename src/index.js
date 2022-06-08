import app from "./app.js";
import 'dotenv/config';
import connectDB  from "./database.js";

async function main() {

    const port = process.env.PORT || 3000
    
    await connectDB();

    app.listen(port, () => {
        console.log(`Listening on port ${port}`);
    });

}

main();