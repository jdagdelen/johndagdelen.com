import Link from 'next/link';
import Image from 'next/future/image';

import Container from 'components/Container';
import avatar from 'public/avatar.jpg';

export default function About() {
  return (
    <Container title="About – John Dagdelen">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              Twitter: <a href="https://twitter.com/jmdagdelen">@jmdagdelen</a>
            </li>
            <li>
              GitHub: <a href="https://github.com/jdagdelen">@jdagdelen</a>
            </li>
            <li>
              Website:{' '}
              <Link href="https://johndagdelen.com">
                <a>https://johndagdelen.com</a>
              </Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/johndagdelen/">
                https://www.linkedin.com/in/johndagdelen
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>John Dagdelen, PhD Candidate at UC Berkeley</p>
          <h3>Long, 3rd Person</h3>
          <p>
            John Dagdelen is a PhD candidate in the {' '}
            <a href="https://perssongroup.lbl.gov">Persson Group</a>, where
            he uses machine learning and natural language processing for 
            materials discovery and design. 
          </p>
          <h3>Education</h3>
          <p>
            Univeristy of California, Berkeley
          </p>
          <ul>
            <li>BSc Materials Science and Engineering, 2016</li>
            <li>MSc Materials Science and Engineering, 2019</li>
            <li>PhD Materials Science and Engineering, December 2022 (expected)</li>
          </ul>
          <h2>Headshots</h2>
          <div className="flex space-x-8">
            <a href="/avatar.jpg">
              <Image
                alt="John Dagdelen headshot"
                width={400}
                quality={100}
                src={avatar}
                className="rounded-md"
              />
            </a>
            {/* <a href="/avatar-bw.jpg">
              <Image
                alt="John Dagdelen headshot"
                width={400}
                quality={100}
                src={avatarBW}
                className="rounded-md"
              />
            </a> */}
          </div>
        </div>
      </div>
    </Container>
  );
}
