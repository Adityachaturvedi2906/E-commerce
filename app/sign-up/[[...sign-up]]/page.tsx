import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="flex justify-center items-center min-h-[50vh] p-6">
  <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
	<SignUp />
	</div></div>;
}