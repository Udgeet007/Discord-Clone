import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton 
        afterSignOutUrl="/"
      />
      <ModeToggle />
    </div>
    
  )
}
 {/* <p className="text-3xl font-bold text-indigo-500">
      Hello Discord Clone
    </p>
    <Button>
      Click me
    </Button> */}