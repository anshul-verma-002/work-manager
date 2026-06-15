import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("middleware executed");
  const token = request.cookies.get("token")?.value;

//   console.log("Path:", request.nextUrl.pathname);
//   console.log("Token:", token);

  const loggedInUserNotAccessPaths =
    request.nextUrl.pathname === "/loginPage" ||
    request.nextUrl.pathname === "/signup";

    
    // if(request.nextUrl.pathname==="/api/login"){
    //     return;
    // }

  if (loggedInUserNotAccessPaths) {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }else{
    if(!token){
        return NextResponse.redirect(new URL("/", request.url));
    }
  }
 return NextResponse.next();

}

export const config = {
  matcher: [
    "/loginPage",
    "/signup",
    "/add-task",
    "/show-tasks",
    "/profile/:path*",
    // "/api/:path*",
  ],
};
