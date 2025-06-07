About-my-Team
This is a Next.js project bootstrapped with create-next-app.

Getting Started
First, make sure you have Node.js installed on your machine

Second, open the terminal in your IDE and install the necessary dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Third, open the terminal in your IDE and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Warning

To work with the project, you need an .env file, which you can get from the
developers.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
    features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out
[the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the
[Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
from the creators of Next.js.

Check out our
[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more
details.

### Sanity

### Important files and folders

| File(s)                           | Description                                              |
| --------------------------------- | -------------------------------------------------------- |
| `sanity.config.ts`                |  Config file for Sanity Studio                           |
| `sanity.cli.ts`                   |  Config file for Sanity CLI                              |
| `/src/app/studio/[[...tool]].tsx` |  Where Sanity Studio is mounted                          |
| `/schemas`                        |  Where Sanity Studio gets its content types from         |
| `/plugins`                        |  Where the advanced Sanity Studio customization is setup |
| `/lib/api.ts`,`/lib/image.ts`     | Configuration for the Sanity Content Lake client         |

Storage For Images:

Storage 1 (Member):

- members

Storage 2 (Default):

- faq;
- services;
- portfolio;
- smachno;
