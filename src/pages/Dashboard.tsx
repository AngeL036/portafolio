import Backend from "../components/Backend"
import Frontend from "../components/Frontend"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Proyectos from "../components/Proyectos"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      {/* HERO */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          
          <div className="md:w-1/2 p-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Angel Sanchez
            </h1>

            <p className="text-xl text-blue-600 font-semibold mb-6">
              Desarrollador Full Stack
            </p>

            <p className="text-gray-600 leading-relaxed">
              Desarrollo aplicaciones web modernas con React, Django, FastAPI y .NET.
              Me enfoco en crear soluciones escalables, limpias y eficientes
              para resolver problemas reales.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/5212224893828?text=Hola%20Angel%2C%20me%20interesa%20tu%20portafolio" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold shadow-md hover:scale-105 transition">
                Contactarme por WhatsApp
              </a>

              <a href="#proyectos" className="inline-block px-6 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition">
                Ver proyectos
              </a>
            </div>
          </div>

          <div className="md:w-1/2 flex items-center justify-center p-8">
            <div className="w-full max-w-md h-[360px] bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden transform hover:scale-102 transition">
              <img src="/img/image.png" alt="avatar" className="object-cover w-full h-full mix-blend-screen" />
            </div>
          </div>

        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Proyectos
          </h1>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            <Proyectos
              titulo="ToDo App"
              descripcion="Aplicación de tareas creada con JavaScript"
              github="https://github.com/AngeL036/ToDo-App"
            />

            <Proyectos
              titulo="Backend Calculadora de préstamos"
              descripcion="API con sistema francés usando FastAPI"
              github="https://github.com/AngeL036/creditsim"
            />

            <Proyectos
              titulo="Frontend Calculadora"
              descripcion="Interfaz en React para simulador de créditos"
              github="https://github.com/AngeL036/creditsim-fronted/tree/main/creditsim-frontend"
            />

            <Proyectos
              titulo="ideas"
              descripcion="Pequeños experimentos y utilidades en TypeScript"
              github="https://github.com/AngeL036/ideas"
            />

            <Proyectos
              titulo="ped"
              descripcion="Proyectos y scripts en Python (ped)"
              github="https://github.com/AngeL036/ped"
            />

            <Proyectos
              titulo="AppWeb"
              descripcion="Sitio web y ejemplos en HTML/CSS"
              github="https://github.com/AngeL036/AppWeb"
            />

          </div>
        </div>
      </section>

      {/* TECNOLOGIAS */}
      <section id="tecnologias" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          
          <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
            Tecnologías
          </h1>

          <div className="grid md:grid-cols-2 gap-10">
            
            {/* FRONTEND */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Frontend</h2>
              <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
                <Frontend />
              </div>
            </div>

            {/* BACKEND */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Backend</h2>
              <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
                <Backend />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* EDUCACION */}
      <section id="educacion" className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Educación
        </h1>

        <div className="bg-white p-8 rounded-xl shadow">
          <h2 className="text-lg text-gray-700 font-semibold">
            Lic. Ciencias de la Computación
          </h2>
          <p className="text-gray-500 mt-2">
            Formación en desarrollo de software, bases de datos y arquitectura de sistemas.
          </p>
        </div>
      </section>

      <Footer  />
    </div>
  )
}
