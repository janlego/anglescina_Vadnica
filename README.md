# LangCards

A language learning helper template.

## How to

1. Create a new repository from this template.
2. Add json files from the desired learning topics.
You can also checkout [sample file](https://github.com/samolego/LangCards/blob/page-source/src/cards/animals.json).
```json
[
    {
        "title": "Cow",
        "sound": null,
        "image": "smile.png"
    },
    {
        "title": "Bird",
        "sound": null,
        "image": null
    }
]
```
3. Add required images and sounds in `src/img` or `src/sounds` subfolders.
4. Declare the added json files in `src/cards/available.json` in order for them to show on the page.
5. Commit & push.
6. After enabling the GH page (in repository settings), your site will be available at https://<your_username>.github.io/RepositoryName
(you can view this example at https://samolego.github.io/LangCards).
