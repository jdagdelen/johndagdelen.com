import RSS from 'rss';
import { sanityClient } from 'lib/sanity-server';
import { indexQuery } from 'lib/queries';

export async function getServerSideProps({ res }) {
  const feed = new RSS({
    title: 'John Dagdelen',
    site_url: 'https://johndagdelen.com',
    feed_url: 'https://johndagdelen.com/feed.xml'
  });

  const allPosts = await sanityClient.fetch(indexQuery);
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://johndagdelen.com/blog/${post.slug}`,
      date: post.date,
      description: post.excerpt
    });
  });

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=1200, stale-while-revalidate=600'
  );
  res.write(feed.xml({ indent: true }));
  res.end();

  return {
    props: {}
  };
}

export default function RSSFeed() {
  return null;
}
