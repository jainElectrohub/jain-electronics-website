export default function Home() {
  return (
    <div style={{fontFamily:"Arial, sans-serif", textAlign:"center", padding:"40px"}}>
      
      <h1 style={{fontSize:"40px", color:"#1e3a8a"}}>
        Jain Electronics & Electricals
      </h1>

      <p style={{fontSize:"18px", marginTop:"10px"}}>
        Trusted Electronics Store in Gohad Choraha
      </p>

      <div style={{marginTop:"30px"}}>
        <a href="tel:8269894417">
          <button style={{padding:"12px 20px", margin:"10px", fontSize:"16px"}}>
            Call Now
          </button>
        </a>

        <a href="https://wa.me/918269894417">
          <button style={{padding:"12px 20px", margin:"10px", fontSize:"16px"}}>
            WhatsApp
          </button>
        </a>
      </div>

      <h2 style={{marginTop:"50px"}}>Our Products</h2>

      <ul style={{listStyle:"none", padding:0, fontSize:"18px"}}>
        <li>LED TVs</li>
        <li>Washing Machines</li>
        <li>Aata Chakki</li>
        <li>Induction Cooktop</li>
        <li>Mixer Grinder</li>
        <li>Air Coolers</li>
      </ul>

      <h3 style={{marginTop:"40px"}}>
        📍 Gurjar Market, Gohad Road
      </h3>

      <p>📞 8269894417</p>

      <p style={{marginTop:"40px", fontSize:"14px", color:"gray"}}>
        © {new Date().getFullYear()} Jain Electronics & Electricals
      </p>

    </div>
  );
}
