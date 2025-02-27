"use client";
import Image from "next/image";
import Link from "next/link";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white p-6">

      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-teal-400 mb-4">
          Bienvenido a Investment Hub
        </h1>
        <p className="text-lg text-gray-300">
          Gestiona y explora fondos de inversión con información actualizada y
          herramientas avanzadas.
        </p>
      </div>

      <div className="mt-8">
        <Image
          src="/images/investments.jpg"
          width={500}
          height={400}
          alt="Investment Growth"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="mt-10">
        <Link href="/auth/login">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition">
            Explorar Fondos de Inversión
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
