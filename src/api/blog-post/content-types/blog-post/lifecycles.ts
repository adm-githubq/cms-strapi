import TurnDownService from "turndown";

export default {
  afterCreate(event: any) {
    const { result: r } = event;
    const turndown = new TurnDownService();
    const md = turndown.turndown(r.PostContentEditor);
    const data = {
      objectID: r.id,
      title: r.PostTitle,
      slug: r.PostAddress,
      isFeatured: r.isFeatured,
      thumbnail: r.Thumbnail.url,
      content: md.length > 9000 ? md.slice(0, 9000) : md,
    };
    fetch(
      `https://${process.env.ALGOLIA_APP_ID}.algolia.net/1/indexes/Q-ADR-Blogs`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: [
          ["X-Algolia-API-Key", process.env.ALGOLIA_ADMIN_KEY],
          ["X-Algolia-Application-Id", process.env.ALGOLIA_APP_ID],
        ],
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  },
  afterUpdate(event: any) {
    const { result: r } = event;
    const turndown = new TurnDownService();
    const md = turndown.turndown(r.PostContentEditor);
    const data = {
      objectID: r.id,
      title: r.PostTitle,
      slug: r.PostAddress,
      isFeatured: r.isFeatured,
      thumbnail: r.Thumbnail.url,
      content: md.length > 9000 ? md.slice(0, 9000) : md,
    };
    fetch(
      `https://${process.env.ALGOLIA_APP_ID}.algolia.net/1/indexes/Q-ADR-Blogs`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: [
          ["X-Algolia-API-Key", process.env.ALGOLIA_ADMIN_KEY],
          ["X-Algolia-Application-Id", process.env.ALGOLIA_APP_ID],
        ],
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  },
  afterDelete(event: any) {
    fetch(
      `https://${process.env.ALGOLIA_APP_ID}.algolia.net/1/indexes/Q-ADR-Blogs/${event.result.id}`,
      {
        method: "DELETE",
        headers: [
          ["X-Algolia-API-Key", process.env.ALGOLIA_ADMIN_KEY],
          ["X-Algolia-Application-Id", process.env.ALGOLIA_APP_ID],
        ],
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  },
};

