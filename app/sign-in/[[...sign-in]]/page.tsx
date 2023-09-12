import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return   <div className="flex justify-center items-center min-h-[60vh] p-4">
  <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
<SignIn/>
</div>
</div>
}