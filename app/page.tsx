import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl text-center space-y-8">

        <h1 className="text-4xl font-bold">
          BriefKompas
        </h1>

        <p className="text-xl">
          Maak in 10 minuten een juridisch gestructureerde bezwaarbrief.
        </p>

        <p className="text-gray-600">
          Geen juridisch advies. Wel een duidelijke, professioneel opgebouwde brief die serieus wordt genomen.
        </p>

        <div className="flex flex-col items-center gap-4">
          <Link
            href="/bezwaar"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Start mijn bezwaar
          </Link>

          <Link
            href="/woo"
            className="text-black underline hover:text-gray-600"
          >
            Of doe een WOO-verzoek
          </Link>
        </div>

      </div>
    </div>
  );
}