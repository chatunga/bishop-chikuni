import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Award, BookOpen, Globe2, HeartHandshake, Menu, ShieldCheck, Sparkles } from 'lucide-react'

const images = {
  portrait: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2013.57.14-wFOywZKzIQPOs6fjNBXlTi8OFbKpnR.jpeg',
  award: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2014.37.23-TUglJKHUASRxvslUq4ahBnXjo2ueVQ.jpeg',
  stage: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2014.03.01-1KVYiTOaCvps6rCdPsNVSbDruIxC2B.jpeg',
  peace: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2014.14.21-eATodcdh7XlzdKRLzqzQXDnPQz7jhN.jpeg',
  community: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2014.20.03-arBcnmO2atgZEYtLOCDOpfdwKfblGn.jpeg',
  family: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2014.08.38-BGjDy8A8IkOUOxo5zBgTh8SdjxR1FM.jpeg',
  mentor: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2014.32.48-xJ6yL0YzbjHgSKw88TAglEWYNSNSBC.jpeg',
  president: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2014.24.29-iTvTE2Ebf0JYzdE4ZFEgQaKbs86lx8.jpeg',
  congregation: '/gallery/gallery-14.26.28.jpg',
  awardDetail: '/gallery/gallery-14.36.15.jpg',
  awardsBrand: '/gallery/gallery-14.38.04.jpg',
  globalFellowship: '/gallery/gallery-14.05.00.jpg',
  peaceSummit: '/gallery/gallery-14.06.24.jpg',
  internationalDialogue: '/gallery/gallery-14.13.03.jpg',
  publicService: '/gallery/gallery-14.17.23.jpg',
  civicLeadership: '/gallery/gallery-14.18.46.jpg',
}

const navItems = ['About', 'Impact', 'Recognition', 'Gallery']

