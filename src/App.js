import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Composant/header';
import Banner from './Composant/banner';
import Programme from './Composant/Programme';
import Description from './Composant/Description';
// Importez vos autres composants de page ici

function App() {
    return (
        <Router>
            <div className="min-h-screen">
                <Header />
                {/* Ajoutez un padding-top pour compenser le header fixe */}
                <div className="pt-16">
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Banner />
                                <Description />
                                <Programme />
                                {/* Autres composants de la page d'accueil */}
                            </>
                        } />
                        {/* <Route path="/lieu" element={<Lieu />} />
                        <Route path="/hebergement" element={<Hebergement />} />
                        <Route path="/rsvp" element={<RSVP />} /> */}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
