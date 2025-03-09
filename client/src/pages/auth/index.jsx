import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {apiClient} from "@/lib/api-client"
import { useAppStore } from "@/store";
 import { LOGIN_ROUTE, SIGNUP_ROUTE } from "@/utils/constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Auth = () => {
  const navigate = useNavigate("");
  const { setUserInfo } = useAppStore();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState("");

   const validateLogin = () =>{
    if (!email.length){
      toast.error("Email is required.");
      return false;
    }
    if(!password.length){
      toast.error("Password is required.");
      return false;
    }

    return true;
   
   }

  const validateSignup = () => {
    if (!email.length){
      toast.error("Email is required.");
      return false;
    }
    if(!password.length){
      toast.error("Password is required.");
      return false;
    }
    if(password != confirmPassword){
      toast.error("Password and confirm password should be same.");
      return false;
    }
    else{
    return true;
    }
  }
  const handleLogin = async () => {
    if (validateLogin()) {
      try {
          const response = await apiClient.post(LOGIN_ROUTE, { email, password },{withCredentials:true}); 
          toast.success("Login successful!");
          console.log({response})
          if(response.data.user.id){
            setUserInfo(response.data.user)
            if(response.data.user.profileSetup) navigate("/chat")
              else navigate("/profile")
          }
      } catch (error) {
          console.error("Error during login:", error);
          toast.error(error.response?.data?.message || "Login failed. Please try again.");
      }
  }
  };
  const handleSignup = async () => {
    if (validateSignup()) {
        try {
            const response = await apiClient.post(SIGNUP_ROUTE, { email, password },{withCredentials:true});
           
            toast.success("Signup successful!");
            console.log({response})
            if(response.status === 201){
              setUserInfo(response.data.user);
              navigate("/profile");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            toast.error(error.response?.data?.message || "Signup failed. Please try again.");
        }
    }
};

 
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
    <div className="h-[80vh] bg-white border-2 text-opacity-90 shadow-2xl w-[80vw] md:w-[90vw] lg:w-[70vw] xl:w-[60vw] rounded-3xl grid xl:grid-cols-2">
    <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center"> 
        <h1 className="text-5xl font-bold md:text-6xl">Welcome</h1>
        <img alt="Victory Emoji" className="h-[100px]"/>
        </div>
        <p className="font-medium text-center">Fill the credentials to hop in the world of ChatHub!</p>
    </div>
    <div className="flex items-center justify-center w-full">
    <Tabs className="w-3/4" defaultValue="login">
      <TabsList className="bg-transparent rounded-none w-full">
        <TabsTrigger value="login" className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:border-b-purple-500 p-3 transition-all duration-300">Login</TabsTrigger>
        <TabsTrigger className="data-[state=active]:bg-transparent text-black text-opacity-90 border-b-2 rounded-none w-full data-[state=active]:text-black data-[state=active]:border-b-purple-500 p-3 transition-all duration-300" value="signup">Signup</TabsTrigger>
      </TabsList>

      <TabsContent className="flex flex-col gap-5 mt-10" value="login">
        <Input placeholder="Email" type="email" className="rounded-full p-6" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input
          placeholder="Password" type="password" className="rounded-full p-6" value={password} onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="rounded-full p-6" onClick={handleLogin}>
          Login
        </Button> 
      </TabsContent>


      <TabsContent className="flex flex-col gap-5 10" value="signup">
      <Input placeholder="Email" type="email" className="rounded-full p-6" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Input
          placeholder="Password" type="password" className="rounded-full p-6" value={password} onChange={(e) => setPassword(e.target.value)}
        />
          <Input
          placeholder="Confirm Password" type="password" className="rounded-full p-6" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
          <Button className="rounded-full p-6" onClick={handleSignup}>
          Signup
        </Button>
      </TabsContent>

    </Tabs>
    </div>
    
    </div>
    </div>
      
)
}

export default Auth