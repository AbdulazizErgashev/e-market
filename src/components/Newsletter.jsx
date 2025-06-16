import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export default function Newsletter() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl text-white py-16 px-4 mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Subscribe for news
        </h1>
        <p className="text-lg mb-8">
          Be the first to know about special discounts and new products!
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            required
            placeholder="email..."
            className="w-full sm:w-auto px-5 py-3 rounded-full text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white transition"
          />
          <button
            type="submit"
            className="px-5 py-3 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Subscribe <NotificationsActiveIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
