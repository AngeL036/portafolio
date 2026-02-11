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
            {/* 
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 hover:scale-105 transition">
              Contactarme
            </button>
            */}
          </div>

          <div className="md:w-1/2 h-[400px] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
            <span className="text-white text-xl font-semibold">
              <img src="/img/image.png" alt="" />
            </span>
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
