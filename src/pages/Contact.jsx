export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "form_submit",
      form_data: formData,
    });
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto space-y-6">
      <h2 className="text-3xl font-bold text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="grid gap-4 bg-white p-6 rounded-lg shadow">
        <input type="text" name="name" placeholder="Your Name" className="border p-2 rounded" required />
        <input type="email" name="email" placeholder="Your Email" className="border p-2 rounded" required />
        <textarea name="message" placeholder="Your Message" className="border p-2 rounded" required />
        <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-white py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}
