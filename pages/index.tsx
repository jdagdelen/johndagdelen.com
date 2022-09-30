import { Suspense } from 'react';
import Image from 'next/future/image';
import Link from 'next/link';

import Container from '../components/Container';
import BlogPostCard from '../components/BlogPostCard';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';
import LinkCard from '../components/LinkCard';
import PaperCard from 'components/PaperCard';

export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col-reverse sm:flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-1 text-black dark:text-white">
                John Dagdelen
              </h1>
              <h2 className="text-gray-700 dark:text-gray-200 mb-4">
                Computational Materials Science PhD Candidate at{' '}
                <span className="font-semibold">UC Berkeley</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-16">
                Using machine learning and natural language processing to discover and design new materials.
              </p>
            </div>
            <div className="w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 mr-auto">
              <Image
                alt="John Dagdelen"
                height={176}
                width={176}
                src="/avatar.jpg"
                sizes="30vw"
                priority
                className="rounded-full filter"
              />
            </div>
          </div>

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Top links
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Here are some links to guides I've written and other notable things.
          </p>
          <LinkCard
            href="https://efficientml.johndagdelen.com/"
            title="My Guide for efficient ML experiments"
          />
          <LinkCard
            href="https://twitter.com/jmdagdelen/status/1513058838248714244?s=20&t=l8y48U-nezGUSIJIaj3Xqw"
            title="My Twitter thread that went viral about my Google Brain internship"
          />
          <LinkCard
            href="https://scholar.google.com/citations?user=TiCS5FEAAAAJ&hl=en"
            title="My Google Scholar page"
          />
          {/* <LinkCard
            href="https://scholar.google.com/citations?user=TiCS5FEAAAAJ&hl=en"
            title="My advice for new egineering undergradutate students"
          /> */}
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/playlist?list=PL6bwFJ82M6FXgctyoWXqj7H0GK8_YIeF1"
            className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            Watch all videos
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a> */}
          <span className="h-16" />

          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
            Featured Publications/Projects
          </h3>
          <div className="flex gap-6 flex-col md:flex-row">
            <ProjectCard
              title="COVIDScholar: Search engine for COVID-19 research"
              gradient="from-[#D8B4FE] to-[#818CF8]"
              link="https://covidscholar.org/"
            />
            <ProjectCard
              title="MatScholar: Search engine for materials science research"
              gradient="from-[#D8B4FE] to-[#818CF8]"
              link="https://matscholar.com/"
            />
            <PaperCard
              title="Unsupervised word embeddings capture latent knowledge from materials science literature (Nature)"
              citations="577"
              gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
              link="https://www.nature.com/articles/s41586-019-1335-8"
            />
          </div>
          {/* <Link href="/blog"> */}
          <Link href="https://scholar.google.com/citations?user=TiCS5FEAAAAJ&hl=en">
            <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
              Read more papers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </a>
          </Link>

          <Subscribe />
        </div>
      </Container>
    </Suspense>
  );
}
