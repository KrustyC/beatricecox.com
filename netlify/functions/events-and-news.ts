import { Handler } from "@netlify/functions";
import { parse, isPast } from "date-fns";
import { jsonResponse } from "../shared/utils";
import { connect } from "../shared/mongodb-client";
import { HTTP_METHODS } from "../shared/variables";

const EVENTS_COLLECTION = "events";
const NEWS_COLLECTION = "news";
const NEWS_HEADLINE_COLLECTION = "news_headline";

async function get() {
  try {
    const client = await connect();

    if (!client) {
      throw new Error("Can not connect to DB");
    }

    // @TODO Only takes published events
    const fetchEvents = async () => {
      const events = await client
        .db(process.env.MONGO_DB_NAME)
        .collection(EVENTS_COLLECTION)
        .find({ isPublished: true })
        .toArray();

      return events.reduce(
        (acc, currentEvent) => {
          const date = parse(currentEvent.date.day, "dd/MM/yyyy", new Date());

          if (isPast(date)) {
            return {
              ...acc,
              pastEvents: [...acc.pastEvents, currentEvent],
              upcomingEvents: [...acc.upcomingEvents, currentEvent],
            } as any;
          }

          return {
            ...acc,
            upcomingEvents: [...acc.upcomingEvents, currentEvent],
            pastEvents: [...acc.pastEvents, currentEvent],
          } as any;
        },
        { pastEvents: [], upcomingEvents: [] }
      );
    };

    const fetchNews = client
      .db(process.env.MONGO_DB_NAME)
      .collection(NEWS_COLLECTION)
      .find()
      .toArray();

    const fetchNewsHeadline = client
      .db(process.env.MONGO_DB_NAME)
      .collection(NEWS_HEADLINE_COLLECTION)
      .find()
      .toArray();

    const [events, news, newsHeadline] = await Promise.all([
      fetchEvents(),
      fetchNews,
      fetchNewsHeadline,
    ]);

    return jsonResponse({
      status: 200,
      body: { events, news, newsHeadline: newsHeadline[0] || null },
    });
  } catch (error) {
    return jsonResponse({
      status: 500,
      body: {
        message: "Error fetching events and news, please try again later on.",
      },
    });
  }
}

const handler: Handler = async (event, context) => {
  if (event.httpMethod !== HTTP_METHODS.GET) {
    return jsonResponse({
      status: 405,
      body: { message: "Method not allowed" },
    });
  }

  return get();
};

export { handler };
