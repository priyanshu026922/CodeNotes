import { BookOpen, Quote, Sparkles } from "lucide-react";

export function R() {
  return (
    <div className="hidden lg:flex bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 h-screen justify-center items-center relative overflow-hidden">
    
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-24 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl animate-none"></div>
        <div className="absolute top-48 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl animate-none"></div>
        <div className="absolute bottom-24 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl animate-none"></div>
      </div>

      <div className="absolute top-20 left-20 text-white/10 animate-none">
        <BookOpen className="w-6 h-6" />
      </div>
      <div className="absolute top-40 right-32 text-white/10 animate-none">
        <Sparkles className="w-5 h-5" />
      </div>
      <div className="absolute bottom-32 left-32 text-white/10 animate-none">
        <Quote className="w-6 h-6" />
      </div>

      <div className="relative z-10 max-w-xl px-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20">
            <Quote className="w-6 h-6 text-white" />
          </div>

          <blockquote className="text-white/80 text-xl font-light leading-relaxed mb-8 relative">
            <span className="text-3xl text-white/30 absolute -top-3 -left-4">"</span>
            The greatest achievement of technology is not how it changes life, but how it improves it.
            <span className="text-3xl text-white/30 absolute -bottom-6 -right-4">"</span>
          </blockquote>

          <div className="flex items-center justify-center space-x-4">
            <div className="w-11 h-11 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-md shadow-white/10">
              <span className="text-white font-semibold text-base">S</span>
            </div>
            <div className="text-left">
              <div className="text-white font-medium text-base">Satya Nadella</div>
              <div className="text-white/50 text-sm">CEO of Microsoft</div>
            </div>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
     <div className="w-2 h-2 bg-white/30 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
    <div className="w-2 h-2 bg-white/30 rounded-full"></div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-6 text-center border-t border-white/10 pt-8">
          {[
            { title: "Writers", desc: "Create content, share your voice" },
            { title: "Stories", desc: "Explore inspiring narratives" },
            { title: "Readers", desc: "Enjoy and support your favorites" },
          ].map((item) => (
            <div key={item.title} className="text-white/80 hover:text-white transition">
              <div className="text-xl font-semibold">{item.title}</div>
              <p className="text-xs text-white/50 mt-1">{item.desc}</p>
            </div>
          ))}
         </div>
        </div>
      </div>
  );
}
