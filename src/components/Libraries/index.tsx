import Section from "../Section";
import Library from "./Library";

const Libraries = () => {
  return (
    <Section title="Libraries">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <Library key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Libraries;
