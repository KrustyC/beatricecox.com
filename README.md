# beatricecox.com

This is the website for https://beatricecox.com a Web Designer based in London.

## Prerequisites

- [NodeJs](https://nodejs.org/en/) - v20+
- [Docker](https://docs.docker.com/) / this is only used if you want to pull up the local postgres using docker-compose, otherwise you can install postgres directly into your machin

## Getting Started

First of all make sur eyou have copied `.env` into `.env.local`, and updtated all the values according to your local values. Once that is done, make sure to run the postgres database with `docker-compose up`. On a different terminal now simply run `npm run dev` and the app will start on port 3000.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deploy on Vercel

This website is deployed and served through Vercel, any push on `master` will automatically trigger a deployment to the production website.
