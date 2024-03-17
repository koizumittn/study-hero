This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Setup
Create Next.js Application:
```bash
npx create-next-app web
```

Install Package:
```bash
npm i @nextui-org/react framer-motion @google-cloud/firestore
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Build Docker Image
Create Dockerfile.

Ref: [Dockerfile(vercel)](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)

Build image.

```bash
docker build -t web .
```

M1 Macを使用するとき
```bash
docker build --platform linux/amd64 -t web .
```

## Push Iamge to Registory

Create repository:

```bash
gcloud artifacts repositories create study-hero \
    --repository-format=docker \
    --location=asia-northeast1 \
    --async
```

Confirm Registry URL:
```bash
gcloud artifacts repositories describe study-hero --location=asia-northeast1
・・・
Registry URL: asia-northeast1-docker.pkg.dev/${GOOGLE_CLOUD_PROJECT}/study-hero
・・・
```

Upload image to container registry:

```bash
export GOOGLE_CLOUD_PROJECT=`gcloud config get core/project`
docker tag web asia-northeast1-docker.pkg.dev/${GOOGLE_CLOUD_PROJECT}/study-hero/web
docker push asia-northeast1-docker.pkg.dev/${GOOGLE_CLOUD_PROJECT}/study-hero/web
```

View image tags:

```bash
gcloud artifacts docker images list asia-northeast1-docker.pkg.dev/${GOOGLE_CLOUD_PROJECT}/study-hero
```

## Deploy to Cloud Run

```bash
gcloud run deploy study-hero-app \
    --image "asia-northeast1-docker.pkg.dev/${GOOGLE_CLOUD_PROJECT}/study-hero/web" \
    --region asia-northeast1 \
    --port 3000 \
    --allow-unauthenticated
```



## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## UI Components
Ref:[https://ui.shadcn.com/docs/components-json](https://ui.shadcn.com/docs/components-json)

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add table
```