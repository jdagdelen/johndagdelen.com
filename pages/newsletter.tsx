import Container from 'components/Container';
import Subscribe from 'components/Subscribe';

export default function Newsletter() {
  return (
    <Container
      title="Newsletter – John Dagdelen"
      description="News about machine learning, high throughput computing, and materials science. Updates on my personal projects and research."
    >
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          Newsletter
        </h1>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          My newsletter is a great look into what I'm working
          on and thinking about. I frequently share interesting articles
          I've read as well as updates on my personal projects and research.
        </p>
        <Subscribe />
      </div>
    </Container>
  );
}
