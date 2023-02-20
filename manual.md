# NextJS Tutorial.

1. `pages` folder has an `api` folder which is used to store all the queries required for handling a database.

2. `app` folder is where we declare are pages.

3. To create a new `route / page` , a new folder with the required route name should be created and inside that folder will be the file which will contain the code that route.

4. Anything inside `layout.js` file will be consistent to all the page in our app, like how we need navbar to be present through out our application (atleast most of the time).

5. `head.js` is the regular head section which used to be in HTML file, used to add styles, meta-data, etc.

   - `head.js` when added to a `page` folder will serve as head for that specific page/route creating room for page specific customisation.
   - `head.js` is what the name of the file should be for it to work like head section, meaning it is name-sensitive.

6. We can add fonts from `google fonts`.

   - To add fonts, import them from `@next/fonts/google` and store them/it in a variable and add properties to that added font, like `weight` and `subsets`

   - Syntax:

   ```h
   import { Lobster } from '@next/font/google';

    const lobster = Lobster({
    weight: ['400'],
    subsets: ['latin'],
    });
   ```

7. `.env.local` file to add sensitive data (environment variables).

8. Since Next.JS is a server-side rendering framework,
   anytime we want client responding features, like event-handlers etc, we need to add `"use-client"` at the top of our file.
