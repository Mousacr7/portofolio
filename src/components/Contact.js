
const contact = () => {
  return (
    <footer className="footer">
  <div className="">
    <h3 className="text-xl font-bold">Let's Connect</h3>
    <p>I’d love to hear from you — whether it’s about a project, a job, or just to say hi!</p>
    
    <form action="mailto:mosamlam389@gmail.com" method="POST" encType="text/plain" className="contact">
      <input 
        type="text" 
        placeholder="Your Name" 
        className="name"
        required 
      />
      <textarea 
        placeholder="Your Message" 
        className="mail"
        required
      ></textarea>
      <button 
        type="submit" 
        className="submit"
      >
        Send Email
      </button>
    </form>
  </div>
</footer>

  )
}

export default contact
