# beatricecox.com

This is the website for https://beatricecox.com a Web Designer based in London.

[![Netlify Status](https://api.netlify.com/api/v1/badges/c26bf3d2-7ba8-48a8-975a-d7916a8a021f/deploy-status)](https://app.netlify.com/sites/beatricecox/deploys)

## Prerequisites

- [NodeJs](https://nodejs.org/en/) - v16+
- [Docker](https://nodejs.org/en/) / this is only used if you want to pull up the local mongo using docker-compose, otherwise you can install mongo directly into your machin

## Getting Started

First, run the development server:

```bash
netlify dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## API

This project is making use of Netlify Functions to expose its API. All functions are kept inside `./netlify/functions`. Netlify automatically provision Lambda functions for each file inside the aforementioned folder.

### Deploy on Netlify

This website is deployed and served through netlify, any push on `master` will automatically trigger a deployment to the production website.
