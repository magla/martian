Gatsby was chosen because: `create-react-app` is not supported anymore, and next.js seemed like a bit of an overkill. I also saw that you guys use Gatsby for your website, so I decided to try it out (first time using it). I had some issues, but in general Gatsby served the purpose well. It's nice that it has SSR support.

I used Typescript cause it's now a normal part of my development. I wanted to write out a couple of jest tests for components, or Storybook, ran out of time. Also, I would Dockerize this code in future versions. The fuzzy search used can also be tweaked to show results exactly how we would expect it (if current params are not perfect).

The fetching of code from the server could be optimized further, with storing the posts and retrieving only the requested post from the store (instead of loading it again on the single post page). 