export default function Page() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Bishop Albert Chikuni home">
          <span className="brand-mark">AC</span>
          <span className="brand-name">Albert Chikuni<span>.</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </nav>
        <a className="contact-link" href="#contact">Get in touch <ArrowUpRight aria-hidden="true" /></a>
        <button className="mobile-menu" aria-label="Open navigation"><Menu aria-hidden="true" /></button>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Bishop Dr Albert Chikuni</p>
          <h1>Building peace<br /><em>from the family</em><br />to the nation.</h1>
          <p className="hero-intro">A Zimbabwean peacebuilder, interfaith leader and advocate for a more just, united and prosperous society.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#about">Explore his work <ArrowDown aria-hidden="true" /></a>
            <a className="text-link" href="#contact">Invite Bishop Chikuni <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-visual hero-visual-editorial" aria-label="Bishop Chikuni's guiding principles">
          <div className="editorial-card"><div className="editorial-sun"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-11-10%20at%2013.57.14-eAChF9mxrrj8TaYYgwAPZWGPePJ4un.jpeg" alt="Bishop Dr Albert Chikuni smiling in a light blue suit" fill sizes="280px" /></div><p>“Peace is not an abstract ideal. It is a practical discipline.”</p><span className="editorial-signature">— Albert Chikuni</span></div>
          <div className="hero-stamp"><span>PEACE</span><span>INTEGRITY</span><span>FAMILY</span></div>
          <p className="hero-caption">A man of valour, purpose<br />and vision <span>↗</span></p>
        </div>
      </section>

      <section id="about" className="intro-section section-wrap">
        <div className="section-label"><span>01</span>The story</div>
        <div className="intro-grid">
          <h2>A life committed<br />to <em>the common good.</em></h2>
          <div className="intro-body"><p>Bishop Dr Albert Chikuni is a spiritual leader and national changemaker whose life&apos;s work is dedicated to uniting faiths, strengthening families and building a peaceful, just and prosperous Zimbabwe.</p><p>As President and Founder of the Interreligious Association for Peace and Development Zimbabwe, he has created a collaborative network that brings together Christian, Muslim, Bahá&apos;í and African Traditional Religion communities.</p><a className="text-link" href="#impact">Read the full story <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
      </section>

      <section id="impact" className="impact-section">
        <div className="section-wrap">
          <div className="section-label light"><span>02</span>The work</div>
          <div className="impact-heading"><h2>Peace is not an<br /><em>abstract ideal.</em></h2><p>It is a practical discipline — taught, modelled and multiplied through courageous leadership.</p></div>
          <div className="impact-cards">
            <article className="impact-card"><HeartHandshake aria-hidden="true" /><span className="card-number">01</span><h3>Interfaith<br />unity</h3><p>Building bridges across faiths, cultures and institutions through IAPD Zimbabwe.</p></article>
            <article className="impact-card"><ShieldCheck aria-hidden="true" /><span className="card-number">02</span><h3>Integrity in<br />governance</h3><p>Serving as the trusted religious voice in Zimbabwe&apos;s national fight against corruption.</p></article>
            <article className="impact-card"><Sparkles aria-hidden="true" /><span className="card-number">03</span><h3>Family<br />flourishing</h3><p>Equipping and stabilising families as the foundation of peaceful communities.</p></article>
          </div>
        </div>
      </section>

      <section id="recognition" className="recognition-section section-wrap">
        <div className="recognition-graphic" aria-hidden="true"><div className="graphic-ring" /><div className="graphic-word">IMPACT</div><span>2025</span></div>
        <div className="recognition-copy"><div className="section-label"><span>03</span>Recognition</div><p className="display-quote">“A leader who does not merely preach peace — he builds the structures that make peace possible.”</p><div className="award-row"><Award aria-hidden="true" /><div><strong>2025 Social Impact Award</strong><span>The List Awards · Identities Media</span></div></div></div>
      </section>

      <section id="gallery" className="gallery-section section-wrap"><div className="section-label"><span>04</span>In the field</div><div className="gallery-heading"><h2>Moments that<br /><em>move people.</em></h2><p>A visual record of service — from international peace tables to the communities and leaders shaping Zimbabwe&apos;s future.</p></div><div className="gallery-grid gallery-masonry">
        <figure className="gallery-card gallery-feature"><div className="gallery-photo"><Image src={images.stage} alt="Bishop Chikuni receiving an award on stage" fill sizes="(max-width: 900px) 100vw, 50vw" /></div><figcaption><span>Recognition · 2022</span><strong>Celebrating work that turns conviction into action.</strong><small className="gallery-with">“With Honourable Kindness Paradza, Deputy Minister of Information, presenting a Peace Champion Award to Bishop Dr Albert Chikuni in January 2022.”</small></figcaption></figure>
        <figure className="gallery-card gallery-secondary"><div className="gallery-photo"><Image src={images.president} alt="Bishop Chikuni shaking hands with the President of Zimbabwe" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>National leadership</span><strong>Dialogue that connects faith, civic responsibility and country.</strong><small className="gallery-with">“His Excellency Dr E.D. Mnangagwa, the President of the Republic of Zimbabwe, in an agreement handshake with His Eminence Bishop Dr Albert Chikuni, President of the Interreligious Association for Peace and Development Zimbabwe.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.internationalDialogue} alt="Bishop Chikuni with Mr Adesina at a peace summit" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>International dialogue</span><strong>Connecting people who share a vision for peace.</strong><small className="gallery-with">“Bishop Dr Albert Chikuni with Mr Adesina, President of the African Development Bank, World Peace Summit, South Korea, February 2019.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.peace} alt="Bishop Chikuni with a peace conference leader" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>International peace conference</span><strong>Peace is built through relationships across borders.</strong><small className="gallery-with">“With former Prime Minister of Canada.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.community} alt="Bishop Chikuni joining an anti-corruption community march" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Community action</span><strong>Standing together for a Zimbabwe free from corruption.</strong><small className="gallery-with">“Bishop Dr Albert Chikuni, National Anti-Corruption Advocate, marching in the streets.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.mentor} alt="Bishop Chikuni seated with mentor Professor Jameson Kurasha" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Legacy · Mentorship</span><strong>Honouring the people and wisdom that shape a life of service.</strong><small className="gallery-with">“Bishop Dr Albert Chikuni with Mentor Prof Jameson Kurasha of blessed memory.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.family} alt="Bishop Chikuni with community leaders at a gathering" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Community · Fellowship</span><strong>Every movement for peace begins with people.</strong><small className="gallery-with">“With Hon Minister of Information Monica Mutsvangwa as key participants of the Brand Zimbabwe program.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.award} alt="Bishop Chikuni holding his community news award" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Peace Champion of the Year</span><strong>A moment of gratitude for meaningful recognition.</strong><small className="gallery-with">“Award winner, Peace Champion of the Year 2022.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.portrait} alt="Portrait of Bishop Dr Albert Chikuni" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Bishop Dr Albert Chikuni</span><strong>Leadership with a human face and an open hand.</strong></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.congregation} alt="Faith leaders gathered in a community meeting" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Faith community</span><strong>Making space for dialogue, fellowship and shared purpose.</strong><small className="gallery-with">“Mashonaland Central Provincial faith leaders listening to a public peace address from His Eminence Bishop Dr Albert Chikuni.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.awardDetail} alt="Peace Champion of the Year award" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Peace Champion of the Year</span><strong>Recognition of a life turning peace into practice.</strong></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.awardsBrand} alt="Zimbabwe Community News annual awards graphic" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Annual awards</span><strong>Celebrating the people moving Zimbabwe forward.</strong></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.globalFellowship} alt="Bishop Chikuni with international peace leaders" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Global fellowship</span><strong>Building relationships across cultures and continents.</strong><small className="gallery-with">“With Pastor Paula White, Advisor to the President of America, Mr Donald Trump.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.peaceSummit} alt="Bishop Chikuni at an international peace summit" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>International peace summit</span><strong>Peace grows through courageous conversations.</strong><small className="gallery-with">“Chairman IAPD Africa and Chairman IAPD Zimbabwe in South Korea, World Peace Summit.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.publicService} alt="Public officials gathered for an anti-corruption initiative" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Public service</span><strong>Integrity in action, alongside institutions and communities.</strong><small className="gallery-with">“Bishop Albert Chikuni witnessing the signing of integrity pledges by Masvingo top government leaders and state security, hosted by the Zimbabwe Anti-Corruption Commission.”</small></figcaption></figure>
        <figure className="gallery-card"><div className="gallery-photo"><Image src={images.civicLeadership} alt="Bishop Chikuni speaking at a civic leadership event" fill sizes="(max-width: 900px) 50vw, 25vw" /></div><figcaption><span>Civic leadership</span><strong>Giving voice to the work of a more just society.</strong><small className="gallery-with">“Bishop Dr Albert Chikuni, speaker, United Against Corruption national programme.”</small></figcaption></figure>
      </div></section>

      <section id="contact" className="contact-section"><div className="section-wrap contact-inner"><div><p className="eyebrow">Let&apos;s build what matters</p><h2>Peace begins<br /><em>with a conversation.</em></h2></div><a className="contact-circle" href="mailto:info@albertchikuni.org">Start a conversation <ArrowUpRight aria-hidden="true" /></a></div></section>
      <footer className="footer section-wrap"><div className="brand"><span className="brand-mark">AC</span><span className="brand-name">Albert Chikuni<span>.</span></span></div><p>© 2026 Bishop Dr Albert Chikuni · Zimbabwe</p><div className="footer-links"><a href="#top">Back to top ↑</a><a className="powered-by" href="https://shiftlojik.com" target="_blank" rel="noreferrer">Powered by <span>Shift Lojik</span></a></div></footer>
    </main>
  )
}
