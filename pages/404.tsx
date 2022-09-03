import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const ErrorPage: NextPage = () => {
  return (
    <main className="h-screen bg-cyan-700 flex items-center justify-center flex-col">
      <Image priority width="400" height="600" src="/error.svg" alt="error" />
      <h1 className="text-black text-center text-xl pb-4">
        Oops! This page does not exist... Yet!
      </h1>
      <Link href="/">
        <button className="text-white">Back to Home</button>
      </Link>
    </main>
  );
};

export default ErrorPage;
