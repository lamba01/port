import { useState } from "react";

const experiences = [
  {
    company: "Nigerian Journal of Social Health",
    date: "2024 - Present",
    title: "Website Moderator ",
    description:
      "Regularly update and maintain the website, ensuring security, stability, and compliance with academic publishing standards.",
  },
  {
    company: "Nigerian Journal of Social Health",
    date: "2024 - 2025",
    title: "Lead Developer",
    description:
      "Developed the NJSH journal submission website to streamline academic publishing and improve online visibility.",
  },
  {
    company: "Centre for Population and Health Research",
    date: "06/2024 - 12/2024",
    title: "Frontend Engineer",
    description: `First hire to develop CEPHER's first official website, establishing its online presence to enhance visibility and accessibility for a wider audience.`,
  },
  {
    company: "Engaj Media",
    date: "07/2023 - 10/2023",
    title: "Web Design Intern",
    description:
      "Led the design of Engaj Media’s first official website, working with a cross-functional team to create amodern, 3D-enhanced user experience.",
  },
];

const colors = ["black", "red", "#303781", "green"];

export default function Experience() {
  const [bgColor, setBgColor] = useState("#fff");
  const [textColor, setTextColor] = useState("black");

  return (
    <section className="bg-[#f5f5f5] py-[120px] px-[20px] sm:px-[40px] w-full text-center flex flex-col items-center">
      <h2>3 Years of building greatness ⚡️</h2>
      <p className="">Few brands i've worked with</p>
      <div
        className="w-full sm:w-4/5 px-10 mt-10 text-start rounded-xl transition-all duration-1000 ease-in-out"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <div className="">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start border-b border-solid border-blue-300 py-14 cursor-pointer transition-colors duration-300"
              onMouseEnter={() => {
                setBgColor(colors[index % colors.length]);
                setTextColor("white");
              }}
            >
              <div className="w-full sm:w-1/3 text-lg font-semibold">
                <h4 className="font-bold text-xl">{exp.company}</h4>
                <span className="text-xs">{exp.date}</span>
              </div>
              <div className="w-full sm:w-2/3">
                <h4 className="font-bold text-xl">{exp.title}</h4>
                <span>{exp.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
