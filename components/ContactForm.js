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
          placeholder="Hey Brooke, I love your work 😎 "
        />
      </div>
      <button
        className="border border-gray hover:bg-pink hover:text-white text-gray w-full py-2 px-4 focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Send me a message !
      </button>
    </form>
  );
}
