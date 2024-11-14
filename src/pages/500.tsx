import Link from 'next/link'

export default function Custom500() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">500 - Server Error</h1>
      <p className="text-xl mb-8">Oops! Something went wrong on our end.</p>
      <Link href="/">
        <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go back home
        </a>
      </Link>
    </div>
  )
}