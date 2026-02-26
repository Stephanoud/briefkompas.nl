export default function WooPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">WOO-verzoek</h1>

        <p className="text-gray-700">
          Hier komt straks de intake voor een WOO-verzoek (Wet open overheid).
          Je gaat stap voor stap gegevens invullen en daarna een conceptverzoek downloaden.
        </p>

        <div className="rounded-lg border p-4 space-y-2">
          <p className="font-medium">MVP scope</p>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>Bestuursorgaan + contactgegevens</li>
            <li>Onderwerp/zaak en gewenste documenten</li>
            <li>Periode/zoektermen</li>
            <li>Leveringsvorm (digitaal) + termijnen</li>
          </ul>
        </div>

        <a className="underline hover:text-gray-600" href="/">
          Terug naar home
        </a>
      </div>
    </div>
  );
}