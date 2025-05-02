import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faRobot, faMagnifyingGlass, faCopy, faDownload, faShare, faSync, faBolt, faBrain, faSliders, faGlobe, faLock, faHistory, faCloudUploadAlt, faCheck, faClipboard } from '@fortawesome/free-solid-svg-icons'
import { Scripts } from 'react-router-dom';

function Header(){

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      // Add active class to the clicked tab
      tab.classList.add('active');
      
      // Get the target section ID from the data-target attribute
      const target = tab.getAttribute('data-target');
      
      // Hide all input sections
      document.querySelectorAll('.input-content').forEach(section => {
        section.style.display = 'none';
      });
      
      // Show the appropriate sections based on the clicked tab
      if (target === 'texte') {
        document.getElementById('texte').style.display = 'block';
      } else if (target === 'url') {
        document.getElementById('texte').style.display = 'block';
        document.getElementById('url').style.display = 'block';
      } else if (target === 'document') {
        document.getElementById('document').style.display = 'block';
      }
    });
  });

    return(
        <>
        <header>
        <div class="container">
          <nav class="navbar">
            <div class="logo">
              <a href="#">
                <span> <FontAwesomeIcon icon={faRobot} /> SummarizeAI </span>
              </a>
            </div>
            <ul class="nav-menu">
              <li><a href="#Générez-des-résumés-intelligents-en-quelques-secondes" class="nav-link">Accueil</a></li>
              <li><a href="#Entrez-votre-texte" class="nav-link">Fonctionnalités</a></li>
              <li><a href="#Contact" class="nav-link">Contact</a></li>
            </ul>
            <div class="auth-btns">
              
              <a href="">
                <button class="brutalist-button">
                  <div class="button-text">
                    <span>Login</span>
                  </div>
                </button>
              </a>
                <a href="">
                <button class="brutalist-button">
                  <div class="button-text">
                    <span>Register</span>
                  </div>
                </button>
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main class="main-content">
          <div class="container">
            <section class="hero">
              <h1 id="Générez-des-résumés-intelligents-en-quelques-secondes">Générez des résumés intelligents en quelques secondes</h1>
              <p>Notre technologie d'IA avancée transforme vos longs textes en résumés concis et percutants, tout en préservant les informations essentielles.</p>
              <a href=""><button class="Button">Crée Votre Resumer</button></a>
            </section>

            <section class="summarize-tool">
              <div class="input-section">
                <h2 id="Entrez-votre-texte">Entrez votre texte</h2>
                <div class="input-tabs">
                  <div class="tab active">Texte</div>
                  <div class="tab">Document</div>
                </div>

                <div class="input-content" id="texte">
                 <textarea placeholder="Collez votre texte ici ou commencez à écrire..." aria-label="Enter your text here"></textarea>
                </div>

                <div class="input-content" id="document" style={{display: "none"}}>
                  <div class="upload-area">
                  <FontAwesomeIcon icon={faCloudUploadAlt} />
                  <h3>Glissez-déposez votre fichier ici</h3>
                  <p>ou</p>
                  <input type="file" id="file-upload" style={{display: "none"}} accept=".pdf,.docx,.txt"/>
                  <button class="btn btn-outline" onclick="document.getElementById('file-upload').click()">Parcourir les fichiers</button>
                  <p class="small">Formats supportés: PDF, DOCX, TXT (max 10MB)</p>
                  </div>
                </div>
              </div>

              <div class="options-bar">
                <div class="options-group">
                  <label>Longueur:</label>
                  <select>
                    <option>Court (25%)</option>
                    <option selected>Moyen (50%)</option>
                    <option>Long (75%)</option>
                  </select>
                </div>

                <div class="options-group">
                  <label>Langue:</label>
                  <select>
                    <option selected>Français</option>
                    <option>Anglais</option>
                    <option>Arabic</option>
                  </select>
                </div>

                <button class="brutalist-button">Générer le résumé</button>
              </div>

              <div class="output-section">
                <div class="result-header">
                  <h2>Votre résumé</h2>
                  <div class="result-actions">
                    <button class="copy">
                      <span data-text-end="Copied!" data-text-initial="Copy to clipboard" class="tooltip"></span>
                        <span>
                        <FontAwesomeIcon icon={faCheck} style={{height: 20, width: 20,}}/>
                        <FontAwesomeIcon icon={faClipboard} style={{height: 18, width: 18,}}/>
                        </span>
                        </button>
                    <button class="copy" title="Télécharger">
                      <FontAwesomeIcon icon={faDownload} style={{height: 20, width: 20,}}/>
                    </button>
                    <button class="copy" title="Partager">
                      <FontAwesomeIcon icon={faShare} style={{height: 20, width: 20,}}/>
                      </button>
                    <button class="copy" title="Régénérer">
                      <FontAwesomeIcon icon={faSync} style={{height: 20, width: 20,}}/></button>
                  </div>
                </div>

                <div class="result-container">
                  <p>Votre résumé apparaîtra ici après génération. Il contiendra les points clés de votre texte original, organisés de manière cohérente et concise.</p>
                </div>
              </div>
            </section>

            <section class="features">
              <div class="feature-card">
                <div class="feature-icon">
                <FontAwesomeIcon icon={faBolt} style={{color: "#0c47a7",fontSize: 40,}}/>
                </div>
                <h3>Résumé instantané</h3>
                <p>Obtenez des résumés en quelques secondes, quelle que soit la longueur de votre texte original.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                <FontAwesomeIcon icon={faBrain} style={{color: "#0c47a7",fontSize: 40,}}/>
                </div>
                <h3>IA avancée</h3>
                <p>Notre moteur d'IA comprend le contexte et identifie les informations vraiment importantes.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                <FontAwesomeIcon icon={faSliders} style={{color: "#0c47a7",fontSize: 40,}}/>
                </div>
                <h3>Personnalisation</h3>
                <p>Ajustez la longueur, le style et le focus de vos résumés selon vos besoins.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                <FontAwesomeIcon icon={faGlobe} style={{color: "#0c47a7",fontSize: 40,}}/>
                </div>
                <h3>Multi-langues</h3>
                <p>Support de plusieurs langues pour résumer des contenus internationaux.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                <FontAwesomeIcon icon={faLock} style={{color: "#0c47a7",fontSize: 40,}}/>
                </div>
                <h3>Sécurité des données</h3>
                <p>Vos données sont traitées de manière sécurisée et ne sont jamais partagées.</p>
              </div>

              <div class="feature-card">
                <div class="feature-icon">
                <FontAwesomeIcon icon={faHistory} style={{color: "#0c47a7",fontSize: 40,}}/>
                </div>
                <h3>Historique</h3>
                <p>Accédez à tous vos résumés précédents et modifiez-les à tout moment.</p>
              </div>
            </section>
          </div>
        </main>
        <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-col">
          <h4>SummarizeAI</h4>
          <p>Transformez vos longs textes en résumés concis et pertinents grâce à notre technologie d'intelligence artificielle de pointe.</p>
        </div>
        
        <div class="footer-col">
          <h4>Liens rapides</h4>
          <ul class="footer-links">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">Fonctionnalités</a></li>
            <li><a href="#">Tarifs</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Légal</h4>
          <ul class="footer-links">
            <li><a href="#">Conditions d'utilisation</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">RGPD</a></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4 id="Contact">Contact</h4>
          <ul class="footer-links">
            <li><a href="#">Support</a></li>
            <li><a href="#">contact@summarizeai.com</a></li>
            <li><a href="#">+33 1 23 45 67 89</a></li>
          </ul>
        </div>
      </div>
      
      <div class="copyright">
        <p>&copy; {new Date().getFullYear()} SummarizeAI. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
        </>
    );
}

export default Header