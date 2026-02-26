import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-2xl text-center space-y-8">
        <h1 className="text-4xl font-bold">BriefKompas</h1>

        <p className="text-xl">
          Maak snel een duidelijke bezwaarbrief of een WOO-verzoek, op basis van jouw informatie.
        </p>

        <div className="text-gray-700 space-y-2">
          <p>• Stap-voor-stap intake, geen juridisch jargon nodig.</p>
          <p>• Heldere opbouw die bestuursorganen herkennen.</p>
          <p>• Jij controleert en verzendt zelf.</p>
        </div>

        <div className="rounded-lg border p-4 text-left text-gray-700">
          <p className="font-medium text-black">Belangrijk</p>
          <p className="mt-1">
            BriefKompas geeft geen juridisch advies en garandeert geen uitkomst. Het is een schrijfhulp die jouw
            input structureert tot een conceptbrief.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <Link
            href="/bezwaar"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Start bezwaar
          </Link>

          <Link href="/woo" className="text-black underline hover:text-gray-600">
            Start WOO-verzoek
          </Link>
        </div>
      </div>
    </div>
  );
}