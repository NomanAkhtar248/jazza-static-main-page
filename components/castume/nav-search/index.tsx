import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"

const NavSearch = () => {
  return (
    <div className="w-full lg:flex-1 lg:px-2">
      <div className="relative xl:max-w-[700px] w-full mx-auto">
        <Input
          type="text"
          placeholder="What are you looking for...."
          className="h-12 w-full px-4 bg-[rgba(200,45,140,0.1)] rounded-lg focus:outline-none focus:ring-0 focus:border-none !ring-0 !outline-none !border-none"
        />
        <Button
          variant="ghost"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white hover:bg-black hover:text-white  cursor-pointer rounded-md w-6 h-6 p-0 flex items-center"
        >
          <Search size={1} strokeWidth={4} className="" />
        </Button>
      </div>
    </div>
  )
}

export default NavSearch
