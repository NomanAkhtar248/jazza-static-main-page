import { Facebook, Instagram } from "lucide-react"
import Link from "next/link"

export default function SocialIcons() {
  return (
    <div className="flex justify-start gap-3 m-2 ">
      <Link
        href="#"
        className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-b from-fuchsia-900 to-pink-500 hover:bg-gradient-to-t hover:from-fuchsia-900 hover:to-pink-500 transition-colors"
      >
        <Facebook className="w-4 h-4" />
      </Link>
      <Link
        href="#"
        className="w-8 h-8 rounded-full flex items-center justify-center  bg-gradient-to-b from-fuchsia-900 to-pink-500 hover:bg-gradient-to-t hover:from-fuchsia-900 hover:to-pink-500 transition-colors"
      >
        <Instagram className="w-4 h-4" />
      </Link>
    </div>
  )
}
