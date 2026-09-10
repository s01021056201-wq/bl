import Starfield from "./Starfield";
import Nav from "./Nav";
export default function AstroLayout({children}){return <div className="min-h-screen bg-black text-foreground"><Starfield/><Nav/><main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">{children}</main></div>;}