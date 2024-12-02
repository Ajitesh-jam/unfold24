import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Services from './components/home/Services';
import Team from './components/home/Team';
import Testimonials from './components/home/Testimonials';
import Contact from './components/home/Contact';
import Footer from './components/layout/Footer';
import DoctorDashboard from './components/dashboards/DoctorDashboard';
import PatientDashboard from './components/dashboards/PatientDashboard';
import { BuildType, OktoProvider } from 'okto-sdk-react';

const OKTO_CLIENT_API_KEY = "8a001bd6-0804-4284-805c-b8191c07bae9";
function App() {
  return (
    <Router>
      <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Header />
              <main>
                <Hero />
                <Features />
                <Services />
                <Team />
                <Testimonials />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
      </Routes>
      </OktoProvider>
    </Router>
  );
}

export default App;