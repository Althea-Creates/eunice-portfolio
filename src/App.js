import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PhotographySection from './components/PhotographySection';
import DigitalDesign from './components/DigitalDesign';

export default function App() {
  return (
    <main className="app">
      {/* Header */}
      <img
        src="/PROFILE.jpg"
        alt="Althea Profile"
        className="profile-pic"
      />

      <header className="header">
        <h1 className="title">Eunice's Portfolio</h1>
        <p className="subtitle">I am a broadcasting student who loves to discover more of my creative skills. My enthusiasm for pop culture, literature, and music is what influences my creativity. And because of my curiosity to learn, I am eager to discover more of what I can bring to the table when it comes to being a visionary.</p>
      </header>

      {/* Writing Section */}
      <section className="section writing">
        <h2>Writing</h2>
        <p>
          In this section, you'll find a collection of my writing works. From events, school shows, copywriting and blogs, each piece reflects my passion for crafting compelling narratives. 
        </p>

        {/*Creative Writing */}
        <div className="cards">
          <article className="card">
            <h3>ROARientation 2022</h3>
            <p className="role">Writer</p>
            <p>
              Spearheaded writing for the ROARientation 2022, the annual orientation event for freshman students of UST.
            </p>
            <a href="https://www.facebook.com/share/v/8jsu5DKehcyZJExv/" target="_blank" rel="noopener noreferrer" className="card-link">
              Go To →
            </a>
          </article>

          <article className="card">
            <h3>USTAR 2022</h3>
            <p className="role">Writer</p>
            <p>
              Took the lead as one of the main writers for this event catering to aspiring Thomasians.
            </p>
            <a href="https://www.facebook.com/share/v/vHjZNaahReaTdxyq/" target="_blank" rel="noopener noreferrer" className="card-link">
              Go To →
            </a>
          </article>

          <article className="card">
            <h3>USTAR Talks</h3>
            <p className="role">Segment Producer</p>
            <p>
              Produced and wrote a short informative video about the ‘organization life’ in UST.
            </p>
            <a href="https://www.facebook.com/share/v/22grWJ1VBfixddhq/" target="_blank" rel="noopener noreferrer" className="card-link">
              Go To →
            </a>
          </article>

          <article className="card">
            <h3>#HomeTown Vlogs</h3>
            <p className="role">Writer</p>
            <p>
              Contributed to multiple episodes of this show that features various hometowns of the students.
            </p>
            <a href="https://www.facebook.com/share/v/8iES37vKiSwYNsFn/" target="_blank" rel="noopener noreferrer" className="card-link">
              Go To →
            </a>
          </article>
        </div>

        {/* Copywriting Section */}
        <h3 className="writing-subsection">Copywriting</h3>
        <div className="cards">
          <article className="card">
            <h3>UST SHS Multimedia Club Buwan Ng Wika</h3>
            <p className="role">Copywriter</p>
            <p>
              Copywriting for Buwan ng Wika
            </p>
            <a href="https://www.facebook.com/share/p/15zGbV4x7N/" target="_blank" rel="noopener noreferrer" className="card-link">
              View Work →
            </a>
          </article>

          <article className="card">
            <h3>UST SHS Multimedia Club Bonidacio day</h3>
            <p className="role">Copywriter</p>
            <p>
              Copywriting for Bonifacio Day
            </p>
            <a href="https://www.facebook.com/share/p/18M8FUMffX/" target="_blank" rel="noopener noreferrer" className="card-link">
              View Work →
            </a>
          </article>

          <article className="card">
            <h3>UST SHS Multimedia Club Birthday Greet</h3>
            <p className="role">Copywriter</p>
            <p>
              Copywriting for birthday greeting of a co-member in a school organization
            </p>
            <a href="https://www.facebook.com/ustshsmmc/posts/pfbid031cWjozn1rhjeQDxYRazQkoRyor5J8uEgQfmtfjfnf4etiehUev66892XGDTHwhojl" target="_blank" rel="noopener noreferrer" className="card-link">
              View Work →
            </a>
          </article>

          <article className="card">
            <h3>UST Tiger TV</h3>
            <p className="role">Copywriter</p>
            <p>
              Copywriting for a Facebook post of UST Tiger TV
            </p>
            <a href="https://www.facebook.com/share/v/1CznfMS6rv/" target="_blank" rel="noopener noreferrer" className="card-link">
              View Work →
            </a>
          </article>
        </div>

        {/* Blog Writing Section */}
        <h3 className="writing-subsection">Blog Writing</h3>
        <div className="cards">
          <article className="card">
            <h3>An open letter to my mother</h3>
            <p className="role">Author</p>
            <p>
              Written blog from our college school paper.
            </p>
            <a href="https://ust-casachronicle.blogspot.com/2022/05/an-open-letter-to-my-mother.html" target="_blank" rel="noopener noreferrer" className="card-link">
              Read Article →
            </a>
          </article>
        </div>
      </section>

      {/* Video Section */}
      <section className="section video">
        <h2>Video</h2>
        <p>
          In this section, it highlights my journey in exploring visual storytelling. Each project translates my passion into a unique visual experience.
        </p>

        <div className="cards">

          {/* Ligaya */}
          <article className="card">
            <h3>LIGAYA</h3>
            <p className="role">Writer, DOP</p>
            <p>
              Ligaya, a homeless teenage girl, begins to discover the power of learning through a pencil she finds in the trash.
            </p>
            <p className="note">Video available upon request</p>
          </article>

          {/* Lost in the Quiapo Maze */}
          <article className="card">
            <h3>Lost in the Quiapo Maze</h3>
            <p className="role">DOP, GFX Artist</p>
            <p>
              This vlog takes the viewers to different streets of Quiapo, showcasing hidden gems in food, culture, and community.
            </p>
            <p className="note">Video available upon request</p>
          </article>

          {/* Assignment? Assignment?! */}
          <article className="card">
            <h3>Assignment? Assignment?!</h3>
            <p className="role">Writer, Co-director</p>
            <p>
              A student escapes a dangerous street unharmed — but at what cost?
            </p>
            <p className="note">Video available upon request</p>
          </article>

          {/* Sundo, A Photo Roman */}
          <article className="card">
            <h3>Sundo, A Photo Roman</h3>
            <p className="role">Co-photographer</p>
            <p>
              A visual narrative told through a sequence of evocative photographs.
            </p>
            <p className="note">Video available upon request</p>
          </article>

          {/* Tatak Tomasino */}
          <article className="card">
            <h3>Tatak Tomasino</h3>
            <p className="role">Editor</p>
            <p>
              Edited multiple episodes of this show that celebrates Thomasian culture.
            </p>
            <a
              href="https://www.facebook.com/share/v/z6vSJJwP6AnP7vrC/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Watch →
            </a>
          </article>

          {/* Safe Road, Save Lives */}
          <article className="card">
            <h3>Safe Road, Save Lives</h3>
            <p className="role">Director</p>
            <p>
              TikTok entry for the #SafeRoadSaveLives competition by the Philippine Legislators' Committee on Population and Development.
            </p>
            <p className="note">Video available upon request</p>
          </article>

        </div>
      </section>


      {/* Photography Portfolio Section */}
      <PhotographySection />

      {/* Digital Portfolio Section */}
      <DigitalDesign />

      {/* Voice Acting Section */}
      <section className="section voice">
        <h2>Voice Acting</h2>
        <p>
          In this section, it showcases the range and character style I've brought to life through my voice. This project is a radio drama from one of my courses.
        </p>
        <h3>Barrio Tacutan</h3>
        <p className="logline">
          In the rural area of Barrio Tacutan, where chilling tales of aswangs, kapres, and tikbalangs are part of everyday life, three close friends are shaken when one of them suddenly disappears—rumored to be taken by an aswang. As they search for the truth, they begin to question everything they thought was just legend.
        </p>
        <p className="roles">Writer, Voice Actor</p>

        <div className="audio-player-wrapper">
          <iframe
            src="https://drive.google.com/file/d/1E2AutcDV-eXr1wXSHWZTKsF7yRV3SiXN/preview"
            className="audio-player"
            width="100%"
            height="60"
            allow="autoplay"
            frameBorder="0"
            allowFullScreen
            title="Barrio Tacutan Audio"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Eunice — All Rights Reserved</p>
        <div className="social-links">
          <a href="mailto:eunicefdlc@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/eunice-de-la-cruz/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer" aria-label="Medium">
            <i className="fab fa-medium"></i>
          </a>
        </div>
      </footer>
    </main>
  );
}