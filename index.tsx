import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ElesLanding() {
  const [email, setEmail] = useState("");

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/crear-tienda";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-emerald-50 to-cyan-100 text-gray-900 font-inter">
      <header className="bg-white shadow p-6 flex justify-between items-center px-12 text-emerald-600">
        <h1 className="text-3xl font-extrabold tracking-tight">Eles</h1>
        <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-100">Ingresar</Button>
      </header>

      <main className="py-24 px-8 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-6xl font-black leading-tight text-emerald-700">
            Tu e-commerce inteligente empieza acá
          </h2>
          <p className="text-xl text-gray-700">
            Eles es tu nueva plataforma potenciada por IA. Creá tu tienda online con contenido automático, campañas listas y asistencia por WhatsApp. Todo, sin saber programar.
          </p>

          <form onSubmit={handleStart} className="mt-8 space-y-4 max-w-md">
            <label className="text-md font-semibold text-gray-800">¿Querés empezar?</label>
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
              Crear mi tienda ahora
            </Button>
          </form>
        </div>

        <div className="hidden lg:block">
          <img src="https://cdn.shopify.com/shopify-marketing_assets/static/landing-pages/2024-landing-home/hero-store-example-small-2x.png" alt="Ejemplo de tienda" className="rounded-xl shadow-xl border-4 border-white" />
        </div>
      </main>
    </div>
  );
}