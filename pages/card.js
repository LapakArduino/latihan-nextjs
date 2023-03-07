export default function Card() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-5/12">
        <div className="bg-white shadow rounded-xl ">
          <div className="px-8 py-5 leading-relaxed text-md bg-gray-800 rounded-t-md">
            lorem 🦞 test
          </div>
          <div className="px-8 py-5 bg-gray-500 rounded-b-md">
            <div className="flex">
              <div className="flex-shrink-0 mr-3">img</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
