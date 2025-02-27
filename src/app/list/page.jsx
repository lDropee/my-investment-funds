"use client";

import { useRouter } from "next/navigation";

const funds = [
  { id: 1, name: "Fondo Conservador", risk: "Bajo", returnRate: "4.5%" },
  { id: 2, name: "Fondo Moderado", risk: "Medio", returnRate: "7.2%" },
  { id: 3, name: "Fondo Agresivo", risk: "Alto", returnRate: "12.8%" },
];

function InvestmentFundsPage() {
  const router = useRouter();

  const handleLogout = () => {
    sessionStorage.removeItem("isLoggedIn");
    router.push("/");
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex flex-col items-center justify-center text-white">
      <h1 className="text-slate-200 font-bold text-4xl mb-6">Fondos de Inversión</h1>

      <ul className="w-1/3 bg-slate-900 p-4 rounded-lg shadow-md">
        {funds.map((fund) => (
          <li key={fund.id} className="p-4 border-b border-gray-700 last:border-none">
            <h2 className="text-lg font-semibold">{fund.name}</h2>
            <p className="text-sm text-gray-400">Riesgo: {fund.risk}</p>
            <p className="text-sm text-gray-400">Rentabilidad: {fund.returnRate}</p>
          </li>
        ))}
      </ul>

      <button 
        onClick={handleLogout} 
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}

export default InvestmentFundsPage;
