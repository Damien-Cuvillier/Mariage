import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Composant/header';
import Banner from './Composant/banner';
import Programme from './Composant/Programme';
import Description from './Composant/Description';
import RSVP from './Composant/RSVP';
import Histoire from './Composant/Histoire';
import Hebergement from './Composant/Hebergement';
import Color from './Composant/Color';
// Importez vos autres composants de page ici

function App() {
    return (
        <Router>
            <div className="min-h-screen">
                <Header />
                {/* Ajoutez un padding-top pour compenser le header fixe */}
                <div className="pt-16">
                    <Routes>
                        <Route path="/Mariage" element={
                            <>
                                <Banner />
                                <Description />
                                <Color />
                                <Programme />
                                {/* Autres composants de la page d'accueil */}
                            </>
                        } />
                        <Route path="/histoire" element={<Histoire />} />
                        <Route path="/hebergement" element={<Hebergement />} />
                        <Route path="/rsvp" element={<RSVP />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
