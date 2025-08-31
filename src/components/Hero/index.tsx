import { Button } from "@heroui/react";
import { Telescope } from "lucide-react";

const Hero = () => {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center gap-12">
      <div className="flex-1 hidden md:flex flex-col items-center gap-7 text-center">
        <div
          className="flex items-center justify-center w-48 h-48 rounded-xl bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://cdn.creazilla.com/digital-illustrations/1658859/background-color-light-illustration-lg.jpeg")',
          }}
        >
          <div
            className="h-32 w-32 rounded-full bg-cover border-2 bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("https://avatars.githubusercontent.com/u/98753616?v=4")`,
            }}
          ></div>
        </div>

        <div className="space-y-2">
          <div className="text-2xl font-bold">Nguyen Hoang Nam</div>
          <div className="text-xl font-code">@hnamhocit</div>
        </div>

        <Button
          color="primary"
          variant="shadow"
          radius="full"
          startContent={<Telescope />}
        >
          Get Started
        </Button>
      </div>

      <div className="flex-3 text-lg leading-relaxed">
        Hi there 👋, I’m <span className="font-semibold">Nam</span> — a{" "}
        <span className="text-pink-500 font-semibold font-code">
          full-stack developer
        </span>{" "}
        and the creator of
        <span className="text-blue-500 font-semibold font-code"> CirroBox</span>
        .
        <br />
        <br />
        I’m passionate about building{" "}
        <span className="font-semibold font-code">scalable</span>,
        <span className="font-semibold font-code">
          {" "}
          user-friendly applications
        </span>{" "}
        and love exploring new technologies. My experience spans across{" "}
        <span className="text-purple-500 font-medium font-code">React </span>,
        <span className="text-purple-500 font-medium font-code">Next.js </span>,
        <span className="text-purple-500 font-medium font-code">Node.js </span>,
        and I’m continuously expanding my skills with languages and frameworks
        like <span className="text-green-500 font-medium font-code">Rust </span>
        ,<span className="text-green-500 font-medium font-code">Go </span>,
        <span className="text-green-500 font-medium font-code">Java </span>,
        <span className="text-green-500 font-medium font-code">C# </span>, and
        more.
        <br />
        <br />I created this space to share free tools and projects — from
        <span className="font-semibold font-code text-fuchsia-500">
          {" "}
          CLI utilities
        </span>{" "}
        to apps and servers — with the goal of making the internet a better and
        more open place. 🚀
        <br />
        <br />
        If you’re interested, check out my work and contributions here:{" "}
        <a
          href="https://github.com/hnamhocit"
          className="text-blue-500 font-semibold underline font-code"
        >
          github.com/hnamhocit
        </a>
      </div>
    </div>
  );
};

export default Hero;
