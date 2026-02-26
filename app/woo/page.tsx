import Link from "next/link";

export default function WooPage() {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-16">
      <div className="w-full max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold">WOO-verzoek</h1>

        <p className="text-gray-700">
          Je vult stap voor stap in welke informatie je wilt ontvangen. Daarna krijg je een concept WOO-verzoek dat je
          zelf controleert en verstuurt.
        </p>

        <div className="text-gray-700 space-y-2">
          <p>• Gericht op informatieverzoeken bij bestuursorganen</p>
          <p>• Inclusief duidelijke formulering van verzoek en afbakening</p>
          <p>• Jij blijft eindverantwoordelijk voor de inhoud</p>
        </div>

        <div className="rounded-lg border p-4 text-gray-700">
          <p className="font-medium text-black">Let op</p>
          <p className="mt-1">
            Dit is een schrijfhulp, geen juridisch advies. Controleer altijd termijnen en je verzoekformulering voordat
            je verzendt.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/woo/start"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 text-center"
          >
            Start intake
          </Link>

          <Link href="/" className="underline hover:text-gray-600 text-center">
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}