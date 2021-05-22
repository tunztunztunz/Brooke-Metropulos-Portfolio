export default function ContactForm() {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray text-sm  mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border border-gray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Jane Doe"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray text-sm  mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border border-gray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="JaneDoe@example.com"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray text-sm  mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="shadow appearance-none border border-gray w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          rows="4"
          placeholder="Hey Brooke, I'd like to hire you."
        />
      </div>
    </form>
  );
}
