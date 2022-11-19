import { MongoClient, ServerApiVersion } from "mongodb";

let cachedDb: MongoClient | undefined = undefined;

export async function connect() {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    throw new Error("Missing MONGO_URI environment variable");
  }

  console.log("PRIMACASSO");
  const client = new MongoClient(uri, {
    serverApi: ServerApiVersion.v1,
  });
  console.log("DOPO");

  if (cachedDb) {
    return cachedDb;
  }

  try {
    return client.connect().then((db) => {
      console.log("CONNECTED DIO PORCO");
      cachedDb = db;
      return cachedDb;
    });
  } catch (err) {
    console.error(" DIO MERDAAAaaaaaaaaa");
    console.error(err);
    return undefined;
  }
}
