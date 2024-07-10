This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Route groups
similar routes ko hum group kar lety hain
jesy ke authentication ke login register forgot-password


if we change the folder name to (name) then folder name will not be in url


<!-- lec 14 layouts -->
a layout is a ui that is shared between multiple pages in a app
header and footer.

<!-- hum kisi b folder b layout.tsx create kar sakty hain. -->
<!-- is se wo our b partials hum render kar lain gay -->
agr hum ne kisi specific page pe layout lagana ho to ye kam ata.


page metadata takes precedence over layout, usefull in seo,

<!-- to show active links there is a usePathName hook lec20 -->

<!--23.  loading.tsx create kar dain gay, wo khudi react suspence ka kam kar de gi -->


<!-- you can create a custom request handlers for our routes using a feature called route handler -->
<!-- route handlers are great for making external api requests. -->
