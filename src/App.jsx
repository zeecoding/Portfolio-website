import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import About from './components/About'
import Experience from './components/Experience'
import Project from './components/Project'
import Contact from './components/Contact'
const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-200 antialised selection:bg-neutral-300 selection:text-indigo-700">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      </div>
      <div className="container mx-auto px-8">
            <Navbar/>
            <Hero/>
            <About/>
            <Technologies/>
            <Experience/>
            <Project/>
            <Contact/>
      </div>
    </div>
  )
}

export default App