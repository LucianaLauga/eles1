import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function ElesLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Aquí podrías integrar una API real
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-rose-100 via-violet-100 to-pink-200 animate-gradient-slow text-gray-900 font-sans">
      <header className="bg-white shadow p-6 flex justify-between items-center px-12 text-rose-600">
        <h1 className="text-3xl font-extrabold tracking-tight">Eles</h1>
        <Button variant="outline" className="border-rose-600 text-rose-600 hover:bg-rose-100">Ingresar</Button>
      </header>

      <main className="py-24 px-8 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-6xl font-black leading-tight text-pink-600">
            Tu tienda que se vende sola
          </h2>
          <p className="text-xl text-gray-700">
            Eles es tu nueva aliada inteligente. Crea descripciones, arma campañas, responde mensajes y potencia tus ventas automáticamente. Todo con amor, desde LATAM.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4 max-w-md">
              <label className="text-md font-semibold text-gray-800">Sumate a la lista de espera:</label>
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700">
                Quiero mi tienda con alma
              </Button>
            </form>
          ) : (
            <p className="text-green-600 font-semibold mt-8">
              ¡Gracias! Vas a ser de las primeras personas en probar Eles.
            </p>
          )}
        </div>

        <div className="hidden lg:block">
          <img src="https://cdn.shopify.com/shopify-marketing_assets/static/landing-pages/2024-landing-home/hero-store-example-small-2x.png" alt="Ejemplo de tienda" className="rounded-xl shadow-xl border-4 border-white" />
        </div>
      </main>

      <section className="bg-gradient-to-br from-white to-rose-50 py-20 px-8 lg:px-32 text-center">
        <h3 className="text-3xl font-bold mb-8 text-pink-600">¿Qué hace Eles por vos?</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left text-gray-800">
          <li className="bg-white border-l-4 border-fuchsia-500 p-6 rounded-xl shadow-md">
            <strong className="block mb-2">📸 Carga inteligente</strong>
            Subís una foto y la IA genera todo por vos: título, precio, descripción, hashtags.
          </li>
          <li className="bg-white border-l-4 border-pink-500 p-6 rounded-xl shadow-md">
            <strong className="block mb-2">🎯 Campañas automáticas</strong>
            Publicidad lista para Meta, Instagram y Google en 3 clics. Sin agencias.
          </li>
          <li className="bg-white border-l-4 border-blue-500 p-6 rounded-xl shadow-md">
            <strong className="block mb-2">💬 Asistente por WhatsApp</strong>
            Responde consultas como si fueras vos. 24/7, con calidez.
          </li>
          <li className="bg-white border-l-4 border-pink-400 p-6 rounded-xl shadow-md">
            <strong className="block mb-2">📊 Reportes con corazón</strong>
            No son gráficos fríos: son consejos reales para vender mejor.
          </li>
        </ul>
      </section>

      <footer className="bg-gradient-to-r from-rose-100 to-pink-100 text-center py-10 text-sm text-gray-600">
        © 2025 Eles. Creado con ❤️ y visión en LATAM.
      </footer>
    </div>
  );
}
